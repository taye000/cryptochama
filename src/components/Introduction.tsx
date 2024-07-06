import React from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@mui/material';

const IntroductionSection: React.FC = () => {
    const theme = useTheme();

    return (
        <IntroContainer theme={theme}>
            <IntroContent>
                <Typography variant="h4" component="h1" gutterBottom>
                    What is Crypto Chama?
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    Crypto Chama is a decentralized savings and investment platform on the blockchain. It allows users and groups (chamas) to save in various cryptocurrencies, participate in communal saving schemes, and earn interest on their savings through integration with DeFi platforms.
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    It aims to revolutionize traditional savings groups by leveraging blockchain technology. By offering multi-crypto support, flexible savings options, and the ability to earn interest through DeFi integration, Crypto Chama provides a comprehensive and innovative solution for both individual savers and communal savings groups.
                </Typography>
            </IntroContent>
        </IntroContainer>
    );
};

const IntroContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 40px 20px;
    text-align: center;
`;

const IntroContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export default IntroductionSection;
