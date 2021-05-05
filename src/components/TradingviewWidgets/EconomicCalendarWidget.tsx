import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

type CalendarProps = {
    colorTheme?: string,
    isTransparent?: boolean,
    displayMode?: string,
    width?: string | number,
    height?: string | number,
    locale?: string,
    importanceFilter?: string,
}

export default function EconomicCalendarWidget(props: CalendarProps): JSX.Element {
    const settings = {
        colorTheme: props.colorTheme,
        isTransparent: props.isTransparent,
        width: props.width,
        height: props.height,
        locale: props.locale,
        importanceFilter: props.importanceFilter,
    };

    useEffect((): void => {
        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
        script.async = true;
        script.innerHTML = JSON.stringify(settings);
        let selector: HTMLInputElement | any = document.querySelector('.economic-calendar-container');
        selector.appendChild(script) ;
    });

    return (
        <Box className="economic-calendar-container" style={{ height: '100%' }}>
            <Box className="tradingview-widget-container">
                <Box className="tradingview-widget-container__widget"></Box>
            </Box>
        </Box>
    );
}
