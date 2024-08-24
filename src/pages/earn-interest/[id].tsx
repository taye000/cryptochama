import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardContent, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';
import SubscriptionModal from '../../components/SubscriptionModal';
import { platforms } from '@/utils/sampledata';

const PlatformDetailPage = () => {
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;

    // Find platform data based on id
    const platform = platforms.find((p) => p.id === Number(id));

    if (!platform) {
        return <Typography variant="h4">Platform not found</Typography>;
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleSubscribe = () => {
        // Open the modal
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        // Close the modal
        setModalOpen(false);
    };

    return (
        <PlatformDetailContainer theme={theme}>
            <Typography variant="h4" component="h1" gutterBottom>
                {platform.name}
            </Typography>
            <PlatformCard theme={theme}>
                <CardContent>
                    <PlatformLogo src={platform.logo} alt={`${platform.name} Logo`} />
                    <Typography variant="h6" component="div" gutterBottom>
                        {platform.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Interest Rate: {platform.interestRate}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Description: {platform.description}
                    </Typography>
                    <SubscribeButton variant="contained" color="primary" size="large" onClick={handleSubscribe}>
                        Subscribe
                    </SubscribeButton>
                </CardContent>
            </PlatformCard>
            <SubscriptionModal
                open={modalOpen}
                onClose={handleCloseModal}
                platformName={platform.name}
            />
        </PlatformDetailContainer>
    );
};

const PlatformDetailContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlatformCard = styled(Card)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: auto;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
`;

const PlatformLogo = styled.img`
    max-width: 120px;
    height: auto;
    margin: 0 auto 10px;
`;

const SubscribeButton = styled(Button)`
    margin-top: 20px;
`;

export default PlatformDetailPage;
