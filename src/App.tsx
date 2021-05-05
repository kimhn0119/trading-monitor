import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import MenuAppBar from './components/MenuAppBar';
import WorldTime from './components/WorldTime';
import TickerTape from './components/TickerTape';
import Main from './components/Main';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        minHeight: '100vh',
        gridTemplateRows: 'auto auto auto 1fr auto',
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <>
            <CssBaseLine />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <MenuAppBar title="Trading Monitor" />
                </Grid>
                <Grid item xs={12}>
                    <TickerTape />
                </Grid>
                <Grid item xs={12}>
                    <WorldTime />
                </Grid>

                <Grid item xs={12}>
                    <Main />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}
