import React, { useState } from 'react';
import { Typography, TextField, useTheme } from '@mui/material';
import {  StyledFormContainer, StyledEarnInterestContainer } from '@/styles/styled';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { LoadingButton } from '@/components/Loading';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
    const theme = useTheme();
    const router = useRouter();
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(loginData.email, loginData.password);
            toast.success('Login successful');
            router.push('/dashboard');
        } catch (error: any) {
            toast.error(error.message || 'Login failed');
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
