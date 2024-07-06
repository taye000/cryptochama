import React, { useState } from 'react';
import { Typography, Grid, Paper, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import styled from 'styled-components';

const Register = () => {
    const [isChama, setIsChama] = useState(false);

    const handleChamaClick = () => {
        setIsChama(true);
    };

    const handleNormalUserClick = () => {
        // Placeholder for Auth0 registration implementation
    };

    return (
        <RegisterContainer>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6} onClick={handleNormalUserClick}>
                    <Paper elevation={3}>
                        <CardContent>
                            <Typography variant="h6">Register as Normal User</Typography>
                            <Typography variant="body2">Click here to register as a normal user.</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} onClick={handleChamaClick}>
                    <Paper elevation={3}>
                        <CardContent>
                            <Typography variant="h6">Register a Chama</Typography>
                            <Typography variant="body2">Click here to register a chama.</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
            {isChama && (
                <FormContainer>
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
                </FormContainer>
            )}
        </RegisterContainer>
    );
};

const RegisterContainer = styled.div`
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

const CardContent = styled.div`
    padding: 20px;
    text-align: center;
    cursor: pointer;
`;

const FormContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Register;
