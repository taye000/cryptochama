export const userData = {
  totalBalance: 15000,
  totalInterest: 750,
  personalAccount: {
    balance: 10000,
    recentTransactions: [
      { date: "2024-07-15", type: "Deposit", amount: 500 },
      { date: "2024-07-10", type: "Withdrawal", amount: 200 },
      // Add more transactions as needed
    ],
  },
  chamas: [
    { id: 1, name: "ChamaX", balance: 5000 },
    { id: 2, name: "Savings Circle", balance: 2000 },
    // Add more chama details
  ],
  defiPlatforms: [
    { id: 1, name: "Aave", balance: 8000, interestRate: "8%" },
    { id: 2, name: "Compound", balance: 5000, interestRate: "5%" },
    // Add more platforms details
  ],
  performanceData: {
    // Example performance data (replace with actual performance metrics)
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [10000, 10500, 11000, 11500, 12000, 12500],
  },
};

// Sample data for DeFi platforms
export const chamaPlatforms = [
  {
    id: 1,
    name: "ChamaX",
    logo: "/aave.jpg",
    description:
      "ChamaX provides a platform for collective savings and investments among members.",
    officialMember: "Jane Doe",
    contact: "jane.doe@example.com",
    members: 20,
    startedWhen: "January 2020",
    merryGoRound: true,
  },
  {
    id: 2,
    name: "Kenya Chama",
    logo: "/compound.png",
    description:
      "Kenya Chama facilitates group savings and investments with a focus on community development.",
    officialMember: "John Smith",
    contact: "john.smith@example.com",
    members: 15,
    startedWhen: "June 2018",
    merryGoRound: false,
  },
  {
    id: 3,
    name: "Savings Circle",
    logo: "/curve.png",
    description:
      "Savings Circle allows members to pool resources and invest collectively for mutual benefit.",
    officialMember: "Alice Johnson",
    contact: "alice.johnson@example.com",
    members: 25,
    startedWhen: "March 2019",
    merryGoRound: true,
  },
  // Add more chama platforms as needed
];

// Sample data for DeFi platforms
export const platforms = [
  {
    id: 1,
    name: "Aave",
    logo: "/aave.jpg",
    interestRate: "8%",
    description:
      "Aave is a leading DeFi lending platform where you can earn interest by supplying various crypto assets. Rates depend on the specific asset and loan term.",
  },
  {
    id: 2,
    name: "Compound",
    logo: "/compound.png",
    interestRate: "2%",
    description:
      "Compound allows you to earn interest by supplying crypto assets. Rates fluctuate based on supply and demand.",
  },
  {
    id: 3,
    name: "Yearn Finance",
    logo: "/yearn-finance.png",
    interestRate: "9%",
    description:
      "Yearn Finance is an aggregator that optimizes your DeFi lending experience, potentially offering higher returns than Aave on some assets.",
  },
  {
    id: 4,
    name: "Curve Finance",
    logo: "/curve.png",
    interestRate: "6.2%",
    description:
      "Curve Finance specializes in stablecoin trading. Interest rates for providing liquidity are usually lower but more stable.",
  },
  // Add more platforms as needed
];
