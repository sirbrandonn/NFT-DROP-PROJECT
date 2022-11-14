import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider, useWallet} from "@solana/wallet-adapter-react";

import "../styles/App.css";
import "../styles/globals.css";
import "../styles/CandyMachine.css";
import "@solana/wallet-adapter-react-ui/styles.css";


const App = ({ Component, pageProps }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Component {...pageProps} />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;


// goal is to create a web app that lets users connect their wallet, click mint, and receive an NFT from our collection in their wallet
// need to install Solana CLI and Metaplex CLI
// Solana CLI will allows us to deploy to devnet, an actual blockchain run by real validators
// Metaplex CLI will allow us to interact with Metaplex's deployed NFT contracts
// Using their smart-contracts-as-a-service, we can create our own candy machine, upload our NFTs to our candy machine, and allow users to actually hit our candy machine to mint an NFT