import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

interface WalletContextType {
    address: string | null;
    isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { address, isConnected } = useAccount();
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    useEffect(() => {
        if (isConnected && address) {
            setWalletAddress(address);
        } else {
            setWalletAddress(null);
        }
    }, [isConnected, address]);

    return (
        <WalletContext.Provider value={{ address: walletAddress, isConnected }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
