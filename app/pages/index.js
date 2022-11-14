import React from "react";
import CandyMachine from "../components/CandyMachine";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { render } from "react-dom";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    // useWallet is a custom hook provided by @solana/wallet-adapter-react
    // once Phantom wallet is connected, we can receive data from the user's wallet
    const wallet = useWallet();
    console.log(wallet.publicKey);
    // WalletMultiButton will automatically detect any Solana wallet extensions you installed in your browser
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    // since we have data from the user's wallet, we can use a ternary operator to do conditional rendering
    // conditional (ternary) operator in JS takes three operands: a condition followed by a question mark (?),
    // an expression to execute if the condition is truthy followed by a colon (:),
    // and an expression to execute if the condition is falsy
    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <div className="header">🍭 Candy Drop</div>
                    <div className="sub-text">NFT drop machine with fair mint</div>
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>
            </div>
        </div>
    );
};

export default Home;
