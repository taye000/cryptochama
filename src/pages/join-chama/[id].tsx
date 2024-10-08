import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CardContent, Typography, useTheme } from '@mui/material';
import JoinChamaModal from '@/components/JoinChamaModal';
import { chamaPlatforms } from '@/utils/sampledata';
import { PlatformDetailContainer, PlatformCard, PlatformLogo, SubscribeButton } from '@/styles/styled';
import withAuth from '@/components/withAuth';

const PlatformDetailPage = () => {
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;

    // Find platform data based on id
    const platform = chamaPlatforms.find((p) => p.id === Number(id));

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
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Description: {platform.description}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Official Member: {platform.officialMember}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Contact: {platform.contact}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Members: {platform.members}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Started When: {platform.startedWhen}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
                        Description: {platform.merryGoRound}
                    </Typography>
                    <SubscribeButton variant="contained" color="primary" size="large" onClick={handleSubscribe}>
                        Subscribe
                    </SubscribeButton>
                </CardContent>
            </PlatformCard>
            <JoinChamaModal
                open={modalOpen}
                onClose={handleCloseModal}
                platformName={platform.name}
            />
        </PlatformDetailContainer>
    );
};

export default withAuth(PlatformDetailPage);
