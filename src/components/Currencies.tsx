import React from 'react';
import MiniChartWidget from './TradingviewWidgets/MiniChartWidget';
import { Box, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RootStateOrAny, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    paper: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(1),
    },
}));

export default function Currencies(): JSX.Element {
    const classes = useStyles();
    const currencies = useSelector((store: RootStateOrAny) => store.currencies.data);

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Box>
                    <Typography className={classes.text}>Currencies</Typography>
                </Box>
                <Grid
                    container
                    className={classes.container}
                    id="mini-chart-container"
                >
                    {currencies.map((ticker: string, index: number): React.ReactElement<React.ReactNode> => (
                        <Grid item xs={12} key={index}>
                            <MiniChartWidget
                                symbol={ticker}
                                locale="en"
                                dateRange="D"
                                colorTheme="light"
                                trendLineColor="#37a6ef"
                                underLineColor="#E3F2FD"
                                autosize={true}
                                isTransparent={false}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
}
