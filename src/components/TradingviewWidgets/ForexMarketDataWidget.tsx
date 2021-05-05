import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';

type TForexMarketProps = {
    width?: string | number,
    height?: string | number,
    symbolsGroups?: {
        name: string,
        originalName: string,
        symbols: {
            name: string,
        },
    },
    showSymbolLogo: boolean,
    colorTheme: string,
    isTransparent: boolean,
    locale: string,
}

export default function ForexMarketDataWidget(props: TForexMarketProps): JSX.Element {
    const settings = {
        symbolsGroups: [
            {
                name: 'Forex',
                originalName: 'Forex',
                symbols: [
                    {
                        name: 'FX:EURUSD',
                    },
                    {
                        name: 'FX:GBPUSD',
                    },
                    {
                        name: 'FX:USDJPY',
                    },
                    {
                        name: 'FX:USDCHF',
                    },
                    {
                        name: 'FX:AUDUSD',
                    },
                    {
                        name: 'FX:USDCAD',
                    },
                ],
            },
        ],
        width: props.width,
        height: props.height,
        showSymbolLogo: props.showSymbolLogo,
        colorTheme: props.colorTheme,
        isTransparent: props.isTransparent,
        locale: props.locale,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.forex-market-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="forex-market-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget">
                    Forex
                </Box>
            </Box>
        </Box>
    );
}
