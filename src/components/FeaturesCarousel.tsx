import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

const FeaturesCarousel: React.FC = () => {
    const theme = useTheme();
    const features = [
        {
            title: "Multi-Crypto Support",
            description: "Save with Bitcoin (BTC), Ethereum (ETH), USD Coin (USDC), and Tether (USDT)."
        },
        {
            title: "Flexible Savings Options",
            description: "Choose between Merry Go Round and Traditional Chama saving methods."
        },
        {
            title: "Individual Savings Accounts",
            description: "Manage your savings independently with personal accounts within the smart contract."
        },
        {
            title: "Contribution Cycle",
            description: "Define contribution durations and ensure timely contributions from members."
        },
        {
            title: "Penalties and Rewards",
            description: "Implement penalties for late contributions and rewards for timely ones."
        },
        {
            title: "Interest-Earning Marketplace",
            description: "Earn interest on savings through DeFi platforms with a transparent marketplace interface."
        },
        {
            title: "Transparency and Security",
            description: "All transactions are securely recorded on the blockchain with regular smart contract audits."
        },
    ];

    return (
        <FeaturesContainer>
            <Carousel
                autoPlay={false}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible
                navButtonsProps={{
                    style: {
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRadius: '50%',
                        margin: '0 5px'
                    }
                }}
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} theme={theme}>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2">
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </FeatureCard>
                ))}
            </Carousel>
        </FeaturesContainer>
    );
};

const FeaturesContainer = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
`;

const FeatureCard = styled(Card) <{ theme: any }>`
    background-color: ${({ theme }) => theme.palette.mode === 'dark' ? '#333333' : '#f5f5f5'};
    color: ${({ theme }) => theme.palette.text.primary};
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

export default FeaturesCarousel;
