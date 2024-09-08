import React from 'react';
import { CardContent, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { chamaPlatforms } from '@/utils/sampledata';
import { StyledJoinChamaContainer, StyledCardsContainer, StyledPlatformList, StyledPlatformCard, StyledPlatformLogo } from '@/styles/styled';
import withAuth from '@/components/withAuth';

const JoinChama = () => {
    const theme = useTheme();
    const router = useRouter();

    const handleCardClick = (id: number) => {
        router.push(`/join-chama/${id}`);
    };

    return (
        <StyledJoinChamaContainer theme={theme}>
            <Typography variant="h4" component="h1" gutterBottom>
                Join Chama
            </Typography>
            <StyledCardsContainer>
                <StyledPlatformList>
                    {chamaPlatforms.map((platform) => (
                        <StyledPlatformCard key={platform.id} theme={theme} onClick={() => handleCardClick(platform.id)}>
                            <CardContent>
                                <StyledPlatformLogo src={platform.logo} alt={`${platform.name} Logo`} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {platform.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {platform.description}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Official Member: {platform.officialMember}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Contact: {platform.contact}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Members: {platform.members}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Started When: {platform.startedWhen}
                                </Typography>
                                {platform.merryGoRound && (
                                    <Typography variant="body2" component="p">
                                        Merry Go Round!
                                    </Typography>
                                )}
                            </CardContent>
                        </StyledPlatformCard>
                    ))}
                </StyledPlatformList>
            </StyledCardsContainer>
        </StyledJoinChamaContainer>
    );
};

export default withAuth(JoinChama);
