import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, Checkbox, FormControlLabel, useTheme } from '@mui/material';
import styled from 'styled-components';

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

const StyledRegisterContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledGridContainer = styled(Grid)`
    width: 100%;
    max-width: 1200px;
    margin: 20px 0;
`;

const StyledGridItem = styled(Grid)`
    display: flex;
    justify-content: center;
`;

const StyledCustomPaper = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    width: 300px;
    height: 300px; /* Square-shaped card */
    padding: 20px;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows[6]};
    }
`;

const StyledFormContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Register;
