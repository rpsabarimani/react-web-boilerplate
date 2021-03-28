import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, IconButton, Toolbar, Typography, Menu, MenuItem, Box, SwipeableDrawer } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { NAVIGATION_ITEMS } from "../constants";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { actions, selectors } from "../redux";
import { connect } from "react-redux";
import LogoImg from "../assets/icons/app_logo.png"

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        width: 250,
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        '&:focus': {
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    leftLogoContainer: {
        display: 'flex',
    },
    logoIcon: {
        width: theme.spacing(4),
        padding: 2,
        marginRight: theme.spacing(4),
        backgroundColor: '#ffffff',
        cursor: 'pointer',
    },
    menu: {
        flexGrow: 1,
        display: 'flex'
    },
    menuItem: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(1.25),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        cursor: 'pointer',
    },
    activeItem: {
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
    },
    avatorLarge: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    profileIcon: {
        display: 'flex',
        flexGrow: 1,
        cursor: 'pointer',
    },
    userName: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(0.75),
        textTransform: 'Capitalize'
    },
    drawerContainer: {
        width: '60%'
    },
}));

export function NavBar(props) {

    const { user = {} } = props.loginData;
    const { first_name = '', last_name = '', token = null } = user;
    const userName = localStorage.getItem('user_name') || `${first_name} ${last_name}`.trim();
    const authToken = localStorage.getItem('access_token') || token;
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (pathname = '/', isExternal = false) => {
        setShowDrawer(false);
        if (!isExternal)
            history.push({
                pathname
            });
        else {
            window.open(pathname)
        }
    }
    const handleLogout = () => {
        setAnchorEl(null);
        localStorage.removeItem('user_name');
        localStorage.removeItem('access_token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userData');
        history.push({
            pathname: '/login'
        });
    }
    const openProfile = () => {
        handleClose()
        history.push({
            pathname: '/profile'
        });
    }

    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setShowDrawer(isOpen)
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        props.getUserById(userId)

        // eslint-disable-next-line
    }, [])


    return (
        <div>
            {authToken ?
                <AppBar position="static" className={classes.root}>
                    <Toolbar variant="dense" className={classes.toolbar}>
                        <div className={classes.leftLogoContainer}>
                            <Box display={{ xs: 'block', sm: 'none' }}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <img src={LogoImg} className={classes.logoIcon} alt={"Our Print Logo"} onClick={() => history.push("/")} />
                            <Box display={{ xs: 'none', sm: 'block' }}>
                                <div className={classes.menu}>
                                    <NavItems handleNavigation={handleNavigation} location={location} />
                                </div>
                            </Box>
                        </div>
                        <div>
                            <div className={classes.profileIcon}>
                                <Box display={{ xs: 'none', sm: 'block' }}>
                                    <Typography variant="subtitle1" color="inherit" className={classes.userName}>
                                        Hello, {userName}
                                    </Typography>
                                </Box>
                                {user && user.image ?
                                    <Avatar alt={userName} src={user.image} onClick={handleMenu} /> :
                                    <Avatar className={classes.avatorLarge} onClick={handleMenu}>{userName.charAt(0).toUpperCase()}</Avatar>
                                }
                            </div>

                            <StyledMenu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                            >
                                <StyledMenuItem onClick={openProfile}>Profile</StyledMenuItem>
                                <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
                            </StyledMenu>
                        </div>
                    </Toolbar>
                    <SwipeableDrawer
                        anchor={'left'}
                        open={showDrawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        classes={{ paper: classes.drawerContainer }}>
                        <NavItems handleNavigation={handleNavigation} location={location} />
                    </SwipeableDrawer>
                </AppBar> : null}
        </div>
    )
}

function NavItems(props) {
    const classes = useStyles();

    return (
        <>
            {NAVIGATION_ITEMS.map((item, i) => {

                return (
                    <div
                        key={i}
                        className={clsx(classes.menuItem, props.location.pathname === item.path && classes.activeItem)}
                        onClick={() => props.handleNavigation(item.path, item.isExternal || false)}>
                        <Typography variant="subtitle1" color="inherit">
                            {item.name}
                        </Typography>
                    </div>
                );
            })}
        </>
    )
}


// mapping redux to component props
export const mapStateToProps = (state) => ({
    loginData: selectors.login(state)
});

const mapDispatchToProps = {
    getUserById: actions.getUserById
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);