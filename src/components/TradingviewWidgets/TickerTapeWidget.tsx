import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type TTickerTapeProps = {
    symbols: Array<{ description: string, proName: string }>,
    showSymbolLogo: boolean,
    colorTheme: string,
    isTransparent: boolean,
    displayMode: string,
    locale: string,
}

export default function TickerTapeWidget(props: TTickerTapeProps): JSX.Element {
    const settings = {
        symbols: props.symbols,
        showSymbolLogo: props.showSymbolLogo,
        colorTheme: props.colorTheme,
        isTransparent: props.isTransparent,
        displayMode: props.displayMode,
        locale: props.locale,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.ticker-tape-container');
        selector.appendChild(script);
    });

    return (
        <Box className="ticker-tape-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
