import React, { cloneElement, useEffect, useState } from 'react'
import classes from './styles/Navbar.module.css'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useScrollTrigger, Container, Stack, Tabs, Tab, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Box } from '@mui/material'
import styled from '@emotion/styled'
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import { deepOrange, red } from '@mui/material/colors'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const StyledDiv = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    marginBottom: 5
}))

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 45,
        width: '100%',
        backgroundColor: deepOrange['A400'],
        borderRadius: '50%'
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&.Mui-selected': {
            color: 'red',
        }
    }),
);



const Navbar = () => {
    const [currentTab, setCurrentTab] = useState('home');
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const tabChange = (event, currentTab) => {
        setCurrentTab(currentTab)
    }

    useEffect(() => {

        if (window.location.pathname === '/' && currentTab !== 'home') {
            setCurrentTab('home')
        } else if (window.location.pathname === '/products' && currentTab !== 'products') {
            setCurrentTab('products')
        } else if (window.location.pathname === '/about' && currentTab !== 'about') {
            setCurrentTab('about')
        } else if (window.location.pathname === '/profile' && currentTab !== 'profile') {
            setCurrentTab('profile')
        }

    }, [currentTab]);



    const drawerContent = (
        <Box role="presentation" onClick={() => setIsOpenDrawer(false)} onKeyDown={() => setIsOpenDrawer(false)} sx={{ width: 250 }}>
            <List className={classes.list}>
                <ListItem disablePadding component={Link} to={'/'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to={'/messages'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to={'/notifications'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to={'/profile'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <><ElevationScroll>
            <AppBar className={classes.appbar} position="fixed">
                <Container maxWidth="xl">
                    <Toolbar className={classes.toolbar}>
                        <Stack direction={'row'} sx={{ color: 'black' }} alignItems={'center'}>
                            <AdbIcon sx={{ mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                        </Stack>
                        <StyledTabs
                            value={currentTab}
                            onChange={tabChange}
                            sx={{
                                height: '72px',
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            <StyledTab
                                label="Home"
                                icon={<HomeIcon />}
                                iconPosition="start"
                                value={'home'}
                                component={Link}
                                to='/'
                            />
                            <StyledTab
                                label="Messages"
                                icon={<ChatIcon />}
                                iconPosition="start"
                                value={'messages'}
                                component={Link}
                                to='/messages'
                            />
                            <StyledTab
                                label="Notifications"
                                icon={<NotificationsIcon />}
                                iconPosition="start"
                                value={'notifications'}
                                component={Link}
                                to='/notifications'
                            />
                            <StyledTab
                                label="Profile"
                                icon={<AccountCircleIcon />}
                                iconPosition="start"
                                value={'profile'}
                                component={Link}
                                to='/profile'
                            />
                        </StyledTabs>
                        <Stack direction={'row'} spacing={1}>
                            <Button
                                variant="contained"
                                color="error"
                                startIcon={<LogoutIcon fontSize='small' />}
                                size={'small'}
                            >
                                Log Out
                            </Button>
                            <IconButton onClick={() => { setIsOpenDrawer(prev => !prev) }} sx={{ ml: '10px', display: { xs: 'block', md: 'none' } }}>
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll >
            <StyledDiv />
            <SwipeableDrawer
                anchor={'right'}
                open={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
                onOpen={() => setIsOpenDrawer(true)}
            >
                {drawerContent}
            </SwipeableDrawer>
        </>
    )
}

export default Navbar