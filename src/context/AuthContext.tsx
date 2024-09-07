import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

interface AuthContextType {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshTokens: () => Promise<void>;
}

interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedUser = localStorage.getItem('user');

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);

            // Check if storedUser is not null or undefined before parsing
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error('Failed to parse user from localStorage:', error);
                    // Optionally, you can clear the user data if parsing fails
                    localStorage.removeItem('user');
                }
            }
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setAccessToken(data.accessToken);
                setRefreshToken(data.refreshToken);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                router.push('/dashboard');
            } else {
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    const logout = () => {
        fetch('/api/auth/logout', {
            method: 'GET',
        }).then(() => {
            setAccessToken(null);
            setRefreshToken(null);
            setUser(null);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            router.push('/login');
        });
    };

    const refreshTokens = async () => {
        try {
            const response = await fetch('/api/auth/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            const data = await response.json();
            if (response.ok) {
                setAccessToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            } else {
                toast.error(data.message || 'Failed to refresh token');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, refreshToken, login, logout, refreshTokens }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
