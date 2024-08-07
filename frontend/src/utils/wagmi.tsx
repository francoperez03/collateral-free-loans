import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, anvil, modeTestnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors';

export const WALLET_CONNECT_PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID as string;

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, anvil, modeTestnet],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [anvil.id]: http(),
    [modeTestnet.id]: http(),
  },
})
