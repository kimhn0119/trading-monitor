import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type TStockMarketProps = {
    colorTheme: string,
    dateRange: string,
    exchange: string,
    showChart: boolean,
    locale: string,
    width?: string | number,
    height?: string | number,
    largeChartUrl?: string,
    isTransparent?: boolean,
    showSymbolLogo: boolean,
    plotLineColorGrowing: string,
    plotLineColorFalling: string,
    gridLineColor: string,
    scaleFontColor: string,
    belowLineFillColorGrowing: string,
    belowLineFillColorFalling: string,
    symbolActiveColor: string,
}

export default function StockMarketWidget(props: TStockMarketProps) {
    const settings = {
        colorTheme: props.colorTheme,
        dateRange: props.dateRange,
        exchange: props.exchange,
        showChart: props.showChart,
        locale: props.locale,
        width: props.width,
        height: props.height,
        largeChartUrl: props.largeChartUrl,
        isTransparent: props.isTransparent,
        showSymbolLogo: props.showSymbolLogo,
        plotLineColorGrowing: props.plotLineColorGrowing,
        plotLineColorFalling: props.plotLineColorFalling,
        gridLineColor: props.gridLineColor,
        scaleFontColor: props.scaleFontColor,
        belowLineFillColorGrowing: props.belowLineFillColorGrowing,
        belowLineFillColorFalling: props.belowLineFillColorFalling,
        symbolActiveColor: props.symbolActiveColor,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLElement | any = document.querySelector('.stock-market-container');
        selector.appendChild(script);
    });

    return (
        <Box className="stock-market-container">
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
