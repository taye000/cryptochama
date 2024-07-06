import React from 'react';
import styled from 'styled-components';
import { Button, Typography, useTheme } from '@mui/material';

const HeroSection: React.FC = () => {
    const theme = useTheme();

    return (
        <HeroContainer theme={theme}>
            <ContentWrapper>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Crypto Chama
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Decentralized Savings and Investment Platform
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Revolutionize your savings and investments with blockchain technology.
                </Typography>
                <Button variant="contained" color="primary" size="large" href="/register">
                    Get Started
                </Button>
            </ContentWrapper>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    background: linear-gradient(135deg, ${({ theme }) => theme.palette.primary.main} 30%, ${({ theme }) => theme.palette.secondary.main} 90%);
    color: ${({ theme }) => theme.palette.common.white};
    padding: 60px 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export default HeroSection;
