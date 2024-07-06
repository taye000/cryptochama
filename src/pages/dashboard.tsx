import React from 'react';
import { Typography, Grid, Paper, useTheme } from '@mui/material';
import styled from 'styled-components';
import Graph from '@/components/Graph';

const Dashboard = () => {
    const theme = useTheme();

    // Mock data (replace with actual data fetching)
    const userData = {
        totalBalance: 15000,
        totalInterest: 750,
        personalAccount: {
            balance: 10000,
            recentTransactions: [
                { date: '2024-07-15', type: 'Deposit', amount: 500 },
                { date: '2024-07-10', type: 'Withdrawal', amount: 200 },
                // Add more transactions as needed
            ],
        },
        chamas: [
            { id: 1, name: 'ChamaX', balance: 5000 },
            { id: 2, name: 'Savings Circle', balance: 2000 },
            // Add more chama details
        ],
        defiPlatforms: [
            { id: 1, name: 'Aave', balance: 8000, interestRate: '8%' },
            { id: 2, name: 'Compound', balance: 5000, interestRate: '5%' },
            // Add more platforms details
        ],
        performanceData: {
            // Example performance data (replace with actual performance metrics)
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [10000, 10500, 11000, 11500, 12000, 12500],
        },
    };

    return (
        <DashboardContainer theme={theme}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                {/* Overview Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <SectionTitle>Total Balances</SectionTitle>
                        <SectionContent>
                            <Typography variant="subtitle1">Total Balance: ${userData.totalBalance}</Typography>
                            <Typography variant="subtitle1">Total Interest: ${userData.totalInterest}</Typography>
                        </SectionContent>
                    </Paper>
                </Grid>

                {/* Personal Account Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <SectionTitle>Personal Account</SectionTitle>
                        <SectionContent>
                            <Typography variant="subtitle1">Balance: ${userData.personalAccount.balance}</Typography>
                            <RecentTransactions>
                                <Typography variant="subtitle2">Recent Transactions:</Typography>
                                {userData.personalAccount.recentTransactions.map((transaction, index) => (
                                    <Typography key={index} variant="body2">
                                        {transaction.date} - {transaction.type}: ${transaction.amount}
                                    </Typography>
                                ))}
                            </RecentTransactions>
                        </SectionContent>
                    </Paper>
                </Grid>

                {/* Chamas Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <SectionTitle>Chamas</SectionTitle>
                        <SectionContent>
                            {userData.chamas.map((chama) => (
                                <Typography key={chama.id} variant="subtitle1">
                                    {chama.name}: ${chama.balance}
                                </Typography>
                            ))}
                        </SectionContent>
                    </Paper>
                </Grid>

                {/* DeFi Platforms Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <SectionTitle>DeFi Platforms</SectionTitle>
                        <SectionContent>
                            {userData.defiPlatforms.map((platform) => (
                                <Typography key={platform.id} variant="subtitle1">
                                    {platform.name}: ${platform.balance} | Interest Rate: {platform.interestRate}
                                </Typography>
                            ))}
                        </SectionContent>
                    </Paper>
                </Grid>

                {/* Performance Graph Section */}
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <SectionTitle>Performance Graph</SectionTitle>
                        <GraphContainer>
                            {/* Example Line Chart (replace with actual performance graph library) */}
                            <Typography variant="body1">Your funds performance over time:</Typography>
                            {/* Render your performance graph here */}
                        </GraphContainer>
                    </Paper>
                </Grid>

                {/* Performance Graph Section */}
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <SectionTitle>Performance Graph</SectionTitle>
                        <Graph labels={userData.performanceData.labels} data={userData.performanceData.data} />
                    </Paper>
                </Grid>
            </Grid>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionTitle = styled(Typography)`
    padding: 10px;
`;

const SectionContent = styled.div`
    padding: 20px;
`;

const RecentTransactions = styled.div`
    margin-top: 10px;
    padding-left: 20px;
`;

const GraphContainer = styled.div`
    padding: 20px;
`;

export default Dashboard;
