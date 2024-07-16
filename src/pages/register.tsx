import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel, useTheme } from '@mui/material';
import { StyledRegisterContainer, StyledGridContainer, StyledGridItem, StyledCustomPaper, StyledFormContainer } from '@/styles/styled';

const Register = () => {
    const theme = useTheme();
    const [isChama, setIsChama] = useState(false);

    const handleChamaClick = () => {
        setIsChama(true);
    };

    const handleNormalUserClick = () => {
        // Placeholder for Auth0 registration implementation
    };

    return (
        <StyledRegisterContainer theme={theme}>
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
            {isChama && (
                <StyledFormContainer theme={theme}>
                    <Typography variant="h6" gutterBottom>
                        Chama Registration
                    </Typography>
                    <form>
                        <TextField fullWidth label="Name of Chama" margin="normal" required />
                        <TextField fullWidth label="Principal Member" margin="normal" required />
                        <TextField fullWidth label="Principal Member Contact" margin="normal" required />
                        <TextField fullWidth label="Description" margin="normal" multiline rows={4} required />
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
        </StyledRegisterContainer>
    );
};

export default Register;
