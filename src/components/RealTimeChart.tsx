import React, {useState} from 'react';
import TradingViewWidget from './TradingViewWidget';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Paper, Box, Button} from '@material-ui/core';
import {RootStateOrAny, useSelector} from 'react-redux';

let initialShapes =[
    "MACD@tv-basicstudies",
    "StochasticRSI@tv-basicstudies",
    "TripleEMA@tv-basicstudies"
  ];
//   const [symbol] = useState("AAPL");
//   const [resolution] = useState("D");

  const [shapes, setShapes] = useState(
    initialShapes
  );

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    box: {
        margin: theme.spacing(1),
    },
    paper: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    sharesList: {
        listStyleType: 'none',
        padding: 0,
        overflowY: 'scroll',
        height: '71vh',
    },
}));

export default function RealTimeChart(): JSX.Element {
    const classes = useStyles();
    const [share, setShare] = useState('NYSE:MMM');
    const realTimeChartData = useSelector((store: RootStateOrAny) => store.realTimeChart.data);


    const handleClick = (event: React.BaseSyntheticEvent): void => {
        setShare(event.target.innerHTML);
    };

    function SharesList(): JSX.Element {
        const classes = useStyles();

        const shares = realTimeChartData.map((shares: string, index: number) => {
            return (
                <li key={index}>
                    <Button onClick={handleClick}>{shares}</Button>
                </li>
            );
        });
        return (
            <Paper className={classes.paper}>
                <ul className={classes.sharesList}>{shares}</ul>
            </Paper>
        );
    }

    const TradingViewWidgetWindow = (): JSX.Element => {
        return (
            <TradingViewWidget
                // locale='en'
                width='100%'
                symbol={share}
                timezone="Europe/Moscow"
                studies={shapes} 

            />
        );
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={2} lg={2}>
                    <Box className={classes.box}>
                        <Paper className={classes.paper}>
                            <Typography>Shares List</Typography>
                            <SharesList />
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={10} lg={10}>
                    <Box className={classes.box}>
                        <Paper className={classes.paper}>
                            <Typography>Real Time Chart</Typography>
                            <TradingViewWidgetWindow />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
