import React from 'react';
import Clock from './Clock';
import { Grid } from '@material-ui/core';

export default function WorldTime(): JSX.Element {
    return (
        <Grid container>
            <Grid item xs={2}>
                <Clock
                    city="TOKYO"
                    utc={9}
                    workTime={{ open: 10, close: 17 }} />
            </Grid>
            <Grid item xs={2}>
                <Clock
                    city="HONG KONG"
                    utc={8}
                    workTime={{ open: 10, close: 17 }}
                />
            </Grid>
            <Grid item xs={2}>
                <Clock
                    city="MOSCOW"
                    utc={3}
                    workTime={{ open: 10, close: 17 }} />
            </Grid>
            <Grid item xs={2}>
                <Clock
                    city="FRANKFURT"
                    utc={2}
                    workTime={{ open: 10, close: 17 }}
                />
            </Grid>
            <Grid item xs={2}>
                <Clock
                    city="LONDON"
                    utc={1}
                    workTime={{ open: 10, close: 17 }} />
            </Grid>
            <Grid item xs={2}>
                <Clock
                    city="NEW YORK"
                    utc={-4}
                    workTime={{ open: 10, close: 17 }}
                />
            </Grid>
        </Grid>
    );
}
