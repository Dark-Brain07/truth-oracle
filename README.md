# Truth Oracle 🔍⛓️

**AI-Powered Onchain Fact-Checker for Web3**

Built for Base Batches Buildathon 2024

## 🎯 What It Does

Truth Oracle combats misinformation in Web3 by:
- ✅ Analyzing claims with AI (GPT-4o via AgentRouter)
- ✅ Assigning Truth Scores (0-100)
- ✅ Storing verifications onchain (Base Sepolia)
- ✅ Minting verification NFT badges
- ✅ Building reputation systems for truthfulness

## 🚀 Live Demo

🌐 **[truth-oracle.vercel.app](#)** _(will be updated after deployment)_

📝 **Contract Address:** `0x5Dee8F1f2180E38f0c2f4817c3E19ae6F8f470B8`

🔗 **Base Sepolia Testnet**

## 💡 Use Cases

- 🪙 **Token Launches** - Verify project promises
- 🖼️ **NFT Projects** - Check team track records
- 🏛️ **DAO Proposals** - Validate claims
- 📰 **News Articles** - Fact vs fiction
- 🐦 **Social Media** - Combat misinformation
- 🔬 **Scientific Claims** - Verify research

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, TailwindCSS, TypeScript
- **Blockchain:** Base (Sepolia), Solidity
- **Web3:** Wagmi v2, Viem, Coinbase Smart Wallet
- **AI:** GPT-4o (via AgentRouter)
- **Deployment:** Vercel

## 🏗️ Architecture
```
User → AI Verification → Truth Score → Store Onchain → Mint NFT Badge
```

## 🎨 Features

✅ Pixel-art CryptoPunk-inspired UI  
✅ Mobile responsive design  
✅ Real-time AI fact-checking  
✅ Onchain verification storage  
✅ NFT badge minting with Basename support  
✅ Reputation scoring system  

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/Dark-Brain07/truth-oracle.git
cd truth-oracle

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your API keys

# Run development server
npm run dev
```

## 🔐 Environment Variables
```env
OPENAI_API_KEY=your_agentrouter_api_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_id
NEXT_PUBLIC_CONTRACT_ADDRESS=0x5Dee8F1f2180E38f0c2f4817c3E19ae6F8f470B8
```

## 📜 Smart Contract

Deployed on Base Sepolia: [View on BaseScan](https://sepolia.basescan.org/address/0x5Dee8F1f2180E38f0c2f4817c3E19ae6F8f470B8)

## 🎯 Base Batches Submission

- ✅ Built on Base Sepolia
- ✅ Integrates Basenames
- ✅ Uses Coinbase Smart Wallet
- ✅ Open source on GitHub
- ✅ Live deployment on Vercel
- ✅ Functional alpha version

## 👨‍💻 Developer

Built by **Dark-Brain07** for Base Batches Buildathon 2024

## 📄 License

MIT License
