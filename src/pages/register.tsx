import React, { useState } from 'react';
import { Typography, TextField, Checkbox, FormControlLabel, useTheme } from '@mui/material';
import { StyledGridContainer, StyledGridItem, StyledCustomPaper, StyledFormContainer, StyledEarnInterestContainer, CenteredButtonContainer } from '@/styles/styled';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { LoadingButton } from '@/components/Loading';
import { useAuth } from '@/context/AuthContext';

const Register = () => {
    const theme = useTheme();
    const router = useRouter();
    const { login } = useAuth();
    const [isChama, setIsChama] = useState(false);
    const [isNormalUser, setIsNormalUser] = useState(false);
    const [normalUserData, setNormalUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [chamaData, setChamaData] = useState({
        memberName: '',
        chamaName: '',
        principalMember: '',
        principalMemberContact: '',
        description: '',
        password: '',
        merryGoRound: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChamaClick = () => {
        setIsChama(true);
        setIsNormalUser(false);
    };

    const handleNormalUserClick = () => {
        setIsNormalUser(true);
        setIsChama(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNormalUserData({ ...normalUserData, [name]: value });
    };

    const handleChamaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setChamaData({ ...chamaData, [name]: e.target.type === 'checkbox' ? checked : value });
    };

    const handleNormalUserSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(normalUserData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('User registered successfully');
                login(data.accessToken);
                document.cookie = `token=${data.accessToken}; Path=/;`;
                router.push('/dashboard');
            } else {
                toast.error(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChamaSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: set up the endpoint for the chama registration
    };

    return (
        <StyledEarnInterestContainer theme={theme}>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <StyledGridContainer container spacing={3} justifyContent="center">
                <StyledGridItem item xs={12} sm={6} md={6} onClick={handleNormalUserClick}>
                    <StyledCustomPaper theme={theme}>
                        <Typography variant="h6">Register as Normal User</Typography>
                        <Typography variant="body2">Click here to register as a normal user.</Typography>
                    </StyledCustomPaper>
                </StyledGridItem>
                <StyledGridItem item xs={12} sm={6} md={6} onClick={handleChamaClick}>
                    <StyledCustomPaper theme={theme}>
                        <Typography variant="h6">Register a Chama</Typography>
                        <Typography variant="body2">Click here to register a chama.</Typography>
                    </StyledCustomPaper>
                </StyledGridItem>
            </StyledGridContainer>

            {isNormalUser && (
                <StyledFormContainer theme={theme}>
                    <Typography variant="h6" gutterBottom>
                        Normal User Registration
                    </Typography>
                    <form onSubmit={handleNormalUserSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            name="name"
                            onChange={handleInputChange}
                            required
                        />
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
                            label="Phone Number"
                            margin="normal"
                            name="phone"
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
                        <CenteredButtonContainer>
                            <LoadingButton type="submit" loading={loading}>
                                <span className="button-text">Submit</span>
                            </LoadingButton>
                        </CenteredButtonContainer>
                    </form>
                </StyledFormContainer>
            )}

            {isChama && (
                <StyledFormContainer theme={theme}>
                    <Typography variant="h6" gutterBottom>
                        Chama Registration
                    </Typography>
                    <form onSubmit={handleChamaSubmit}>
                        <TextField
                            fullWidth
                            label="Name of Member"
                            margin="normal"
                            name="memberName"
                            onChange={handleChamaInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Name of Chama"
                            margin="normal"
                            name="chamaName"
                            onChange={handleChamaInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Principal Member"
                            margin="normal"
                            name="principalMember"
                            onChange={handleChamaInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Principal Member Contact"
                            margin="normal"
                            name="principalMemberContact"
                            onChange={handleChamaInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            margin="normal"
                            name="description"
                            multiline
                            rows={4}
                            onChange={handleChamaInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            type="password"
                            name="password"
                            onChange={handleChamaInputChange}
                            required
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="merryGoRound"
                                    onChange={handleChamaInputChange}
                                />
                            }
                            label="Merry Go Round"
                        />
                        <LoadingButton type="submit" loading={loading}>
                            <span className="button-text">Submit</span>
                        </LoadingButton>
                    </form>
                </StyledFormContainer>
            )}
        </StyledEarnInterestContainer>
    );
};

export default Register;
