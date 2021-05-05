import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';

type TAdvancedRealTimeChartProps = {
    width?: string | number,
    height?: string | number,
    symbol?: string,
    interval?: number | string,
    timezone?: string,
    theme?: string,
    locale?: string,
    toolbar_bg?: string,
    enable_publishing?: boolean,
    allow_symbol_change?: boolean,
    with_date_ranges?: boolean,
    hide_side_toolbar?: boolean,
    hide_top_toolbar?: boolean,
    show_popup_button?: boolean,
};

export default function AdvancedRealTimeChartWidget(props: TAdvancedRealTimeChartProps): JSX.Element {
    const settings = {
        width: props.width,
        height: props.height,
        symbol: props.symbol,
        interval: props.interval,
        timezone: props.timezone,
        theme: props.theme,
        locale: props.locale,
        toolbar_bg: props.toolbar_bg,
        enable_publishing: props.enable_publishing,
        allow_symbol_change: props.allow_symbol_change,
        with_date_ranges: props.with_date_ranges,
        hide_side_toolbar: props.hide_side_toolbar,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.type = 'text/javascript';
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.real-time-chart-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="real-time-chart-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
