import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/Loading';

interface AuthContextProps {
    user: any;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    updateUser: (user: any) => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

                if (token) {
                    const response = await fetch('/api/auth/me', { headers: { 'Authorization': `Bearer ${token}` } });
                    const data = await response.json();

                    if (response.ok) {
                        setUser(data.user);
                    } else {
                        console.error('Failed to fetch user:', data.message);
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (token: string) => {
        document.cookie = `token=${token}; Path=/;`;
        try {
            // Fetch user data after login to ensure state is updated
            const response = await fetch('/api/auth/me', { headers: { 'Authorization': `Bearer ${token}` } });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                router.push('/dashboard');
            } else {
                console.error('Failed to fetch user:', data.message);
                setUser(null);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
        }
    };

    const updateUser = (updatedUser: any) => {
        setUser(updatedUser);
        router.push('/profile');
    };

    const logout = () => {
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, updateUser, loading }}>
            {loading ? <LoadingSpinner isLoading={false} /> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
