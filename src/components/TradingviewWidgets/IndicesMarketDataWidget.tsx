import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type TIndicesMarketProps = {
    symbolsGroups?: {
        name: string;
        originalName: string;
        symbols: {
            name: string;
            displayName: string;
        },
    },
    width?: string | number,
    height?: string | number,
    showSymbolLogo: boolean,
    colorTheme: string,
    isTransparent: boolean,
    locale: string,
}

export default function IndicesMarketDataWidget(props: TIndicesMarketProps): JSX.Element {
    const settings = {
        symbolsGroups: [
            {
                name: 'Indices',
                originalName: 'Indices',
                symbols: [
                    {
                        name: 'FOREXCOM:SPXUSD',
                        displayName: 'S&P 500',
                    },
                    {
                        name: 'FOREXCOM:NSXUSD',
                        displayName: 'Nasdaq 100',
                    },
                    {
                        name: 'FOREXCOM:DJI',
                        displayName: 'Dow 30',
                    },
                    {
                        name: 'INDEX:NKY',
                        displayName: 'Nikkei 225',
                    },
                    {
                        name: 'INDEX:DEU30',
                        displayName: 'DAX Index',
                    },
                    {
                        name: 'FOREXCOM:UKXGBP',
                        displayName: 'FTSE 100',
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
        let selector: HTMLElement | any = document.querySelector('.indices-market-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="indices-market-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget">
                    Indices
                </Box>
            </Box>
        </Box>
    );
}
