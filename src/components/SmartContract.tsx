import React from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@mui/material';

const SmartContractOverview: React.FC = () => {
    const theme = useTheme();

    return (
        <SmartContractContainer theme={theme}>
            <ContentWrapper>
                <Typography variant="h4" component="h2" gutterBottom>
                    Smart Contract Overview
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    The smart contract handles contributions, distributions, individual savings, and integration with DeFi platforms.
                </Typography>
                <Feature>
                    <Typography variant="body1" component="p" paragraph>
                        <strong>Contributions:</strong> Members contribute a specified amount of cryptocurrency within each cycle.
                    </Typography>
                </Feature>
                <Feature>
                    <Typography variant="body1" component="p" paragraph>
                        <strong>Distributions:</strong> At the end of each cycle, the total amount collected is distributed to one member (in merry-go-round mode) or retained in the communal pool (traditional chama).
                    </Typography>
                </Feature>
                <Feature>
                    <Typography variant="body1" component="p" paragraph>
                        <strong>Savings Management:</strong> Members can deposit and withdraw their savings in supported cryptocurrencies.
                    </Typography>
                </Feature>
                <Feature>
                    <Typography variant="body1" component="p" paragraph>
                        <strong>DeFi Integration:</strong> Members can invest their savings in DeFi platforms to earn interest. Automatically distribute earned interest back to individual savings accounts.
                    </Typography>
                </Feature>
            </ContentWrapper>
        </SmartContractContainer>
    );
};

const SmartContractContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 40px 20px;
    text-align: center;
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const Feature = styled.div`
    margin-bottom: 20px;
`;

export default SmartContractOverview;
