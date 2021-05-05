import React, { useState } from 'react';
import { Box, Grid, Paper, Divider, FormControl, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TimeLineWidget from './TradingviewWidgets/TimeLineWidget';
import EconomicCalendarWidget from './TradingviewWidgets/EconomicCalendarWidget';
import { useSelector, RootStateOrAny } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(0.5),
    },
    item: {
        height: '100%',
    },
    wrapper: {
        height: '60vh',
    },
    paper: {
        padding: theme.spacing(1),
        height: '100%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    timeLine: {
        height: '100%',
    },
    calendar: {
        height: '100%',
    },
    text: {
        textAlign: 'center',
        height: '100%',
        fontSize: '0.9em',
    },
}));

type TTimeLineSelector = {
    id: number,
    name: string,
    source: string,
    description: string,
}

// TODO: this component

export default function EconomicCalendar(): JSX.Element {
    const classes = useStyles();
    const timeLineSelector = useSelector((store: RootStateOrAny) => store.economicCalendar.timeLineData);
    const [ticker, setTicker] = useState('BITSTAMP:BTCUSD');
    const [prevTicker] = useState(ticker);
    const [initCalendar] = useState(false);

    const handleChange = (event: any): void => {
        setTicker(event.target.value);
    }

    const TimeLineWidgetContainer = (): any | void => {
        if (prevTicker !== ticker) {
            console.log('ticker', ' :renderTimeLine')

            return (
                <Box className={classes.timeLine}>
                    <TimeLineWidget
                        symbol={ticker}
                        colorTheme="light"
                        isTransparent={false}
                        displayMode="regular"
                        width="100%"
                        height="100%"
                        locale="en"
                    />
                </Box>
            )
        } else if (prevTicker === ticker) {
            console.log('prevTicker', ' :renderTimeLine')

            return (
                <Box className={classes.timeLine}>
                    <TimeLineWidget
                        symbol={prevTicker}
                        colorTheme="light"
                        isTransparent={false}
                        displayMode="regular"
                        width="100%"
                        height="100%"
                        locale="en"
                    />
                </Box>
            )
        }
    }

    const EconomicCalendarWidgetContainer = (): any | void => {
        if (!initCalendar) {
            console.log('false', ' :initCalendar')

            return (
                <Box className={classes.calendar}>
                    <EconomicCalendarWidget
                        colorTheme="light"
                        isTransparent={false}
                        width="100%"
                        height="100%"
                        locale="en"
                        importanceFilter="-1,0,1"
                    />
                </Box>
            )

        } else if (initCalendar) {
            console.log('true', ' :renderingCalendar');

            return (
                <Box className={classes.calendar}>
                    <EconomicCalendarWidget
                        colorTheme="light"
                        isTransparent={false}
                        width="100%"
                        height="100%"
                        locale="en"
                        importanceFilter="-1,0,1"
                    />
                </Box>
            )
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.item}>
                <Box className={classes.wrapper}>
                    <Paper className={classes.paper}>
                        <EconomicCalendarWidgetContainer />
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.item}>
                <Box className={classes.wrapper}>
                    <Paper className={classes.paper}>
                        <Divider />
                        <Grid container >
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <FormControl className={classes.formControl}>
                                    <FormHelperText>Choose the ticker</FormHelperText>
                                    <Select
                                        value={ticker}
                                        onChange={handleChange}
                                    >
                                        {timeLineSelector.map(({ id, name, source, description }: TTimeLineSelector) => (
                                            <MenuItem key={id} value={source}>{name}
                                                <Box style={{'color': 'grey', 'padding': '5px'}} component='span'>{description}</Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <TimeLineWidgetContainer />
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}
