import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type CommoditiesMarketProps = {
    symbolsGroups?: {
        name: string,
        originalName: string,
        symbols: {
            name: string,
            displayName: string,
        },
    },
    width?: string | number,
    height?: string | number,
    showSymbolLogo: boolean,
    colorTheme?: string,
    isTransparent?: boolean,
    locale: string,
}

export default function CommoditiesMarketDataWidget(props: CommoditiesMarketProps): JSX.Element {
    const settings = {
        symbolsGroups: [
            {
                name: 'Commodities',
                originalName: 'Commodities',
                symbols: [
                    {
                        name: 'CME_MINI:ES1!',
                        displayName: 'S&P 500',
                    },
                    {
                        name: 'CME:6E1!',
                        displayName: 'Euro',
                    },
                    {
                        name: 'COMEX:GC1!',
                        displayName: 'Gold',
                    },
                    {
                        name: 'NYMEX:CL1!',
                        displayName: 'Crude Oil',
                    },
                    {
                        name: 'NYMEX:NG1!',
                        displayName: 'Natural Gas',
                    },
                    {
                        name: 'CBOT:ZC1!',
                        displayName: 'Corn',
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
        let selector: HTMLElement | any = document.querySelector('.commodities-market-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="commodities-market-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget">
                    Commodities
                </Box>
            </Box>
        </Box>
    );
}
