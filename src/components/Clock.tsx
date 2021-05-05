import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: theme.spacing(0.1),
        padding: theme.spacing(1),
        textAlign: 'center',
        height: '100%',
        alignItems: 'center',
    },
    clock: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    city: {
        fontSize: '0.7em',
        fontWeight: 'bold',
    },
    open: {
        border: '1px solid green',
    },
    close: {
        border: '1px solid rgb(248, 169, 169)',
    },
}));

type TClockProps = {
    city: string,
    utc: number,
    workTime: {
        open: number,
        close: number,
    }
}

export default function Clock({ city, utc, workTime: { open, close } }: TClockProps): JSX.Element {
    const classes = useStyles();
    const currentHours = new Date().getUTCHours() + utc;
    const currentMinutes = new Date().getUTCMinutes();

    const [hours, setHours] = useState(currentHours);
    const [minutes, setMinutes] = useState(currentMinutes);

    const dayOver = (hours: number): number => {
        if (hours >= 24) {
            return hours - 24;
        }
        return hours;
    }

    const timeUpdate = (): void => {
        const newHours = dayOver(currentHours);
        const newMinutes = currentMinutes;
        setHours(newHours);
        setMinutes(newMinutes);
    };

    useEffect(() => {
        setInterval(timeUpdate, 1000);
    });

    return (
        <div className="clock-container">
            <Paper className={classes.paper}>
                <Box className={classes.city}>{city}</Box>
                <Box>
                    <Typography className={classes.clock}>
                        {hours < 10 ? '0' + hours : hours}:
                        {minutes < 10 ? '0' + minutes : minutes}
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
}
