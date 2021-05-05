import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type ForexHeatType = {
    width?: string | number | boolean,
    height?: string | number | boolean,
    currencies: () => {},
    isTransparent?: boolean,
    colorTheme: string,
    locale: string,
}

export default function ForexHeatMapWidget(props: ForexHeatType): JSX.Element {
    const settings = {
        width: props.width,
        height: props.height,
        currencies: props.currencies,
        isTransparent: props.isTransparent,
        colorTheme: props.colorTheme,
        locale: props.locale,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.forex-heat-map-container');
        selector.appendChild(script);
    });

    return (
        <Box
            className="forex-heat-map-container"
            style={{ width: '100%', height: '300px' }}
        >
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
