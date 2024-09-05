import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography, useTheme, Card, CardContent, TextField, CircularProgress } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import { ethers } from 'ethers';
import { tokens } from '..';
import { StyledLoadingContainer, StyledLendContainer, StyledCard, LogoContainer } from '@/styles/styled';
import toast from 'react-hot-toast';

const LendPage = () => {
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;
    const [token, setToken] = useState<any>(null);
    const [amount, setAmount] = useState<string>(''); // Amount to lend
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const selectedToken = tokens.find((token) => token.id === id);
            if (selectedToken) {
                setToken(selectedToken);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    const handleLend = async () => {
        if (!amount || !token) return;

        try {
            console.log(`Lending ${amount} ${token.name}...`);
            toast.success(`Successfully lent ${amount} ${token.name}`);
        } catch (error) {
            console.error('Error lending:', error);
            toast.error('Failed to lend. Please try again.');
        }
    };

    if (loading) {
        return (
            <StyledLoadingContainer>
                <CircularProgress />
                <Typography variant="h6" mt={2}>Loading token data...</Typography>
            </StyledLoadingContainer>
        );
    }

    if (!token) {
        return <Typography variant="h6">Token not found</Typography>;
    }

    return (
        <StyledLendContainer theme={theme}>
            <StyledCard>
                <CardContent>
                    {/* Token logo and details */}
                    <LogoContainer>
                        <Image src={token.logo} alt={token.name} width={60} height={60} />
                    </LogoContainer>
                    <Typography variant="h4" gutterBottom align="center">
                        Lend {token.name}
                    </Typography>

                    <Typography variant="body1" gutterBottom align="center">
                        Earn <strong>{token.interestRate}%</strong> APY on {token.name}
                    </Typography>
                    <Typography variant="body2" align="center" gutterBottom>
                        Token Price: <strong>${token.price}</strong>
                    </Typography>

                    {/* Amount input */}
                    <TextField
                        label={`Amount of ${token.name} to lend`}
                        variant="outlined"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                        margin="normal"
                        type="number"
                        inputProps={{ min: '0' }}
                        sx={{ borderRadius: '12px' }}
                    />

                    {/* Lend button */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLend}
                        disabled={!amount}
                        fullWidth
                        sx={{ marginTop: '20px', borderRadius: '12px', padding: '12px 0' }}
                    >
                        Lend {token.name}
                    </Button>
                </CardContent>
            </StyledCard>
        </StyledLendContainer>
    );
};

export default LendPage;
