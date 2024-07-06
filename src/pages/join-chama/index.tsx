import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

// Sample data for DeFi platforms
const chamaPlatforms = [
    {
        id: 1,
        name: 'ChamaX',
        logo: '/aave.jpg',
        description: 'ChamaX provides a platform for collective savings and investments among members.',
        officialMember: 'Jane Doe',
        contact: 'jane.doe@example.com',
        members: 20,
        startedWhen: 'January 2020',
        merryGoRound: true,
    },
    {
        id: 2,
        name: 'Kenya Chama',
        logo: '/compound.png',
        description: 'Kenya Chama facilitates group savings and investments with a focus on community development.',
        officialMember: 'John Smith',
        contact: 'john.smith@example.com',
        members: 15,
        startedWhen: 'June 2018',
        merryGoRound: false,
    },
    {
        id: 3,
        name: 'Savings Circle',
        logo: '/curve.png',
        description: 'Savings Circle allows members to pool resources and invest collectively for mutual benefit.',
        officialMember: 'Alice Johnson',
        contact: 'alice.johnson@example.com',
        members: 25,
        startedWhen: 'March 2019',
        merryGoRound: true,
    },
    // Add more chama platforms as needed
];

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

const StyledJoinChamaContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledCardsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledPlatformList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

const StyledPlatformCard = styled(Card)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const StyledPlatformLogo = styled.img`
    max-width: 80px;
    height: auto;
    margin: 0 auto 10px;
`;

export default JoinChama;
