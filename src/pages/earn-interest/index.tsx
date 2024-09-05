import React from 'react';
import { CardContent, Typography, Button, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledEarnInterestContainer, StyledCardsContainer, StyledTokenList, StyledTokenCard, StyledTokenLogo } from '@/styles/styled';

export const tokens = [
    {
        id: "1",
        name: 'DAI',
        logo: '/dai.png',
        interestRate: 3.5,
        price: 12,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimals: 18,
    },
    {
        id: "2",
        name: 'USDC',
        logo: '/usdc.png',
        interestRate: 4.5,
        price: 19,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimals: 18,
    },
    {
        id: "3",
        name: 'USDT',
        logo: '/usdt.png',
        interestRate: 5.5,
        price: 10,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimals: 18,
    },
];

const EarnInterest = () => {
    const theme = useTheme();
    const router = useRouter();

    const handleLendClick = (id: any) => {
        router.push(`/earn-interest/lend/${id}`);
    };

    return (
        <StyledEarnInterestContainer theme={theme}>
            <Typography variant="h4" component="h1" gutterBottom>
                Lend and Earn Interest on Aave
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                Choose from available tokens to lend on Aave and start earning interest.
            </Typography>
            <StyledCardsContainer>
                <StyledTokenList>
                    {tokens.map((token) => (
                        <StyledTokenCard key={token.id} theme={theme}>
                            <CardContent>
                                <StyledTokenLogo src={token.logo} alt={`${token.name} Logo`} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {token.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Interest Rate: {token.interestRate}%
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleLendClick(token.id)}
                                    sx={{ marginTop: '10px' }}
                                >
                                    Lend {token.name}
                                </Button>
                            </CardContent>
                        </StyledTokenCard>
                    ))}
                </StyledTokenList>
            </StyledCardsContainer>
        </StyledEarnInterestContainer>
    );
};

export default EarnInterest;
