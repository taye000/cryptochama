import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import styled from 'styled-components';

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(List)`
  width: 250px;
`;

const Navbar = () => {
    const { mode, toggleTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar position="static">
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
                        Crypto Chama
                    </Typography>
                    <NavLinks>
                        <Button color="inherit" href="/">Home</Button>
                        <Button color="inherit" href="/earn-interest">Earn Interest</Button>
                        <Button color="inherit" href="/join-chama">Join Chama</Button>
                        <Button color="inherit" href="/register">Register</Button>
                    </NavLinks>
                    <IconButton edge="end" color="inherit" onClick={toggleTheme}>
                        {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <MobileNavLinks onClick={handleDrawerToggle}>
                    <ListItem button component="a" href="/earn-interest">
                        <ListItemText primary="Earn Interest" />
                    </ListItem>
                    <ListItem button component="a" href="/join-chama">
                        <ListItemText primary="Join Chama" />
                    </ListItem>
                    <ListItem button component="a" href="/register">
                        <ListItemText primary="Register" />
                    </ListItem>
                </MobileNavLinks>
            </Drawer>
        </>
    );
};

export default Navbar;
