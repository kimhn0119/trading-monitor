import { useEffect } from 'react';

type TMiniChart = {
    symbol: string,
    width?: string | number,
    height?: string | number,
    locale: string,
    dateRange: string,
    colorTheme: string,
    trendLineColor: string,
    underLineColor: string,
    isTransparent?: boolean,
    autosize?: boolean,
    largeChartUrl?: string,
}

export default function MiniChartWidget(props: TMiniChart): any {
    const settings = {
        symbol: props.symbol,
        width: props.width,
        height: props.height,
        locale: props.locale,
        dateRange: props.dateRange,
        colorTheme: props.colorTheme,
        trendLineColor: props.trendLineColor,
        underLineColor: props.underLineColor,
        isTransparent: props.isTransparent,
        autosize: props.autosize,
        largeChartUrl: props.largeChartUrl,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('#mini-chart-container');
        selector.append(script);
    });
    return null;
}
