import React, { PureComponent } from 'react';
import { Box } from '@material-ui/core';

declare const TradingView: any;

interface IProps {
    widgetType: string;
    children?: React.ReactNode;
    autosize?: boolean;
    symbol?: string;
    width?: number | string;
    height?: number | string;
    interval?: string | number;
    popup_width?: string | number;
    popup_height?: string | number;
    studies:string[];
}

export enum EBarStyles {
    BARS = '0',
    CANDLES = '1',
    HOLLOW_CANDLES = '9',
    HEIKIN_ASHI = '8',
    LINE = '2',
    AREA = '3',
    RENKO = '4',
    LINE_BREAK = '7',
    KAGI = '5',
    POINT_AND_FIGURE = '6',
};

export enum EIntervalTypes {
    D = 'D',
    W = 'W',
};

export enum ERangeTypes {
    YTD = 'ytd',
    ALL = 'all',
};

export enum EThemes {
    LIGHT = 'Light',
    DARK = 'Dark',
};

const SCRIPT_ID: string = 'tradingview-widget-script';
const CONTAINER_ID: string = 'tradingview-widget';

export default class TradingViewWidget extends PureComponent<IProps> {
    static allow_symbol_change: boolean;
    static autosize: boolean;
    static calendar: boolean;
    static details: boolean;
    static enable_publishing: boolean;
    static height: boolean;
    static hideideas: boolean;
    static hide_legend: boolean;
    static hide_side_toolbar: boolean;
    static hide_top_toolbar: boolean;
    static hotlist: boolean;
    static interval: [
        1,
        3,
        5,
        15,
        30,
        60,
        120,
        180,
        '1',
        '3',
        '5',
        '15',
        '30',
        '60',
        '120',
        '180',
        EIntervalTypes.D,
        EIntervalTypes.W,
    ];
    static locale: string;
    static news: string[];
    static no_referral_id: boolean;
    static popup_height: number | string;
    static popup_width: number | string;
    static range: [
        '1d',
        '5d',
        '1m',
        '3m',
        '6m',
        ERangeTypes.YTD,
        '12m',
        '60m',
        ERangeTypes.ALL
    ];
    static referral_id: string;
    static save_image: boolean;
    static show_popup_button: boolean;
    static studies: string[];
    static style: [
        EBarStyles.BARS,
        EBarStyles.CANDLES,
        EBarStyles.HOLLOW_CANDLES,
        EBarStyles.HEIKIN_ASHI,
        EBarStyles.LINE,
        EBarStyles.AREA,
        EBarStyles.RENKO,
        EBarStyles.LINE_BREAK,
        EBarStyles.KAGI,
        EBarStyles.POINT_AND_FIGURE
    ];
    static symbol: string;
    static theme: [EThemes.LIGHT, EThemes.DARK];
    static timezone: string;
    static toolbar_bg: string;
    static watchlist: string;
    static widgetType: string;
    static width: number;
    static withdateranges: boolean;


    static defaultProps = {
        allow_symbol_change: true,
        autosize: false,
        enable_publishing: false,
        height: 610,
        hideideas: true,
        hide_legend: false,
        hide_side_toolbar: true,
        hide_top_toolbar: false,
        interval: EIntervalTypes.D,
        locale: 'en',
        save_image: true,
        show_popup_button: false,
        style: EBarStyles.CANDLES,
        theme: EThemes.LIGHT,
        timezone: 'Etc/UTC',
        toolbar_bg: '#F1F3F6',
        widgetType: 'widget',
        width: 980,
        withdateranges: false,
   
    };

    containerId = `${CONTAINER_ID}-${Math.random()}`;
    componentDidMount = () => this.appendScript(this.initWidget);

    componentDidUpdate = () => {
        this.cleanWidget();
        this.initWidget();
    };

    canUseDOM = () => !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );

    appendScript = (onload: any) => {
        if (!this.canUseDOM()) {
            onload();
            return;
        }

        if (this.scriptExists()) {
            // global TradingView
            if (typeof TradingView === 'undefined') {
                this.updateOnloadListener(onload);
            }

            onload();
        }
        // global Tradingview
        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = onload;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    getScriptElement = () =>
        document.getElementById(SCRIPT_ID);

    scriptExists = () =>
        this.getScriptElement() !== null;

    updateOnloadListener = (onload: any) => {
        const script = this.getScriptElement();
        const oldOnload = () => script!.onload;
        return script!.onload = () => {
            oldOnload();
            onload();
        };
    };

    initWidget = () => {
        // global TradingView
        if (typeof TradingView === 'undefined' || !document.getElementById(this.containerId)) return;

        const { widgetType, ...widgetConfig } = this.props;
        const config = { ...widgetConfig, container_id: this.containerId };

        if (config.autosize) {
            delete config.width;
            delete config.height;
        }

        if (typeof config.interval === 'number') {
            config.interval = config.interval.toString();
        }

        if (config.popup_width && typeof config.popup_width === 'number') {
            config.popup_width = config.popup_width.toString();
        }

        if (config.popup_height && typeof config.popup_height === 'number') {
            config.popup_height = config.popup_height.toString();
        }

        // global TradingView
        new TradingView[widgetType](config);
    };

    cleanWidget = () => {
        if (!this.canUseDOM()) return;
        document.getElementById(this.containerId)!.innerHTML = '';
    };

    getStyle = () => {
        if (!this.props.autosize) return {};
        return {
            width: '100%',
            height: '100%'
        };
    };

    render() {
        return <Box id={this.containerId} style={this.getStyle()} />
    }
}