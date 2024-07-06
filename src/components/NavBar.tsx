import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../context/ThemeContext';

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Navbar = () => {
    const { mode, toggleTheme } = useTheme();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Crypto Chama
                </Typography>
                <NavLinks>
                    <Button color="inherit" href="/earn-interest">Earn Interest</Button>
                    <Button color="inherit" href="/join-chama">Join Chama</Button>
                    <Button color="inherit" href="/register">Register</Button>
                </NavLinks>
                <IconButton edge="end" color="inherit" onClick={toggleTheme}>
                    {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
