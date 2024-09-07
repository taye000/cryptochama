import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

interface LoadingSpinnerProps {
    isLoading: boolean;
    color?: string;
    size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    isLoading,
    color,
    size = 15,
}) => {
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: color || "primary",
    };

    return (
        <LoadingContainer>
            <BeatLoader color={color || "#6200ee"} loading={isLoading} size={size} cssOverride={override} />
        </LoadingContainer>
    );
};
