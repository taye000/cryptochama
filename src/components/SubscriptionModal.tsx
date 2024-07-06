import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface SubscriptionModalProps {
    open: boolean;
    onClose: () => void;
    platformName: string;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ open, onClose, platformName }) => {
    const handleConfirm = () => {
        // Implement confirmation logic here
        onClose();
    };

    const handleDecline = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Subscription</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You're about to subscribe to {platformName} for interest on your savings.
                </DialogContentText>
                <DialogContentText>
                    Accepting means you agree to our <a href="/terms">terms and conditions</a>.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDecline} color="primary">
                    Decline
                </Button>
                <Button onClick={handleConfirm} color="primary" variant="contained">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SubscriptionModal;
