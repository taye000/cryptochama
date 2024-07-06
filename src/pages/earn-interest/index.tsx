import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

// Sample data for DeFi platforms
export const platforms = [
    {
        id: 1,
        name: 'Aave',
        logo: '/aave.jpg',
        interestRate: '8%',
        description:
            'Aave is a leading DeFi lending platform where you can earn interest by supplying various crypto assets. Rates depend on the specific asset and loan term.',
    },
    {
        id: 2,
        name: 'Compound',
        logo: '/compound.png',
        interestRate: '2%',
        description:
            'Compound allows you to earn interest by supplying crypto assets. Rates fluctuate based on supply and demand.',
    },
    {
        id: 3,
        name: 'Yearn Finance',
        logo: '/yearn-finance.png',
        interestRate: '9%',
        description:
            'Yearn Finance is an aggregator that optimizes your DeFi lending experience, potentially offering higher returns than Aave on some assets.',
    },
    {
        id: 4,
        name: 'Curve Finance',
        logo: '/curve.png',
        interestRate: '6.2%',
        description:
            'Curve Finance specializes in stablecoin trading. Interest rates for providing liquidity are usually lower but more stable.',
    },
    // Add more platforms as needed
];


const EarnInterest = () => {
    const theme = useTheme();
    const router = useRouter();

    const handleCardClick = (id: number) => {
        router.push(`/earn-interest/${id}`);
    };

    return (
        <EarnInterestContainer>
            <Typography variant="h4" component="h1" gutterBottom>
                Earn Interest
            </Typography>
            <PlatformList>
                {platforms.map((platform) => (
                    <PlatformCard key={platform.id} theme={theme} onClick={() => handleCardClick(platform.id)}>
                        <CardContent>
                            <PlatformLogo src={platform.logo} alt={`${platform.name} Logo`} />
                            <Typography variant="h6" component="div" gutterBottom>
                                {platform.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {platform.interestRate}
                            </Typography>
                        </CardContent>
                    </PlatformCard>
                ))}
            </PlatformList>
        </EarnInterestContainer>
    );
};

const EarnInterestContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
`;

const PlatformList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
`;

const PlatformCard = styled(Card)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const PlatformLogo = styled.img`
    max-width: 80px;
    height: auto;
    margin: 0 auto 10px;
`;

export default EarnInterest;
