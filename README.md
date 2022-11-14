# buildspace Solana NFT Drop Project
### Welcome 👋
To get started with this course, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!

### What is the .vscode Folder?
If you use VSCode to build your app, we included a list of suggested extensions that will help you build this project! Once you open this project in VSCode, you will see a popup asking if you want to download the recommended extensions :).

### Questions?
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/CO77556be5-25e9-49dd-a799-91a2fc29520e) and link your Discord account so you can get access to helpful channels and your instructor!

sugar upload
- run this command from just one level outside of the assets folder
- The upload command is essentially saying - "Hey Sugar CLI, take all the NFT pairs in my assets folder, upload them to NFT.storage or whichever storage I configured in config.js, initialize the candy machine config holding the pointers to these NFT"

sugar deploy
- Now that all my NFTs are uploaded to NFT.Storage, Sugar should generate a cache.json file
  - It should contain the link to each of the images that was uploaded to NFT.Storage
- run this command to deploy our NFTs on-chain

sugar verify
- run this command to verify my NFTs were actually uploaded