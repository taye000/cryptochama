import React, { useState } from 'react';
import { Typography, TextField, useTheme } from '@mui/material';
import { StyledFormContainer, StyledEarnInterestContainer } from '@/styles/styled';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { LoadingButton } from '@/components/Loading';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
    const theme = useTheme();
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                login(data.accessToken);
                toast.success('Login successful! Redirecting to dashboard...');
                console.log('Access Token:', data.accessToken);
                console.log('Refresh Token:', data.refreshToken);
                router.push('/dashboard');
            } else {
                toast.error(data.message || 'Login failed.');
            }
        } catch (error) {
            toast.error('An error occurred during login.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledEarnInterestContainer theme={theme}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <StyledFormContainer theme={theme}>
                <Typography variant="h6" gutterBottom>
                    Login to your account
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        margin="normal"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        required
                    />
                    <LoadingButton type="submit" loading={loading}>
                        <span className="button-text">Login</span>
                    </LoadingButton>
                </form>
            </StyledFormContainer>
        </StyledEarnInterestContainer>
    );
};

export default Login;
