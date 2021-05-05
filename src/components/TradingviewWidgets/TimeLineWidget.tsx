import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type TTimeLineProps = {
    symbol: string,
    colorTheme: string,
    isTransparent: boolean,
    largeChartUrl?: string,
    displayMode: string,
    width?: string | number,
    height?: string | number,
    locale: string,
}

export default function TimeLineWidget(props: TTimeLineProps) {
    const settings = {
        symbol: props.symbol,
        colorTheme: props.colorTheme,
        isTransparent: props.isTransparent,
        largeChartUrl: props.largeChartUrl,
        displayMode: props.displayMode,
        width: props.width,
        height: props.height,
        locale: props.locale,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.time-line-container');
        selector.appendChild(script);
    });

    return (
        <Box className="time-line-container" style={{ height: '85%' }}>
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
