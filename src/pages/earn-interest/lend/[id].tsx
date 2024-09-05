import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    Typography,
    useTheme,
    Card,
    CardContent,
    TextField,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import Image from 'next/image';
import { ethers } from 'ethers';
import { tokens } from '..';
import {
    StyledLoadingContainer,
    StyledLendContainer,
    StyledCard,
    LogoContainer,
} from '@/styles/styled';
import toast from 'react-hot-toast';

const LendPage = () => {
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;
    const [token, setToken] = useState<any>(null);
    const [amount, setAmount] = useState<string>(''); // Amount to lend
    const [loading, setLoading] = useState<boolean>(true);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [balance, setBalance] = useState<string>('0'); // User's token balance

    useEffect(() => {
        // Simulate loading for better UX
        setTimeout(() => {
            const selectedToken = tokens.find((token) => token.id === id);
            if (selectedToken) {
                setToken(selectedToken);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    useEffect(() => {
        const fetchBalance = async () => {
            if (!token) return;
            try {
                // const provider = new ethers.providers.Web3Provider((window as any).ethereum);
                // const signer = provider.getSigner();
                // const address = await signer.getAddress();
                // const contract = new ethers.Contract(token.address, token.abi, provider);
                // const userBalance = await contract.balanceOf(address);
                // setBalance(ethers.utils.formatUnits(userBalance, token.decimals));
            } catch (error) {
                console.error('Error fetching balance:', error);
                setBalance('0');
            }
        };

        fetchBalance();
    }, [token]);

    const handleLend = async () => {
        if (!amount || !token) return;

        setIsProcessing(true); // Start processing
        try {
            // Example lending logic using ethers.js (connect to wallet, smart contract, etc.)
            // Uncomment and configure the following lines with your contract details
            /*
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(token.contractAddress, token.abi, signer);
            const tx = await contract.lend(ethers.utils.parseUnits(amount, token.decimals));
            await tx.wait();
            */

            // Simulating success for demonstration purposes
            console.log(`Lending ${amount} ${token.name}...`);
            // Simulate transaction delay
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success(`Successfully lent ${amount} ${token.name}`);
            setDialogOpen(false);
            setAmount(''); // Reset the input
            // Optionally, refetch balance after lending
            // fetchBalance();
        } catch (error) {
            console.error('Error lending:', error);
            toast.error('Failed to lend. Please try again.');
            setDialogOpen(false);
        } finally {
            setIsProcessing(false); // End processing
        }
    };

    const handleConfirmClick = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        if (!isProcessing) {
            setDialogOpen(false);
        }
    };

    const handleMaxClick = () => {
        setAmount(balance);
    };

    if (loading) {
        return (
            <StyledLoadingContainer>
                <CircularProgress />
                <Typography variant="h6" mt={2}>
                    Loading token data...
                </Typography>
            </StyledLoadingContainer>
        );
    }

    if (!token) {
        return <Typography variant="h6">Token not found</Typography>;
    }

    return (
        <StyledLendContainer theme={theme}>
            <StyledCard>
                <CardContent>
                    {/* Token logo and details */}
                    <LogoContainer>
                        <Image src={token.logo} alt={token.name} width={60} height={60} style={{ borderRadius: '5%' }}/>
                    </LogoContainer>
                    <Typography variant="h4" gutterBottom align="center">
                        Lend {token.name}
                    </Typography>

                    <Typography variant="body1" gutterBottom align="center">
                        Earn <strong>{token.interestRate}%</strong> APY on {token.name}
                    </Typography>
                    <Typography variant="body2" align="center" gutterBottom>
                        Token Price: <strong>${token.price}</strong>
                    </Typography>

                    {/* Display user's balance */}
                    <Typography variant="body2" align="center" gutterBottom>
                        Your Balance: <strong>{balance} {token.symbol}</strong>
                    </Typography>

                    {/* Amount input with Max button */}
                    <Box display="flex" alignItems="center">
                        <TextField
                            label={`Amount of ${token.name} to lend`}
                            variant="outlined"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            fullWidth
                            margin="normal"
                            type="number"
                            inputProps={{ min: '0', step: 'any' }}
                            sx={{ borderRadius: '12px' }}
                        />
                        <Button
                            onClick={handleMaxClick}
                            variant="text"
                            color="primary"
                            sx={{ marginLeft: '8px', height: '56px' }}
                        >
                            Max
                        </Button>
                    </Box>

                    {/* Lend button */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleConfirmClick}
                        disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > parseFloat(balance)}
                        fullWidth
                        sx={{ marginTop: '20px', borderRadius: '12px', padding: '12px 0' }}
                    >
                        Lend {token.name}
                    </Button>
                </CardContent>
            </StyledCard>

            {/* Confirmation Dialog */}
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Confirm Lending</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are about to lend <strong>{amount}</strong> {token.name}.
                        <br />
                        This will earn you <strong>{token.interestRate}%</strong> APY.
                        <br />
                        Token Price: <strong>${token.price}</strong>.
                        <br />
                        Please ensure you have approved the lending contract to spend your tokens.
                    </DialogContentText>
                    {isProcessing && (
                        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                            <CircularProgress size={24} />
                            <Typography variant="body2" ml={2}>
                                Processing...
                            </Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary" disabled={isProcessing}>
                        Cancel
                    </Button>
                    <Button onClick={handleLend} color="primary" disabled={isProcessing}>
                        {isProcessing ? 'Lending...' : 'Confirm'}
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledLendContainer>
    );
};

export default LendPage;
