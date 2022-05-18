


# to deploy

- set charged managers contract with
function setController(address controller, string calldata controllerId) external virtual onlyOwner {
on ChargedParticles

ChargedManagers

- set ChargedState address with setController function

Questions
- can we fork their code and register new walletmanagers? 

find out:
- how do smart wallets and smart baskets differ?
- what are the differences/similarities between:
AaveSmartWallet
GenericSmartWallet
GenericSmartBasket

- how does the interest get accumulated?
    - how does it get transfferred out to the owner wallet from aave?

- when does executeForAccount get called? what does it do?
    - it is define din SmartWalletBase & GenericWalletManager
    - it is called in ParticleSplitter in executeForWallet() function
    - executeForWallet calls it
    - executeForWallet is called by client - not by protocol internals

- does the generic smart wallet generate interest? how?
    - aave smart wallet presumably get's interest from Aave protocol deposit - but what about the generic smart wallet principle?

- can we generalize smart wallet interface to handle any kind of strategy?

- when you initialize a smart wallet - you set the wallet manager as the sender
    - who is the sender? the client creating the NFT? or the protocol? I think former.

- why are there walletManager and walletManagerB ? what is the B contract for?

- both smartwalletmanager and AaveWalletManager extend WalletManagerBase

- what is the referralCode in the deposit function on the AaveSmartWallet ??

- what is a 'kinetic' charge?
    - I know 'charge' is aave token interest




➜  financialNFT git:(main) ✗ yarn deploy --network hardhat
yarn run v1.22.18
$ yarn clean-test && hardhat deploy --network hardhat
$ rm -rf abis .openzeppelin/${npm_config_network:-'unknown-31337'}.json deployments/${npm_config_network:-hardhat}/*.json test-results.xml
Nothing to compile
NETWORK NAME: hardhat --------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles Protocol - Contract Deployment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network: Hardhat (hardhat:31337)
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955

  Deploying Universe...
  - Universe:          0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
     - Block:          11400003
     - Gas Cost:       0.000642972 ETH
  Deploying ChargedState...
  - ChargedState:      0x0165878A594ca255338adfa4d48449f69242Eb8F
     - Block:          11400005
     - Gas Cost:       0.000646993 ETH
  Deploying ChargedSettings...
  - ChargedSettings:   0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
     - Block:          11400007
     - Gas Cost:       0.000646927 ETH
  Deploying ChargedManagers...
  - ChargedManagers:   0x610178dA211FEF7D417bC0e6FeD39F05609AD788
     - Block:          11400009
     - Gas Cost:       0.00064466 ETH
  Deploying ChargedParticles...
  - ChargedParticles:  0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0
     - Block:          11400011
     - Gas Cost:       0.000669769 ETH
  Deploying TokenInfoProxy...
  - TokenInfoProxy:  0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82
     - Block:          11400012
     - Gas Cost:       0.0007371 ETH
  Deploying ParticleSplitter...
  - ParticleSplitter:  0x9A676e781A523b5d0C0e43731313A708CB607508
     - Block:          11400013
     - Gas Cost:       0.002532918 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles LP: Generic - Contract Deployment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network: Hardhat (31337)
  Using Accounts:
  - Deployer:     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:        0x70997970C51812dc3A010C7d01b50e0d17dc79C8


  Deploying GenericWalletManager...
  - GenericWalletManager:   0x0B306BF915C4d645ff596e518fAf3F9669b97016
     - Block:               11400014
     - Gas Cost:            0.003722031 ETH

  Deploying GenericWalletManagerB...
  - GenericWalletManagerB:   0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1
     - Block:               11400015
     - Gas Cost:            0.003862885 ETH
  Deploying GenericBasketManager...
  - GenericBasketManager:   0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE
     - Block:               11400016
     - Gas Cost:            0.003147216 ETH
  Deploying GenericBasketManagerB...
  - GenericBasketManagerB:   0x68B1D87F95878fE05B998F19b66F4baba5De1aed
     - Block:               11400017
     - Gas Cost:            0.003489618 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CHAIN ID = 31337

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles LP: Aave - Contract Deployment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network: Hardhat (31337)
  Using Accounts:
  - Deployer:     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:        0x70997970C51812dc3A010C7d01b50e0d17dc79C8


  Deploying AaveWalletManager...
  - AaveWalletManager:   0x3Aa5ebB10DC797CAC828524e59A333d0A371443c
     - Block:            11400018
     - Gas Cost:         0.004725257 ETH

  Deploying AaveWalletManagerB...
  - AaveWalletManagerB:  0xc6e7DF5E7b4f2A278906862b61205850344D4e7d
     - Block:            11400019
     - Gas Cost:         0.005225952 ETH

  Deploying AaveBridgeV2 with LP Provider:  0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
  - AaveBridgeV2:        0x59b670e9fA9D0A427751Af201D676719a970857b
     - Block:            11400020
     - Gas Cost:         0.001396967 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles: Tokens - Contract Deployment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network: Hardhat (31337)
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955


  Deploying Proton NFT...

  Deploying ProtonB NFT...

  Deploying Lepton NFT...

  Deploying Lepton2 NFT...

  Deploying Ionx FT...

  Deploying ExternalERC721...

  Deploying NonFungibleERC1155...

  Deploying FungibleERC1155...

  Contract Deployments Complete!

  Contracts:
  - Proton:       0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1
     - Block:     11400021
     - Gas Cost:  0.003675664 ETH
  - ProtonB:      0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44
     - Block:     11400022
     - Gas Cost:  0.003829282 ETH
  - Lepton:       0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
     - Block:     11400023
     - Gas Cost:  0.003344298 ETH
  - Lepton2:      0x4A679253410272dd5232B3Ff7cF5dbB88f295319
     - Block:     11400024
     - Gas Cost:  0.003212444 ETH
  - Ionx:         0x7a2088a1bFc9d81c55368AE168C2C02570cB814F
     - Block:     11400025
     - Gas Cost:  0.001864115 ETH
  - ExternalERC721:      0x09635F643e140090A9A8Dcd712eD6285858ceBef
     - Block:            11400026
     - Gas Cost:         0.001894357 ETH
  - NonFungibleERC1155:  0xc5a5C42992dECbae36851359345FE25997F5C42d
     - Block:            11400027
     - Gas Cost:         0.001589602 ETH
  - FungibleERC1155:     0x67d269191c92Caf3cD7723F116c85e6E9bf55933
     - Block:            11400028
     - Gas Cost:         0.001539455 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles Protocol - Contract Configurations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network: Hardhat (31337)
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955

  Loading Universe from:               0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9  (11400003)
  Loading ChargedParticles from:       0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0  (11400011)
  Loading ChargedState from:           0x0165878A594ca255338adfa4d48449f69242Eb8F  (11400005)
  Loading ChargedSettings from:        0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6  (11400007)
  Loading ChargedManagers from:        0x610178dA211FEF7D417bC0e6FeD39F05609AD788  (11400009)
  Loading ParticleSplitter from:       0x9A676e781A523b5d0C0e43731313A708CB607508  (11400013)
  Loading GenericWalletManager from:   0x0B306BF915C4d645ff596e518fAf3F9669b97016  (11400014)
  Loading GenericWalletManagerB from:  0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1  (11400015)
  Loading GenericBasketManager from:   0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE  (11400016)
  Loading GenericBasketManagerB from:  0x68B1D87F95878fE05B998F19b66F4baba5De1aed  (11400017)
  Loading AaveWalletManager from:      0x3Aa5ebB10DC797CAC828524e59A333d0A371443c  (11400018)
  Loading AaveWalletManagerB from:     0xc6e7DF5E7b4f2A278906862b61205850344D4e7d  (11400019)
  Loading TokenInfoProxy from:         0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82  (11400012)
  Loading Proton from:                 0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1  (11400021)
  Loading ProtonB from:                0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44  (11400022)
  Loading Lepton from:                 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f  (11400023)
  Loading Lepton2 from:                0x4A679253410272dd5232B3Ff7cF5dbB88f295319  (11400024)
  Loading Ionx from:                   0x7a2088a1bFc9d81c55368AE168C2C02570cB814F  (11400025)


  - [TX-1-a] Universe: Registering ChargedParticles
  - [TX-1-b] ChargedParticles: Registering Universe
  - [TX-1-c] ChargedParticles: Registering ChargedState
  - [TX-1-d] ChargedParticles: Registering ChargedSettings
  - [TX-1-e] ChargedParticles: Registering ChargedManagers
  - [TX-1-f] ChargedParticles: Registering TokenInfoProxy
  - [TX-1-g] ChargedParticles: Registering Lepton
  - [TX-1-h] ChargedSettings: Registering TokenInfoProxy
  - [TX-1-i] ChargedState: Registering ChargedSettings
  - [TX-1-j] ChargedState: Registering TokenInfoProxy
  - [TX-1-k] ChargedManagers: Registering ChargedSettings
  - [TX-1-l] ChargedManagers: Registering ChargedState
  - [TX-1-m] ChargedManagers: Registering TokenInfoProxy
  - [TX-1-n] ParticleSplitter: Registering ChargedManagers
  - [TX-1-o] ParticleSplitter: Registering TokenInfoProxy
  - [TX-1-p] ChargedParticles: Setting Temp-Lock Expiry Blocks
  - [TX-2-a] GenericWalletManager: Setting Charged Particles as Controller
  - [TX-2-b] GenericWalletManager: Registering Generic Wallet Manager with ChargedParticles
  - [TX-2-c] GenericWalletManagerB: Setting Charged Particles as Controller
  - [TX-2-d] GenericWalletManagerB: Registering Generic Wallet Manager "B" with ChargedParticles
  - [TX-2-e] GenericBasketManager: Setting Charged Particles as Controller
  - [TX-2-f] GenericBasketManager: Registering Generic Basket Manager with ChargedParticles
  - [TX-2-g] GenericBasketManagerB: Setting Charged Particles as Controller
  - [TX-2-h] GenericBasketManagerB: Registering Generic Basket Manager "B" with ChargedParticles
  - [TX-2-i] GenericBasketManagerB: Registering TokenInfoProxy
  - [TX-3-a] AaveWalletManager: Setting Charged Particles as Controller
  - [TX-3-b] AaveWalletManager: Setting Aave Bridge to V2
  - [TX-3-c] AaveWalletManager: Registering Aave as LP with ChargedParticles
  - [TX-3-e] AaveWalletManagerB: Setting Charged Particles as Controller
  - [TX-3-f] AaveWalletManagerB: Setting Aave Bridge to V2
  - [TX-3-g] AaveWalletManagerB: Registering Aave as LP with ChargedParticles
  - [TX-3-h] AaveWalletManagerB: Registering ChargedSettings
  - [TX-4-a] Proton: Registering Universe
  - [TX-4-b] Proton: Registering ChargedState
  - [TX-4-c] Proton: Registering ChargedSettings
  - [TX-4-d] Proton: Registering ChargedParticles
  - [TX-4-e] ChargedSettings: Enabling Proton for Charge
  - [TX-4-f] Universe: Registering Proton
  - [TX-4-a] ProtonB: Registering Universe
  - [TX-4-b] ProtonB: Registering ChargedState
  - [TX-4-c] ProtonB: Registering ChargedSettings
  - [TX-4-d] ProtonB: Registering ChargedParticles
  - [TX-4-e] ChargedSettings: Enabling Proton & ProtonB for Charge
  - [TX-4-f] ProtonA: Unregistering Universe
  - [TX-4-g] Universe: Registering ProtonB
  - [TX-6-a] Universe: Registering Ionx
  - [TX-6-b] Ionx: Setting Minter
  - [TX-9-a] Lepton2: Setting Max Mint per Transaction
  - [TX-9-b] ChargedParticles: Registering Lepton2
  - [TX-9-c] ChargedParticles: Enabling Lepton2
  - [TX-9-d-0] Lepton2: Adding Lepton Type: Electron Neutrino
  - [TX-9-d-1] Lepton2: Adding Lepton Type: Muon Neutrino
  - [TX-9-d-2] Lepton2: Adding Lepton Type: Tau Neutrino
  - [TX-9-d-3] Lepton2: Adding Lepton Type: Electron
  - [TX-9-d-4] Lepton2: Adding Lepton Type: Muon
  - [TX-9-d-5] Lepton2: Adding Lepton Type: Tau
  - [TX-10-a] Generic Wallet Manager "B": Registering Executor
  - [TX-10-b] Generic Basket Manager "B": Registering Executor
  - [TX-10-c] Aave Wallet Manager "B": Registering Executor

  Contract Initialization Complete!
     - Total Gas Cost
       @ 10 gwei:   0.0 ETH
       @ 100 gwei:  0.0 ETH
       @ 150 gwei:  0.0 ETH

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

deployer, initialMinter, user1, user2, user3, user4, user5: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
nftReceiver: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles: Mint Proton & Lepton Tokens
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - For Receiver:     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

  Loading ChargedParticles from:  0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0
  Loading Proton from:  0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1
  Loading ProtonB from:  0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44
  Loading Lepton from:  0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
  Loading ExternalERC721 from:  0x09635F643e140090A9A8Dcd712eD6285858ceBef
  Loading FungibleERC1155 from:  0x67d269191c92Caf3cD7723F116c85e6E9bf55933
  Loading NonFungibleERC1155 from:  0xc5a5C42992dECbae36851359345FE25997F5C42d

  Minting External ERC721s...
   - Minting 721 NFT 1, Type "ExternalERC721" with URI: https://ipfs.io/ipfs/QmWc1upvg4C4wSiSu1ry72Lw2smGsEptq73vV5hNk84MR9...
   - Minting 721 NFT 2, Type "ExternalERC721" with URI: https://ipfs.io/ipfs/QmScSSJ8HdKr13qkPHHgM7UMbbsLMRjLt2TRY8nQ97qCrL...
   - Minting 721 NFT 3, Type "ExternalERC721" with URI: https://ipfs.io/ipfs/QmPUoAULoodhy2uipiCZbT4YcMwCJX7jEK9wM8V2A7JXxu...
   == Minted External ERC721 Token IDs: 1,2,3

  Minting Fungible ERC1155s...
   - Minting 1155 NFT 1, Type "Fungible"...
   == Minted Fungible ERC1155 Token IDs: 1

  Minting Non-Fungible ERC1155s...
   - Minting 1155 NFT 2, Type "Non-Fungible"...
   - Minting 1155 NFT 3, Type "Non-Fungible"...
   - Minting 1155 NFT 4, Type "Non-Fungible"...
   == Minted Non-Fungible ERC1155 Token IDs: 1,2,3

  Minting NFTs from Rob's Collection
   - Minting Proton 1, Type "A" with URI: ipfs://QmcbUiZVJVGMXKGV453YFhKxVKpQZKQSSvz8HAcSZxUBmr...
   - Minting Proton 2, Type "A" with URI: ipfs://QmUi3rmHLiQaEHziR4rKrCwA1a2ZuqNvaCDGoZDHHm85YG...
   - Minting Proton 3, Type "A" with URI: ipfs://Qmdxhvd6KVhaFFtyY49ZNHtUGbyWJ55RPVPPQLUQeQQV8j...
   - Minting Proton 4, Type "B" with URI: ipfs://QmRfQguqZqppZXuwV4HNKRocF5JPGbjGaKoSjAMdw5TksH...
   - Minting Proton 5, Type "B" with URI: ipfs://QmSF4kDAsaVXCdvYGo5jkzMHRPTQXzWwyhuzpxyeR8dYan...
   - Minting Proton 6, Type "B" with URI: ipfs://QmcReccrBqkQF1koydeiB8oezrcPxJspRqAkUEeBae29eE...
   - Minting Proton 7, Type "B" with URI: ipfs://QmYpzRutFhp9Pdrt22wFD3DNePH6zrawnnpFgAag2z8nhd...
   - Minting Proton 8, Type "B" with URI: ipfs://QmTdV1JzPSj5WFPP7EfUsBwm6QCLHzd5fhnhQcXXgYF3YF...
   - Minting Proton 9, Type "B" with URI: ipfs://QmTgYYCfgb7xQcpkLkE3xo7wZnUBdTWZrW6ir7FPvqiaiu...
   - Minting Proton 10, Type "B" with URI: ipfs://QmVw7cPRmyN9Z44JXh7jG1iAK9UZ9cUATe6sknSaS9Whz9...
   == Minted Protons with Token IDs: 1,2,3,1,2,3,4,5,6,7

  Charging up the Particles
   - Bonding NFT "1" into "1"...
   - Bonding NFT "2" into "2"...
   - Bonding NFT "1" into "3"...
   - Bonding NFT "1" into "3"...
   - Bonding NFT "7" into "6"...
   - Bonding NFT "6" into "5"...
   - Bonding NFT "5" into "4"...

  Token Minting Complete!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles: Minting IONX to DAO
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:        0x70997970C51812dc3A010C7d01b50e0d17dc79C8

  Loading Ionx from:  0x7a2088a1bFc9d81c55368AE168C2C02570cB814F
  - Ionx: Minting to DAO

  Contract Universe Ionx Minting Complete!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles: Migrate Leptons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:        0x70997970C51812dc3A010C7d01b50e0d17dc79C8

  Loading Lepton2 from:  0x4A679253410272dd5232B3Ff7cF5dbB88f295319
  - Migrating 100 Tokens from 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f...
     - Gas Cost:  0.000125031 ETH Used.  (Estimated: 0.199022808 ETH)

  Transaction Execution Complete!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles Protocol - External NFTs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8

  Loading ChargedSettings from:  0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6

  Contract Initialization Complete!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles Airdrop - Contract Initialization
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955

  Loading Ionx from:  0x7a2088a1bFc9d81c55368AE168C2C02570cB814F

  Deploying MerkleDistributor...

   Distributing Airdrop funds to MerkleDistributor...
Distributing Initial Funds
Sending Funds to 0xab16A69A5a8c12C732e0DEFF4BE56A70bb64c926 1000000.0 IONX
IONX Token Balance Before Transfer: 100000000.0 IONX
IONX Token Balance After Transfer: 99000000.0 IONX
Transaction hash: 0x62adeed9e3c039772456d479492b7d7ad8ada6019790fe72d7c84fc312c4e271
Transaction etherscan: https://hardhat.etherscan.io/tx/0x62adeed9e3c039772456d479492b7d7ad8ada6019790fe72d7c84fc312c4e271

  Contract Deployments Complete!

  Contracts:
  - MerkleDistributor:  0xab16A69A5a8c12C732e0DEFF4BE56A70bb64c926
     - Gas Cost:        0.000361146 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles CommunityVault - Contract Initialization
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955

  Loading Ionx from:  0x7a2088a1bFc9d81c55368AE168C2C02570cB814F

  Deploying CommunityVault...

  Deploying Staking Contract ...

  Deploying IONX Yield Farm ...

  Setting allowance for IONX YieldFarm  to transfer $IONX from CommunityVault
   Transaction hash: 0xa0828ba48d0d7f794730e01f5c1a60f4937008747b1b6411b7dd41f7620bcd8b
   Transaction etherscan: https://hardhat.etherscan.io/tx/0xa0828ba48d0d7f794730e01f5c1a60f4937008747b1b6411b7dd41f7620bcd8b

  Deploying LP Yield Farm ...

  Setting allowance for LPYieldFarm  to transfer $IONX from CommunityVault
   Transaction hash: 0xad876d205dc160ddc905de2cc24141422a4a9a0aab6643a3df3cd5261b1ac75d
   Transaction etherscan: https://hardhat.etherscan.io/tx/0xad876d205dc160ddc905de2cc24141422a4a9a0aab6643a3df3cd5261b1ac75d

   Distributing funds to CommunityVault: 576000.0 IONX + 576000.0  IONX
Distributing Initial Funds
Sending Funds to 0xE3011A37A904aB90C8881a99BD1F6E21401f1522 1152000.0 IONX
IONX Token Balance Before Transfer: 99000000.0 IONX
IONX Token Balance After Transfer: 97848000.0 IONX
Transaction hash: 0x751c9ae1ddf81fc8ce728ec375a3a8709ba480db738ea275c8b866697debcb91
Transaction etherscan: https://hardhat.etherscan.io/tx/0x751c9ae1ddf81fc8ce728ec375a3a8709ba480db738ea275c8b866697debcb91

  Contract Deployments Complete!

  Contracts:
  - CommunityVault:  0xE3011A37A904aB90C8881a99BD1F6E21401f1522
     - Gas Cost:     0.000874568 ETH
  - Staking:         0x1f10F3Ba7ACB61b2F50B9d6DdCf91a6f787C0E82
     - Gas Cost:     0.002336643 ETH
  - YieldFarm (IONX):   0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb
     - Gas Cost:     0.001716345 ETH
  - YieldFarm (LP):     0x38a024C0b412B9d1db8BC398140D00F5Af3093D4
     - Gas Cost:     0.001716345 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charged Particles Airdrop - Contract Initialization
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Using Network:  Hardhat
  Using Accounts:
  - Deployer:           0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  - Owner:              0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  - Trusted Forwarder:  0x14dC79964da2C08b23698B3D3cc7Ca32193d9955

  Loading Ionx from:  0x7a2088a1bFc9d81c55368AE168C2C02570cB814F

  Deploying VestingClaim7 with Expiry: 6/12/2022...

   Distributing Vested funds to VestingClaim7...
Distributing Initial Funds
Sending Funds to 0xB82008565FdC7e44609fA118A4a681E92581e680 1516631.0 IONX
IONX Token Balance Before Transfer: 97848000.0 IONX
IONX Token Balance After Transfer: 96331369.0 IONX
Transaction hash: 0xdb689e05e6a06e4021b1e117a295b5e9a95431663b4fa0605d6e5693c3504a51
Transaction etherscan: https://hardhat.etherscan.io/tx/0xdb689e05e6a06e4021b1e117a295b5e9a95431663b4fa0605d6e5693c3504a51

  Contract Deployments Complete!

  Contracts:
  - VestingClaim7: 0xB82008565FdC7e44609fA118A4a681E92581e680
     - Gas Cost:   0.000601584 ETH

  Contract Deployment Data saved to "deployments" directory.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

✨  Done in 8.54s.