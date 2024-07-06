import React from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@mui/material';

const SmartContractOverview: React.FC = () => {
    const theme = useTheme();

    return (
        <SmartContractContainer theme={theme}>
            <Typography variant="h4" component="h2" gutterBottom>
                Smart Contract Overview
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                The smart contract handles contributions, distributions, individual savings, and integration with DeFi platforms.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Main Functions
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                <strong>Contributions:</strong> Members contribute a specified amount of cryptocurrency within each cycle.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                <strong>Distributions:</strong> At the end of each cycle, the total amount collected is distributed to one member (in merry-go-round mode) or retained in the communal pool (traditional chama).
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                <strong>Savings Management:</strong> Members can deposit and withdraw their savings in supported cryptocurrencies.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                <strong>DeFi Integration:</strong> Members can invest their savings in DeFi platforms to earn interest. Automatically distribute earned interest back to individual savings accounts.
            </Typography>
        </SmartContractContainer>
    );
};

const SmartContractContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 40px 20px;
    text-align: center;
`;

export default SmartContractOverview;
