import { Box, Button, Card, Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 48px;
`;

export const DashboardContainer = styled.div`
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

export const SectionTitle = styled(Typography)`
    padding: 10px;
`;

export const SectionContent = styled.div`
    padding: 20px;
`;

export const RecentTransactions = styled.div`
    margin-top: 10px;
    padding-left: 20px;
`;

export const GraphContainer = styled.div`
    padding: 20px;
`;

export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
`;

export const StyledRegisterContainer = styled.div`
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

export const StyledGridContainer = styled(Grid)`
    width: 100%;
    max-width: 1200px;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const StyledGridItem = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const StyledCustomPaper = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    width: 300px;
    height: 300px; /* Square-shaped card */
    padding: 20px;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows[3]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledFormContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TermsContainer = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TermsContent = styled.div`
    max-width: 800px;
    width: 100%;
`;

export const StyledJoinChamaContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const StyledPlatformLogo = styled.img`
    max-width: 80px;
    height: auto;
    margin: 0 auto 10px;
`;

export const PlatformDetailContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PlatformCard = styled(Card)`
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

export const PlatformLogo = styled.img`
    max-width: 120px;
    height: auto;
    margin: 0 auto 10px;
`;

export const SubscribeButton = styled(Button)`
    margin-top: 20px;
`;

export const StyledEarnInterestContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const StyledCardsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const StyledPlatformList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export const StyledPlatformCard = styled(Card)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledTokenList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export const StyledTokenCard = styled(Card)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledTokenLogo = styled.img`
    max-width: 60px;
    height: auto;
    margin-bottom: 10px;
`;

export const StyledLendContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledCard = styled(Card)`
  max-width: 400px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const LogoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledLoadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;