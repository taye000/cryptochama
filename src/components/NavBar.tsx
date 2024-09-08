import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '@/context/AuthContext';
import '@rainbow-me/rainbowkit/styles.css';
import { NavLinks, StyledDrawer, MobileNavLinks } from '@/styles/styled';

const Navbar = () => {
    const { mode, toggleTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();
    const { user, logout } = useAuth();

    useEffect(() => {
        setDrawerOpen(false);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isActive = (path: string) => router.pathname === path;

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { md: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <Button color="inherit" component="a" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                                CryptoChama
                            </Button>
                        </Link>
                    </Typography>
                    <NavLinks>
                        {user && (
                            <Button color="inherit" href="/join-chama" style={{ fontWeight: isActive('/join-chama') ? 'bold' : 'normal' }}>
                                Join Chama
                            </Button>
                        )}
                        {user && (
                            <Button color="inherit" href="/earn-interest" style={{ fontWeight: isActive('/earn-interest') ? 'bold' : 'normal' }}>
                                Earn Interest
                            </Button>
                        )}

                        {!user ? (
                            <>
                                <Button color="inherit" href="/login" style={{ fontWeight: isActive('/login') ? 'bold' : 'normal' }}>
                                    Login
                                </Button>
                                <Button color="inherit" href="/register" style={{ fontWeight: isActive('/register') ? 'bold' : 'normal' }}>
                                    Register
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button color="inherit" href="/dashboard" style={{ fontWeight: isActive('/dashboard') ? 'bold' : 'normal' }}>
                                    Dashboard
                                </Button>
                                <Button
                                    color="inherit"
                                    onClick={handleMenuClick}
                                    style={{ fontWeight: isActive('/profile') ? 'bold' : 'normal' }}
                                >
                                    {user.name}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem component={Link} href="/profile" onClick={handleMenuClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={() => { handleMenuClose(); logout(); }}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </NavLinks>
                    <ConnectButton
                        label='Wallet'
                        accountStatus={{
                            smallScreen: 'avatar',
                            largeScreen: 'full',
                        }}
                        chainStatus='name'
                        showBalance={false}
                    />
                    <IconButton edge="end" color="inherit" onClick={toggleTheme}>
                        {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <StyledDrawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <MobileNavLinks onClick={handleDrawerToggle}>
                    <ListItem component="a" href="/earn-interest">
                        <ListItemText primary="Earn Interest" />
                    </ListItem>
                    {user && (
                        <ListItem component="a" href="/join-chama">
                            <ListItemText primary="Join Chama" />
                        </ListItem>
                    )}
                    {!user ? (
                        <>
                            <ListItem component="a" href="/login">
                                <ListItemText primary="Login" />
                            </ListItem>
                            <ListItem component="a" href="/register">
                                <ListItemText primary="Register" />
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem component="a" href="/dashboard">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem component="a" href="/profile">
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button onClick={logout}>
                                <ListItemText primary="Logout" />
                            </ListItem>
                        </>
                    )}
                </MobileNavLinks>
            </StyledDrawer>
        </>
    );
};


export default Navbar;
