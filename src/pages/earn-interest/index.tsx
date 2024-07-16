import React from 'react';
import { CardContent, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { platforms } from '@/utils/sampledata';
import { StyledEarnInterestContainer, StyledCardsContainer, StyledPlatformList, StyledPlatformCard, StyledPlatformLogo } from '@/styles/styled';

const EarnInterest = () => {
    const theme = useTheme();
    const router = useRouter();

    const handleCardClick = (id: number) => {
        router.push(`/earn-interest/${id}`);
    };

    return (
        <StyledEarnInterestContainer theme={theme}>
            <Typography variant="h4" component="h1" gutterBottom>
                Earn Interest
            </Typography>
            <StyledCardsContainer>
                <StyledPlatformList>
                    {platforms.map((platform) => (
                        <StyledPlatformCard key={platform.id} theme={theme} onClick={() => handleCardClick(platform.id)}>
                            <CardContent>
                                <StyledPlatformLogo src={platform.logo} alt={`${platform.name} Logo`} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {platform.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {platform.interestRate}
                                </Typography>
                            </CardContent>
                        </StyledPlatformCard>
                    ))}
                </StyledPlatformList>
            </StyledCardsContainer>
        </StyledEarnInterestContainer>
    );
};

export default EarnInterest;
