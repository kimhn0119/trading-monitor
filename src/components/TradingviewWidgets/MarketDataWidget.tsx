import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type MarketDataProps = {
    symbolsGroups?: Array<{
        name: string,
        originalName: string,
        symbols: {
            name: string,
            displayName: string,
        } | {
            name: string,
            originalName: string,
            symbols: [{
                name: string,
            }]
        }
    }>,
    width: string | number,
    height: string | number,
    showSymbolLogo: boolean,
    colorTheme: string,
    isTransparent: boolean,
    locale: string,

};

export default function MarketDataWidget(props: MarketDataProps): JSX.Element {
    const settings = {
        width: props.width,
        height: props.height,
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
        let selector: HTMLElement | any = document.querySelector('.market-data-container');
        selector.appendChild(script);
    });

    return (
        <Box className="market-data-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
