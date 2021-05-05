import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type BondsMarketProps = {
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
    colorTheme: string,
    isTransparent: boolean,
    locale: string,
}

export default function BondsMarketDataWidget(props: BondsMarketProps): JSX.Element {
    const settings = {
        symbolsGroups: [
            {
                name: 'Bonds',
                originalName: 'Bonds',
                symbols: [
                    {
                        name: 'CME:GE1!',
                        displayName: 'Eurodollar',
                    },
                    {
                        name: 'CBOT:ZB1!',
                        displayName: 'T-Bond',
                    },
                    {
                        name: 'CBOT:UB1!',
                        displayName: 'Ultra T-Bond',
                    },
                    {
                        name: 'EUREX:FGBL1!',
                        displayName: 'Euro Bund',
                    },
                    {
                        name: 'EUREX:FBTP1!',
                        displayName: 'Euro BTP',
                    },
                    {
                        name: 'EUREX:FGBM1!',
                        displayName: 'Euro BOBL',
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
        let selector: HTMLElement | any = document.querySelector('.bonds-market-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="bonds-market-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget">
                    Bonds
                </Box>
            </Box>
        </Box>
    );
}
