import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';

interface ThemeContextProps {
    theme: Theme;
    mode: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            return storedTheme === 'dark' ? darkTheme : lightTheme;
        }
        return lightTheme;
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme.palette.mode === 'light' ? darkTheme : lightTheme;
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', newTheme.palette.mode);
            }
            return newTheme;
        });
    };

    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, mode: theme.palette.mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <StyledComponentsThemeProvider theme={theme}>
                    {children}
                </StyledComponentsThemeProvider>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
