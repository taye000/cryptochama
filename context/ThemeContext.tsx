import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
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
    const [theme, setTheme] = useState<Theme>(lightTheme);
    const mode = theme.palette.mode;

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
