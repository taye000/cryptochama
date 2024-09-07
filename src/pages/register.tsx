import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel, useTheme } from '@mui/material';
import { StyledGridContainer, StyledGridItem, StyledCustomPaper, StyledFormContainer, StyledEarnInterestContainer } from '@/styles/styled';

const Register = () => {
    const theme = useTheme();
    const [isChama, setIsChama] = useState(false);
    const [isNormalUser, setIsNormalUser] = useState(false);

    const handleChamaClick = () => {
        setIsChama(true);
        setIsNormalUser(false); // Hide normal user form when chama is selected
    };

    const handleNormalUserClick = () => {
        setIsNormalUser(true);
        setIsChama(false); // Hide chama form when normal user is selected
    };

    const handleNormalUserSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for normal user registration implementation (Auth0 or other API)
    };

    const handleChamaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for chama registration implementation
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
                        <TextField fullWidth label="Name" margin="normal" required />
                        <TextField fullWidth label="Email" margin="normal" type="email" required />
                        <TextField fullWidth label="Phone Number" margin="normal" required />
                        <TextField fullWidth label="Password" margin="normal" type="password" required />
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </StyledFormContainer>
            )}

            {isChama && (
                <StyledFormContainer theme={theme}>
                    <Typography variant="h6" gutterBottom>
                        Chama Registration
                    </Typography>
                    <form onSubmit={handleChamaSubmit}>
                        <TextField fullWidth label="Name of Member" margin="normal" required />
                        <TextField fullWidth label="Name of Chama" margin="normal" required />
                        <TextField fullWidth label="Principal Member" margin="normal" required />
                        <TextField fullWidth label="Principal Member Contact" margin="normal" required />
                        <TextField fullWidth label="Description" margin="normal" multiline rows={4} required />
                        <TextField fullWidth label="Password" type="password" margin="normal" required />
                        <FormControlLabel
                            control={<Checkbox name="merryGoRound" />}
                            label="Merry Go Round"
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </StyledFormContainer>
            )}

            {/* Add some space */}
            <div style={{ marginBottom: '60px' }} />
        </StyledEarnInterestContainer>
    );
};

export default Register;
