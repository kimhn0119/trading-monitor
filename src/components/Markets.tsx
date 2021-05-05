import React from 'react';
import { useStore } from 'react-redux';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StockMarketWidget from './TradingviewWidgets/StockMarketWidget';
import MarketDataWidget from './TradingviewWidgets/MarketDataWidget';
import ForexHeatMapWidget from './TradingviewWidgets/ForexHeatMapWidget';
import TradingViewWidget from './TradingViewWidget';
import { GET_FOREX_HEAT_MAP_CURRENCIES } from '../redux/constants';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(0.1),
    },
    box: {
        marginTop: theme.spacing(0.1),
        textAlign: 'center',
    },
}));

export default function Markets(): JSX.Element {
    const classes = useStyles();
    const store = useStore();
    
    const currenciesForexHeatMap = (): any => {
        store.dispatch({type: GET_FOREX_HEAT_MAP_CURRENCIES})
    }
    
    return (
        <Grid container>
            <Grid container className={classes.box}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <TradingViewWidget
                            width="100%"
                            height='300'
                            interval='D'
                            timezone='Europe/Moscow'
                            symbol="BTCUSD"
                            allow_symbol_change={false}
                            hide_top_toolbar={true}
                            show_popup_button={true}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <TradingViewWidget
                            width="100%"
                            height='300'
                            interval='D'
                            timezone='Europe/Moscow'
                            symbol="NYMEX:CL1!"
                            allow_symbol_change={false}
                            hide_top_toolbar={true}
                            show_popup_button={true}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <TradingViewWidget
                            width="100%"
                            height='300'
                            interval='D'
                            timezone='Europe/Moscow'
                            symbol="COMEX:GC1!"
                            allow_symbol_change={false}
                            hide_top_toolbar={true}
                            show_popup_button={true}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
                <Box className={classes.box}>
                    <Paper className={classes.paper}>
                        <Typography>Market Data</Typography>
                        <MarketDataWidget 
                            width='100%'
                            height='600'
                            showSymbolLogo={true}
                            colorTheme='light'
                            isTransparent={false}
                            locale='en'
                        />
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box className={classes.box}>
                    <Paper className={classes.paper}>
                        <Typography>Stock Market</Typography>
                        <StockMarketWidget
                            colorTheme="light"
                            dateRange="12M"
                            exchange="US"
                            showChart={true}
                            locale="en"
                            width="100%"
                            height={600}
                            largeChartUrl=""
                            isTransparent={false}
                            showSymbolLogo={false}
                            plotLineColorGrowing="rgba(33, 150, 243, 1)"
                            plotLineColorFalling="rgba(33, 150, 243, 1)"
                            gridLineColor="rgba(240, 243, 250, 1)"
                            scaleFontColor="rgba(120, 123, 134, 1)"
                            belowLineFillColorGrowing="rgba(33, 150, 243, 0.12)"
                            belowLineFillColorFalling="rgba(33, 150, 243, 0.12)"
                            symbolActiveColor="rgba(33, 150, 243, 0.12)"
                        />
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box className={classes.box}>
                    <Paper className={classes.paper}>
                        <Typography>Forex Heat Map</Typography>
                        <ForexHeatMapWidget
                            width="100%"
                            height="100%"
                            currencies={currenciesForexHeatMap}
                            isTransparent={false}
                            colorTheme="light"
                            locale="en"
                        />
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}
