import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import TickerTapeWidget from './TradingviewWidgets/TickerTapeWidget';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    }
}))

const tapeSymbols = [
    {
        description: 'IMOEX',
        proName: 'MOEX:IMOEX',
    },
    {
        description: 'RTS',
        proName: 'MOEX:RTSI',
    },
    {
        description: 'UKOIL',
        proName: 'TVC:UKOIL',
    },
    {
        description: 'NATURALGAS',
        proName: 'CURRENCYCOM:NATURALGAS',
    },
    {
        description: 'RSX',
        proName: 'AMEX:RSX',
    },
    {
        description: 'USDRUB',
        proName: 'FOREXCOM:USDRUB',
    },
    {
        description: 'EURRUB',
        proName: 'FOREXCOM:EURRUB',
    },
];

export default function TickerTape(): JSX.Element {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TickerTapeWidget symbols={tapeSymbols}
                showSymbolLogo={true}
                colorTheme='light'
                isTransparent={false}
                displayMode='adaptive'
                locale='ru'
            />
        </Paper>
    )
}