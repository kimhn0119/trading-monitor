import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';

type TSingleTickerProps = {
    symbol: string,
    colorTheme: string,
    isTransparent: Boolean,
    locale: string,
}

export default function SingleTickerWidget(props: TSingleTickerProps): JSX.Element {
    const settings = {
        symbol: 'FX:EURUSD',
        colorTheme: 'light',
        isTransparent: false,
        locale: 'en',
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.single-ticker-container');
        selector.appendChild(script);
    });

    return (
        <Box className="single-ticker-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
