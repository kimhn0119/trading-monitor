import React from 'react';
import {Grid, Typography, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: theme.spacing(0.1),
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    author: {
        paddingTop: theme.spacing(2),
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
    },
}));

export default function Footer(): JSX.Element {
    const classes = useStyles();

    return (
        <Grid container className={classes.footer}>
            <Grid item xs={12} className={classes.author}>
                <Typography>Developed for portfolio</Typography>
                <Typography> by Yuri Levin</Typography>
            </Grid>
            <Grid item xs={12} className={classes.icons}>
                <Link href="mailto:yulevinpost@gmail.com">
                    <MailIcon fontSize='large' className={classes.icons} />
                </Link>
                <Link href="https://t.me/Yulevin" >
                    <TelegramIcon fontSize='large' className={classes.icons} />
                </Link>
                <Link href="https://github.com/Yulevin">
                    <GitHubIcon fontSize='large' className={classes.icons} />
                </Link>
            </Grid>
        </Grid>
    );
}
