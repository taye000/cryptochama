import React from 'react';
import { Typography, Grid, Paper, useTheme } from '@mui/material';
import Graph from '@/components/Graph';
import { DashboardContainer, SectionTitle, SectionContent, RecentTransactions, GraphContainer } from '@/styles/styled';
import { userData } from '@/utils/sampledata';

const Dashboard = () => {
    const theme = useTheme();

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

export default Dashboard;
