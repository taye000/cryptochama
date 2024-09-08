import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/ThemeContext';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '@/context/AuthContext';
import '@rainbow-me/rainbowkit/styles.css';

const NavLinks = styled('div')({
    display: 'flex',
    gap: '1rem',
    '@media (max-width: 768px)': {
        display: 'none',
    },
});

const MobileNavLinks = styled(List)({
    width: 250,
});

const Navbar = () => {
    const { mode, toggleTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const { user, logout } = useAuth(); // Destructure logout function if available

    useEffect(() => {
        // This effect runs after the initial render, safely managing client-side state
        setDrawerOpen(false); // Ensure drawer is closed on initial render
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
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
                        <Button color="inherit" href="/join-chama" style={{ fontWeight: isActive('/join-chama') ? 'bold' : 'normal' }}>
                            Join Chama
                        </Button>
                        <Button color="inherit" href="/earn-interest" style={{ fontWeight: isActive('/earn-interest') ? 'bold' : 'normal' }}>
                            Earn Interest
                        </Button>
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
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {user.name}
                                </Typography>
                                <Button color="inherit" onClick={logout} style={{ fontWeight: isActive('/logout') ? 'bold' : 'normal' }}>
                                    Logout
                                </Button>
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
                    <ListItem component="a" href="/join-chama">
                        <ListItemText primary="Join Chama" />
                    </ListItem>
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

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 250px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.palette.mode === 'dark' ? '#333333' : '#f5f5f5'};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export default Navbar;
