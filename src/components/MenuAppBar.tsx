import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { RootStateOrAny, useSelector, useStore } from 'react-redux';
import { SET_SCREEN_OPTION_RENDER } from '../redux/constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        marginBottom: theme.spacing(0.1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    brand: {
        border: '1px solid white',
        padding: theme.spacing(1),
        borderRadius: '10px 10px 10px 10px',
    },
}));

type TTitleProps = {
    title: string,
}

interface IScreenOptionData extends TTitleProps {
    id: number,
    item?: string,
    render?: number,
}

export default function MenuAppBar(props: TTitleProps): JSX.Element {
    const classes = useStyles();
    const store = useStore();
    const screenOption = useSelector((store: RootStateOrAny) => store.screenOption);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (event: React.BaseSyntheticEvent): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number): void => {
        setSelectedIndex(index);
        store.dispatch({ type: SET_SCREEN_OPTION_RENDER, payload: index });
        setAnchorEl(null);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {screenOption.data.map((option: IScreenOptionData) => (
                            <MenuItem
                                key={option.id}
                                selected={option.id === selectedIndex}
                                onClick={(event) =>
                                    handleMenuItemClick(event, option.id)
                                }
                            >
                                {option.item}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        {screenOption.data.map((title: IScreenOptionData) =>
                            title.id === selectedIndex ? title.item : null
                        )}
                    </Typography>
                    <Typography className={classes.brand}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
