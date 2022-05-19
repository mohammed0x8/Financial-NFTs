


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


  Contract address:    0xc5a5c42992decbae36851359345fe25997f5c42d
  Transaction:         0x825fd9c41ebf5c18f49a3c0e29f61b8ec21b853d24f4b0208e25b3449e8f6a01
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            1589602 of 1589602
  Block #11400027:     0x7f2a003b31f398e8c6608e7d1b24cb0aba143c3c7ca04635047816432d3d543a
  Contract deployment: FungibleERC1155
  Contract address:    0x67d269191c92caf3cd7723f116c85e6e9bf55933
  Transaction:         0x8a77587b891d32a9f96bba98c9f502e1155bd2689a943f56ec524f9a69d807ee
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            1539455 of 1539455
  Block #11400028:     0xc19db08cadc345805fd64272a491830cf2aacb1ba65ee581c6de2c770fb0f516
  Contract call:       <UnrecognizedContract>
  Transaction:         0x1a30c34485f45781e1839fc23929bcc305fbcf1e691e6d46e9a5c550befc0d95
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Value:               0 ETH
  Gas used:            57348 of 199022680
  Block #11400029:     0xd8d6bfdaed4b4b7acc8b2b17e025067daaeb20c5965cbfc3b0ba5a818c35aa26
  Contract call:       <UnrecognizedContract>
  Transaction:         0xc56e8957c87eb66dd7a858259b6d158bd7249f6b9a7288a092c356db76fcde8c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            58870 of 199023640
  Block #11400030:     0xaf446be6c99d90a90855b45d76c3bb39908bb39e3e565c4c636133f960a79a7e
  Contract call:       <UnrecognizedContract>
  Transaction:         0xd31e742408c8a5f9c186b1ecc19c204fd82fff310d0bcaf8db4d02ad8d6a516c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            59164 of 199023512
  Block #11400031:     0x0ea2fd839a52c901a8f5db24c8c83101f7027bee4112e38de77f9e7afeb1ae9d
  Contract call:       <UnrecognizedContract>
  Transaction:         0x3834b91f59444598e82abd8af464dc704c3403cecd71cd282dcfe4531d77446e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            59041 of 199023704
  Block #11400032:     0xe26d9b692664c6bfd6ace0794a9a16487daf35ab1553a0e94a4d25b50688a704
  Contract call:       <UnrecognizedContract>
  Transaction:         0x3e23740a33135b18714cda436fd9ae43919eda82159eb87b5a3c94a7ee5e121e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            59362 of 199023704
  Block #11400033:     0x34d9ccfed01fbdd560bbdab1d0101e26c2707e7d15922b30ef42941eba1afccc
  Contract call:       <UnrecognizedContract>
  Transaction:         0x01719a5970dfe245903fea1fd6ce0ce7dac2b9675a1553c23228406a771f8036
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            59843 of 199023768
  Block #11400034:     0x69a6cc426d402b67ebfce6dc72e5a4795cfcb4da2c466ebf464c0dd210985c6a
  Contract call:       <UnrecognizedContract>
  Transaction:         0xc07f34068600d0e887778525cfa4c3d91bd30c530b810fd9451dee76f825a50d
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            59497 of 199023576
  Block #11400035:     0x7215a5e11f6ba457226158cff5becb7a73581cf75c85ca1d948b602403f6aa74
  Contract call:       <UnrecognizedContract>
  Transaction:         0x9ad8a228b96259412cc1942895912dd1247405d006998ac0995e594d1a232f62
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6
  Value:               0 ETH
  Gas used:            58838 of 199023768
  Block #11400036:     0x4d21e7390a17f24ff1209f4c967d46d9aa52dc9d479540ad4700ac144a084362
  Contract call:       <UnrecognizedContract>
  Transaction:         0x928dae123027120d19c8eb7fe2507302ee79f50f999ea765c998ce58db06cb22
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x0165878a594ca255338adfa4d48449f69242eb8f
  Value:               0 ETH
  Gas used:            58870 of 199023704
  Block #11400037:     0x9341ac67e2b1dc2edd7a6b08214dcffae713afb5fff71881ebdba784d241e209
  Contract call:       <UnrecognizedContract>
  Transaction:         0xd7558af888d262d92a496ee5b4179e9c151c0a91e317c065207fd7681a7d7915
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x0165878a594ca255338adfa4d48449f69242eb8f
  Value:               0 ETH
  Gas used:            59033 of 199023768
  Block #11400038:     0xcefaed557f0e5cf7766737c8e232596e1e168604914796699112b950cd86440e
  Contract call:       <UnrecognizedContract>
  Transaction:         0xb3e284f0217863982fb3f5aeac75c3dd02918899c1a58a3f3bc2e9a749681c98
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            56615 of 199023704
  Block #11400039:     0x1511b8c1424109f42204fe9878f98f85a15f473a8e4d8450f3e1f0bc4a0df882
  Contract call:       <UnrecognizedContract>
  Transaction:         0x138b9c40e0f8d00ce508dc56b571896897896dc7da359f619af6f1b705109d66
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            56738 of 199023512
  Block #11400040:     0xf5cf5ea838d1aa869bd4431bfbb7fa2a1e6f403529d9fa26cba655fcd65d756f
  Contract call:       <UnrecognizedContract>
  Transaction:         0x1fee5eb6427bb0c841da650c306ad000a79e3f1da8dc1e70da8d411718b66260
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            56937 of 199023768
  Block #11400041:     0xf672df25ff519a729875cb527f7dacb2c50e0dbc5eee5396a9d4d191c770923e
  Contract call:       ParticleSplitter#setChargedManagers
  Transaction:         0x3a9b745c65565c51ed34e76b94848c95ea7f966a1955d58c43fd28b7ad66f1f6
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x9a676e781a523b5d0c0e43731313a708cb607508
  Value:               0 ETH
  Gas used:            47146 of 199022680
  Block #11400042:     0x877363859335c24bdd6e2a7482aa8591825ee4e7f67105e6970aee139a7c0972
  Contract call:       ParticleSplitter#setTokenInfoProxy
  Transaction:         0x96cc30c2cdbd045f87c6b03b5cde03ece0c8a927fe6c0846bded82439529fff2
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x9a676e781a523b5d0c0e43731313a708cb607508
  Value:               0 ETH
  Gas used:            47191 of 199022680
  Block #11400043:     0x8998d620ce3d47a2f0f7274427e0065060e1893f7c4076cc41f7aee43134cce7
  Contract call:       <UnrecognizedContract>
  Transaction:         0x4be2ad8561b35261f348ddda9d035ee01c7f132469af0e1724f369348eadf962
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6
  Value:               0 ETH
  Gas used:            56485 of 199021528
  Block #11400044:     0x4d67045632775fe593394b7206f711ab3c0117352917e165694ef643f872660d
  Contract call:       GenericWalletManager#setController
  Transaction:         0x4982e7f6ef2ef3976720a908144eef8d39230410084ee64f4d215fd60d31b40a
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x0b306bf915c4d645ff596e518faf3f9669b97016
  Value:               0 ETH
  Gas used:            47234 of 199022680
  Block #11400045:     0x3baaa17e2baf90807e5afd8c6515d9bfcb827b89f70c5626e1f20f3b3f2ef3e9
  Contract call:       <UnrecognizedContract>
  Transaction:         0x30ecb7cbf66883333d4ac24e6da8f286545cd59103bcd04add4723e52107a0bc
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61174 of 199023640
  Block #11400046:     0x75ef26c3bd7d708fcf563531d5922693be43ecd0cc4495de8272b36403ba609d
  Contract call:       GenericWalletManagerB#setController
  Transaction:         0xb8dd88bf48aad42217e96e3672bb65989804582ef5e4ff67dd7122a7084203e7
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x959922be3caee4b8cd9a407cc3ac1c251c2007b1
  Value:               0 ETH
  Gas used:            47234 of 199022680
  Block #11400047:     0x4da730b45a21d4ebbf9a8481d559c9a1b860408f1fe91c1b56e0471f805dfa41
  Contract call:       <UnrecognizedContract>
  Transaction:         0xe63a564945f5fd749eb4aa45cee22028cef536004a7c7faa91cef98cef44c5de
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61198 of 199023768
  Block #11400048:     0x3cf274d30a31140cc4d2d3c5acc9d9867c6a1dd086d3af4488668623ee596e84
  Contract call:       GenericBasketManager#setController
  Transaction:         0x80e256be5c3b7313ed00326e6fb537001e3e3155b33005c4302291a38495adee
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x9a9f2ccfde556a7e9ff0848998aa4a0cfd8863ae
  Value:               0 ETH
  Gas used:            47212 of 199022680
  Block #11400049:     0x559aa5dff1bd5cc987b93b519a07a46fe7112d9b59dc4ef2990df68acf1d1f9c
  Contract call:       <UnrecognizedContract>
  Transaction:         0x4d4b824a7fa965b2d3612e510b89be7c2c0446f2f81ac94799c6d1869ece2ae1
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61196 of 199023640
  Block #11400050:     0xe7d16ec51e52776f1ecfce30996f6263fe43a023bd92cda1115ac56d5dcba164
  Contract call:       GenericBasketManagerB#setController
  Transaction:         0xed957c1350631ef7c33f7c1ad5cd5eace557ff25f421d5fd95911b67635f24db
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x68b1d87f95878fe05b998f19b66f4baba5de1aed
  Value:               0 ETH
  Gas used:            47234 of 199022680
  Block #11400051:     0xbc122da386ea4047b0b2da6dd3bb7ba03c75b17725bfe431b41a2345fef787aa
  Contract call:       <UnrecognizedContract>
  Transaction:         0xeab326733ce1dba6b3bb8d9197e49d25f0c6eb17a09bdab878f8d77de6b33b00
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61132 of 199023768
  Block #11400052:     0x774f89ed1c04cf9d359b831a13c243e70b8f0085efe79d9a93b3a8c633c9e6c7
  Contract call:       GenericBasketManagerB#setTokenInfoProxy
  Transaction:         0xe7bf7f89a79657afe4a083e16a93d895906e46792f9131e1085408cf24bba9e5
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x68b1d87f95878fe05b998f19b66f4baba5de1aed
  Value:               0 ETH
  Gas used:            46030 of 199022680
  Block #11400053:     0x8bb4868c7973369355c70163203aa24ddb297c19f0cd196875573a65b3386e72
  Contract call:       AaveWalletManager#setController
  Transaction:         0xfbaa76231946f6b13f617c05a17e560299ffbd647fb7d0e65dabcd036e65e647
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x3aa5ebb10dc797cac828524e59a333d0a371443c
  Value:               0 ETH
  Gas used:            47190 of 199022680
  Block #11400054:     0xe1753b3d568b7f9756ee1911000c7c0a1ed334f87f4ca381a2ee4081bcff2e88
  Contract call:       AaveWalletManager#setAaveBridge
  Transaction:         0x10266ceb3a7cf60a8558b57936cf1b87b88330c9cb35a541e8e2612b5601c56f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x3aa5ebb10dc797cac828524e59a333d0a371443c
  Value:               0 ETH
  Gas used:            47220 of 199022680
  Block #11400055:     0x64fa1cd5fbf1732faa0cf2bf56bdf72b0f90e21f14d3345dfa07166faee37ab7
  Contract call:       <UnrecognizedContract>
  Transaction:         0x8da87a398e5548a8f2f5aadb74e53e468095dc08a964c6cab1a90104599b0211
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61204 of 199023448
  Block #11400056:     0x9594a7da78be10057c07270dedbf43776a71f71d7eda1497816b10e74b0f308f
  Contract call:       AaveWalletManagerB#setController
  Transaction:         0xea76a66ec79decaa62fe75f6c81ba3dbd59ab22863201b933a0bcbc96af5a43e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc6e7df5e7b4f2a278906862b61205850344d4e7d
  Value:               0 ETH
  Gas used:            47168 of 199022680
  Block #11400057:     0x44e1306df9ad81ef02f7eb5c9c0f0f82fbc92b74f14e2868c82d98259e4c1583
  Contract call:       AaveWalletManagerB#setAaveBridge
  Transaction:         0xa31e397f8286215c07d956c5e6a4fb920be735633a56f6e920197357046d85ec
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc6e7df5e7b4f2a278906862b61205850344d4e7d
  Value:               0 ETH
  Gas used:            47269 of 199022680
  Block #11400058:     0xbac0d2f9a55eb55278c216f27ed2dacdfff01fcf91ba3dfe599f68c54bf732d3
  Contract call:       <UnrecognizedContract>
  Transaction:         0xd95fc2a441a2275150efe0fe4eee04b376ed78ccdc091c13b00c416b40f5588f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x610178da211fef7d417bc0e6fed39f05609ad788
  Value:               0 ETH
  Gas used:            61206 of 199023576
  Block #11400059:     0xc1c2aa93087b55158863b9a954ae89bb0aaf9ac902e8672b7e5b69a0a632de49
  Contract call:       AaveWalletManagerB#setChargedSettings
  Transaction:         0x34f24373c7a2e4cc4b354bf02f3f3cccea9a7e4dd58f31babfb8ed052b9994f4
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc6e7df5e7b4f2a278906862b61205850344d4e7d
  Value:               0 ETH
  Gas used:            47220 of 199022680
  Block #11400060:     0x53fde24094577d17a1a8a3fae86e34c29722bed0f377bc290472fbada8c5ca8d
  Contract call:       Proton#setUniverse
  Transaction:         0x3b85dfe989f6b3278a54a689173f3a6ad10a6a19c845df438daff2ea47644a81
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            49540 of 199022616
  Block #11400061:     0x0a1e1f52ece10eed0e9d137c3774d9b631c496c9a66ac1b708eec665920abd9a
  Contract call:       Proton#setChargedState
  Transaction:         0xada864464a01d13c3656759eaf76d1893b3d57072351d546e9efcfdf9208e7b5
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            49574 of 199022680
  Block #11400062:     0x9293588e94d35b1032acf8aeef15d48101121dfad7387ccd4385c3770aaec4ec
  Contract call:       Proton#setChargedSettings
  Transaction:         0xc52279379920e2b17dd34f783fb58449174ab0f012acf5bfbdd7960a5e8b1e3d
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            49529 of 199022680
  Block #11400063:     0x6e8b293964b399a70e7be51227e0ce01eee9ec64eefd5ea5d42423e21641976f
  Contract call:       Proton#setChargedParticles
  Transaction:         0x1c02367b76aac57f0e3d6dcf9be7b87ddf2f712ca751af71631e99db6454fd84
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            49531 of 199022680
  Block #11400064:     0x6375a24faced3680d78cc2b300304d1c6b9c64277626512ea03d3a3ea744a63b
  Contract call:       <UnrecognizedContract>
  Transaction:         0x8ad7e0344156dd27ecf3dafca44b52a91550bdabbbe0490c2c5a0f991eda354a
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6
  Value:               0 ETH
  Gas used:            62779 of 199023064
  Block #11400065:     0x456d33fdf0ef891c609f75fbf079b7c382f05b11f040a6cc683ee30919cfe1ee
  Contract call:       <UnrecognizedContract>
  Transaction:         0xdcfdc3dfd8ace40ed160f516fce5aa16f08dd757ac01440a6648af2869043afe
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Value:               0 ETH
  Gas used:            57371 of 199022680
  Block #11400066:     0x1521072ee543a1f3fc1a530757c2d497a5a96ad3a7556565b01d8c75d7342e34
  Contract call:       ProtonB#setUniverse
  Transaction:         0x4c36192dcb307192390578867dca806920dea96a4ca4ab93f7482b6553dccbde
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            49557 of 199022616
  Block #11400067:     0xefae0f68b0f39623e112370ff4680516283487abe7e680a072db7784b9cb390b
  Contract call:       ProtonB#setChargedState
  Transaction:         0xedb0241ffbaebf13798f2830dfa69de8da5298ef2b80bc07f728ef3e32027e75
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            49574 of 199022680
  Block #11400068:     0xa1c0aef556afdb01e2da21c2bd611995ef5ce1be6869cb91275ef5941cfc3c94
  Contract call:       ProtonB#setChargedSettings
  Transaction:         0x01e50c9c3fdd229f00286d133359755a65d3afafa4f4ed3666e2aba2dae06fe9
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            49552 of 199022680
  Block #11400069:     0xa7421a8997f202e5d8dfe3dbbe2e30bc80f6e451e126f72d1de8ccbc3be8caf9
  Contract call:       ProtonB#setChargedParticles
  Transaction:         0x17f1353edca09153d37bc5acd33284fe8ad8b56d400ad31297c160949396c69b
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            49531 of 199022680
  Block #11400070:     0x4f66451e37b58c2c1afa4f49347b0f5f7d29e22139baf41d7cf51142f340b25e
  Contract call:       <UnrecognizedContract>
  Transaction:         0xbae21851436b0b6b0b987db1fe63c372eb69d3e32364f8904aac12e2b2265d6f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6
  Value:               0 ETH
  Gas used:            71962 of 199024472
  Block #11400071:     0xe5a71849a34a95869eb3736573ebd04cddc2bdc308c48cbcd562f92247b91eae
  Contract call:       Proton#setUniverse
  Transaction:         0xecb22f66a250d167b793ba0a11e878b78f57015d8ecdb14aebfd6f0f04a51c01
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            17212 of 199021400
  Block #11400072:     0x80896306f0185cf1e6f42acf774ca587d180293763a6cb50c92459fc55f81d0b
  Contract call:       <UnrecognizedContract>
  Transaction:         0x4f882df5086c5250eb5ecb12a14b487082fd0a0253b5536bd92d264ed8305184
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Value:               0 ETH
  Gas used:            40271 of 199022680
  Block #11400073:     0x3ad5ca046ae322a3b1c153eae84f75c46634080e15d8f1763a29d45306c16cfb
  Contract call:       <UnrecognizedContract>
  Transaction:         0x0562fc9a06e8387815ef8acd1bb57d6241924cab99eb56a1a975d8e93a176db9
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Value:               0 ETH
  Gas used:            80040 of 199023320
  Block #11400074:     0xc9f0434607812918dbc1382a5db8e8fda40a0703c70461257de72e3a27da365d
  Contract call:       Ionx#setMinter
  Transaction:         0x1410a90331dbb93188f1590a9829a61937d6fad1a184d291038dd0d22266bebc
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Value:               0 ETH
  Gas used:            47561 of 199022680
  Block #11400075:     0xfd71d309be77d472b911d4071513b3749a4baf9df534da50dfcebec9744cf9b0
  Contract call:       Lepton2#setMaxMintPerTx
  Transaction:         0x53c29a814eb97cccb80a5a3e200ec99ef17586c0e71b2faea2771dbd0f99fa84
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            46829 of 199021464
  Block #11400076:     0xa53ff34644c466f6af5a7dbd97b00b8ff6bbc8ed0da86869ee494526293a6e8c
  Contract call:       <UnrecognizedContract>
  Transaction:         0xccdd3512a231f719ab5d0c8006b3297d3c83e8a224805581d17fe3f5fa75140f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            42409 of 199023640
  Block #11400077:     0x4ae2ecf16140c9af4c9522fbc8299e233f23d90d8535ce903c455efa9e08d212
  Contract call:       <UnrecognizedContract>
  Transaction:         0x8b78bf6a404084c22b74bb6a1c390097589d168efabf637c2a972a6c0bbcbbd8
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6
  Value:               0 ETH
  Gas used:            62779 of 199023064
  Block #11400078:     0x2384a90613313476b5df7f357842e41c4a44043b20f9bb4b3f13416e386fb57c
  Contract call:       Lepton2#addLeptonType
  Transaction:         0xa5aaf38ea9be59b2781206de27df2eb75915901ed5306090562abcbbd50cfbfc
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            208219 of 199027992
  Block #11400079:     0x865033b2f9815cac8176f911b1b1f9706281d9b9f08cec2abe6c6be1c7c7f55c
  Contract call:       Lepton2#addLeptonType
  Transaction:         0xab867b8f3e81d0f681abc9d68bb6699fb9e124b8bd92bbf96f016cf30ffce0d4
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            174043 of 199028120
  Block #11400080:     0x7bf6677ace70c7ab3f204fb27c0de389cdae21d3827a110862a50364f8772582
  Contract call:       Lepton2#addLeptonType
  Transaction:         0x459ea928a565098893c70d8b4788b6e4ebc446a40cdc9144964c9b7d3e3a3fda
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            174043 of 199028120
  Block #11400081:     0x9954db333681a9a4e202fd34e89615a5032839eeb1ccb42b8b9dc21e83b3e597
  Contract call:       Lepton2#addLeptonType
  Transaction:         0x5964184ee7e8a80e196c85452bc1f15d1674fedb21d1455b8814c16afaedfbff
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            174043 of 199028120
  Block #11400082:     0x341634cdcc6b9a93b5800e01c778de617e4f65dd96027998e928c03cf3ed3bdc
  Contract call:       Lepton2#addLeptonType
  Transaction:         0x24bce575410da6e84a4e9243efb73103bf1ffbb6587a73a09afd5acc4ca55903
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            174043 of 199028120
  Block #11400083:     0x2fa97b335abbbc0a0106a5c063126ce825e855b1c3c43f9c32f29f94fae36826
  Contract call:       Lepton2#addLeptonType
  Transaction:         0x87ae6545d28020700522ebd71dfd923ae404e0dd5bcb19c8054b24fc5c58fb68
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            174067 of 199028248
  Block #11400084:     0x615738613b9e4325c3470c8ad063695204024f93831fa316d08ad68f279484c5
  Contract call:       GenericWalletManagerB#setExecutor
  Transaction:         0x79a4d919dc00ecd7e0b7c03542c1375325db4b7fba65f00c2241bf29651a8f52
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x959922be3caee4b8cd9a407cc3ac1c251c2007b1
  Value:               0 ETH
  Gas used:            47191 of 199022680
  Block #11400085:     0x5a9eff210f97973d2c08df5750ba2b4bb5a7940f88f0fb404a69b6b092a20285
  Contract call:       GenericBasketManagerB#setExecutor
  Transaction:         0x69f29ba7a82a9b7cc4b22b37dc6cb149ba298297f3aa99bfdcf463f5a302693b
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x68b1d87f95878fe05b998f19b66f4baba5de1aed
  Value:               0 ETH
  Gas used:            47191 of 199022680
  Block #11400086:     0xa4bfe9905411c97550f2f6c7aecb5f8fcaf0959ab2dc3bcf140e87d325ecc831
  Contract call:       AaveWalletManagerB#setExecutor
  Transaction:         0x35b7492bf56366c1357c6c0ae166fa9cd1693db55bb53a02ffa979a675c8ce79
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc6e7df5e7b4f2a278906862b61205850344d4e7d
  Value:               0 ETH
  Gas used:            47169 of 199022680
  Block #11400087:     0xea6a6007d229a81b6dff17d1c845c6bce6df969ee4d005150a9d85cd8c720459
  Contract call:       ExternalERC721#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Contract call:       ExternalERC721#mintNft
  Transaction:         0xa1860513fe944a196103a77f3079613837d567d31186f80aae4a15b4a4993799
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Value:               0 ETH
  Gas used:            316092 of 199027736
  Block #11400088:     0xf087197eb06283f565c62fedefc8fb76a7e01e2ecf78e41590af517d49466b1c
  Contract call:       ExternalERC721#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Contract call:       ExternalERC721#mintNft
  Transaction:         0x043b7f0d6074d7c2f743a31b34d3df4bfd784d2db54316d8e9d6d7d108a17429
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Value:               0 ETH
  Gas used:            264792 of 199027736
  Block #11400089:     0x2812512ae0d843ff649ab1899f09729fc74bef731175e33ca70ec9f397c61142
  Contract call:       ExternalERC721#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Contract call:       ExternalERC721#mintNft
  Transaction:         0x6bb611912fc4856eb370b5350991946cea43c8a9936b6a68d05fee8c5121df3c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x09635f643e140090a9a8dcd712ed6285858cebef
  Value:               0 ETH
  Gas used:            264792 of 199027736
  Block #11400090:     0x0878c5ec72fe9548987c2b3ebbe5f11b23fdab36e61a69adae9f91de63a59762
  Contract call:       FungibleERC1155#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x67d269191c92caf3cd7723f116c85e6e9bf55933
  Contract call:       FungibleERC1155#mintNft
  Transaction:         0xce33a43e4e127df1e0ce49e85c0b5096b55ac75b78f6abf2debb0f7e65de3157
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x67d269191c92caf3cd7723f116c85e6e9bf55933
  Value:               0 ETH
  Gas used:            70088 of 199022872
  Block #11400091:     0x6f5e0bf937192aa14c26d9a754e1d7573b17cee9bd3f966c51e8142f7a9df0cf
  Contract call:       NonFungibleERC1155#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Contract call:       NonFungibleERC1155#mintNft
  Transaction:         0xf335b57ddf8be7c9fb9503bbc805ef5434d6eaa120fc979d2636149035d403e6
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Value:               0 ETH
  Gas used:            114407 of 199022680
  Block #11400092:     0xbbbb1c58d200744ce7a054e40a942659c53755a88f13c90f389c53e5bbe73c03
  Contract call:       NonFungibleERC1155#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Contract call:       NonFungibleERC1155#mintNft
  Transaction:         0x64db330251fe88109a3f59c4015df59b1b9fc407acc16a91b53dc4635c7bfa85
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Value:               0 ETH
  Gas used:            97307 of 199022680
  Block #11400093:     0xac5e3e19595f0f8156445e7ea9882de6da809fe47ef0817c31c11b476db33f05
  Contract call:       NonFungibleERC1155#mintNft
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Contract call:       NonFungibleERC1155#mintNft
  Transaction:         0xac33984ab6a7e177d39d1d3420e654d3e6936ba18eaca79b20301d376314c7c5
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Value:               0 ETH
  Gas used:            97307 of 199022680
  Block #11400094:     0x94fcd59cc9c165c1bd70b5311f163296b49f50e4e9e5903c296055aa263aa5b5
  Contract call:       Proton#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Contract call:       Proton#createBasicProton
  Transaction:         0x97150856393b9713766464dbc85eb52cd0e58f6c2a810face84d8bf509feb277
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            296523 of 199028120
  Block #11400095:     0x74800f81f47ff7c87b93fa8da5c2e22ba4961f222f29a724714d16fc83059f26
  Contract call:       Proton#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Contract call:       Proton#createBasicProton
  Transaction:         0xf6b559716a8b276936b9ba139f2e138345f3e29448999e7c73125a6e64f10e2c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            245223 of 199028120
  Block #11400096:     0xf6498b2137efdc2890047ce404a967fbe4a2ecd61efcdc2eada94a416b64e384
  Contract call:       Proton#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Contract call:       Proton#createBasicProton
  Transaction:         0xa3e4f75b90ad684fb85e45fec5a4986ca3892f9fc7f81dfc620c71358ff696de
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            245223 of 199028120
  Block #11400097:     0x11274e91a60f6cd87dce241de84be22204b2113475855847c431aaecb65cfcfb
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x98b37c0b9a7d82b095f6b4c27e06fd303e865512c3b61db52421005779d3b2a7
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            296498 of 199028120
  Block #11400098:     0x38f36893d694e3b6b41457c45902e7a737a1ce7c1c3806b9603df4da8953432d
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x5f138e686d732e82a11a746c62c7921cb3bc637c4cb657bda54d2ba8b87a8b1e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400099:     0x04cc05aae80687df4aed581478b00d818c2112cef822fd64183434b1fd13d735
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x46acafe08a87a6d09ea21838a0ac377e7c69fac142c94cdfeac19e88ba151303
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400100:     0xd7e727c992ce2b0e4c435cae444227ed95f08d97edfddab8b4a9820562f5b4ee
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0xf7a02d5e98105cc007556888c6e3e5060fbbfccac423223a377f99cc914ea495
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400101:     0xc52526a300a09f1054160ff78dd03ddcd61bc4e1c4e6345b70f3b81d1027b7b2
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x6c30e6d9837eb2a59d5b18c433e832875829d6954e93fa4c3684bbead1460ee8
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400102:     0x3287e0874e8c3a478c176a9aeb5ce482d638eeaafa8fcf62e146b7a6afc01571
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x2f0f7b6bbdbe3c1a83140a99cb8fa49c8447c2c769bcc2d0639b5194f51ddc3f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400103:     0x3bb492951cd16c1cf51720ecf2dc69eddb1fbf712ee228c9aa65ba6bbec50678
  Contract call:       ProtonB#createBasicProton
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Contract call:       ProtonB#createBasicProton
  Transaction:         0x6603d1cafa781d65eb079ea88b40dfb452521a49cf60dc7e04d56a479aeacc10
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            245198 of 199028120
  Block #11400104:     0xde9f1b63346162c9ef727762a7cd6cdcbba767fbf9a5b22f91c67e78f3cb2199
  Contract call:       ProtonB#setApprovalForAll
  Transaction:         0x166a1a0d043cdfe05cf1ee653a8bd8020db9f1a83ac737795478d435efcf483f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            49264 of 199022872
  Block #11400105:     0x6f8be6ab0fa78a534ad882c62f039542d90a2a5ecfee9b677f4c9677449af1ce
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0x4fd479cb02a65fd5c21a9672191ce1499ff983acff9dfb8216bc57fa0da7655c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            398897 of 199025752
  Block #11400106:     0xab76d192970ce7cb4014f69eafb269958b61674b916ba34536fbe76d25d545a2
  Contract call:       Proton#setApprovalForAll
  Transaction:         0x5142aebe2964751716108f7fa9e4d237bbbe1af24797e678da085dcbdd165203
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4ed7c70f96b99c776995fb64377f0d4ab3b0e1c1
  Value:               0 ETH
  Gas used:            49264 of 199022872
  Block #11400107:     0xb83141e37cbaec697aee617a388eb7c110042d7c540c62f41230ec421e75a886
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0x0b49b7deac9c8b994ad3100b5d313fa60e12455c75e03b774a82e0edbfee499e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            398897 of 199025752
  Block #11400108:     0xbaa5a25f63a870f030e120d27a5da29e0cfe518a1d167cc950c4e0f675978859
  Contract call:       FungibleERC1155#setApprovalForAll
  Transaction:         0xcdc7679a86d32e870e41b4bfe6657f370ae3eb37c84b57ece53abb8d690e78b2
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x67d269191c92caf3cd7723f116c85e6e9bf55933
  Value:               0 ETH
  Gas used:            46153 of 199022872
  Block #11400109:     0xad78afb96862df54141c6a5ae4c9e981152c7b7f5d441f9f5c4b3d19757e70d2
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0xd4fb32792a575273a802edfcee16428ddf970752e833e13282f1da5a430b42d6
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            320327 of 199025752
  Block #11400110:     0xb05498e2ed7ac94146f27788990c231a2bc3dbb1d6d5f3c9959e14a777851dc3
  Contract call:       NonFungibleERC1155#setApprovalForAll
  Transaction:         0x7d565088666081e751717416e0b5bc80927aa8296666a69e42ea0764f157e6ee
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xc5a5c42992decbae36851359345fe25997f5c42d
  Value:               0 ETH
  Gas used:            46175 of 199022872
  Block #11400111:     0x6aafcbe7ee215917113e9151b639c44729ad65ad5621b301b81c39e6e362f39e
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0xbeefa21326a1f0e92b4d8334cc8124b952f416e309775fcd491a04510c531d9e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            305371 of 199025752
  Block #11400112:     0x87c34710c205e4ba522930ec21942099fe46fa9202f6ed7628e2a090e1a159ef
  Contract call:       ProtonB#setApprovalForAll
  Transaction:         0xf1c507d5a8eea01d788b28a1b7f5a545e3b148b7b077c68e85ef8c49561b633c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            29364 of 199022872
  Block #11400113:     0xc06b66dafe7dacc4424709fd57bc0d3333f3fc1e3609a9e82712d93ec82829b1
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0x35901446720ea9e7104f47aab7bfb9a033271a4e58ae260d642c89c4d205779d
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            398897 of 199025752
  Block #11400114:     0xebe2cc8790d5cd03fce5eb6a4138bcd35f88d6c7c7d2c27df629b220fa91f07a
  Contract call:       ProtonB#setApprovalForAll
  Transaction:         0xdcf17a7cba9423ef8891eba7e57e81e8c5960611aedcc7e3fe16a70561fa23c0
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            29364 of 199022872
  Block #11400115:     0xfc2a1ccb9f50adfd29bcd73a1d1bdeb265c9192abb7fac3c800f14afa3f23225
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0xb5e25e1fe777abe9af2d90de204f70f83fd860379e031e489beb2e34dfb01e75
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            398897 of 199025752
  Block #11400116:     0x6ef2b9a4fa00ed0011d73201653aa0de7d8626f9c08c187cf661523ed6cb6939
  Contract call:       ProtonB#setApprovalForAll
  Transaction:         0xb7c53770cdf2933b65fed2fd50ff7d795edabf71227d67ca5aae761b944e535c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x322813fd9a801c5507c9de605d63cea4f2ce6c44
  Value:               0 ETH
  Gas used:            29364 of 199022872
  Block #11400117:     0xf23e40f7a4de6fdb23ffaa616c9bd97b991cf95ec9d119e16d8559833131d1c8
  Contract call:       <UnrecognizedContract>
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Contract call:       <UnrecognizedContract>
  Transaction:         0xff22b4f3a8ee7aaefc2432eb0c2ff2bb22ce0f31a7550fa2eae5411aae6db4ca
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0
  Value:               0 ETH
  Gas used:            398897 of 199025752
  Block #11400118:     0xe3de2404ed5d19432ea28f625e7bf83b292f893dc9919547957340d65ce7b41e
  Contract call:       Ionx#mint
  Transaction:         0x6beb7f8384332ab8ae82ed99f94274e2bc4341513b0d5b8c797b8e3270d71fde
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Value:               0 ETH
  Gas used:            93197 of 199023320
  Block #11400119:     0x53147bc6e205cea532d0d7e53be6e625e586786dd04c3599e7fdcdf9b3a4b9f3
  Contract call:       Lepton2#migrateAccounts
  Transaction:         0x387cfca3e239f99dfb6cacc447d1454dbd2ccfe5e6ae9dae32fbd322bc496fba
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x4a679253410272dd5232b3ff7cf5dbb88f295319
  Value:               0 ETH
  Gas used:            125031 of 199022808
  Block #11400120:     0x642ba537b01d2041181afbe6179ace1cf8a9c3180e7437a31fb51496cb9fc01d
  Contract deployment: MerkleDistributor
  Contract address:    0xab16a69a5a8c12c732e0deff4be56a70bb64c926
  Transaction:         0xa06c8f5280fb137fbef53c1f0b8e825f5e7e9902128560c7b53f09ea4565ba85
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            361146 of 361146
  Block #11400121:     0x74a5e1c247e6a8cf05efb00c7e2edd10f8ad012175df6fcb620f44dc2e7b632d
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Contract call:       Ionx#transfer
  Transaction:         0x62adeed9e3c039772456d479492b7d7ad8ada6019790fe72d7c84fc312c4e271
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Value:               0 ETH
  Gas used:            51713 of 199023256
  Block #11400122:     0xab1f13328504cc9bfed722477f3ee809c7481e0aac2616e24fa96d2a0e7816c3
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Contract deployment: CommunityVault
  Contract address:    0xe3011a37a904ab90c8881a99bd1f6e21401f1522
  Transaction:         0x413ca29000edf780b2b2307cf92690f4b8bd4286ebf6873f66565e586b575ddb
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            874568 of 874568
  Block #11400123:     0xcdffdc236a5a1a4f617097a00243b1d82cf979d102364d7c8802c253422926f7
  Contract deployment: Staking
  Contract address:    0x1f10f3ba7acb61b2f50b9d6ddcf91a6f787c0e82
  Transaction:         0x28621db193dae2bf21768154df5d9c9732d1a4ad3eb91ea1d57fb8215c47c196
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            2336643 of 2336643
  Block #11400124:     0xbe83cbcf3f52c8f2d7971b3267920d3cab96080a073f6aeb73a5a205e8c2c086
  Contract deployment: YieldFarm
  Contract address:    0x457ccf29090fe5a24c19c1bc95f492168c0eafdb
  Transaction:         0xff3b7652d47fe966c5b663c6f9ad40ef0be5f25cfe9dc7fc3dbea4186a24caf5
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            1716345 of 1716345
  Block #11400125:     0x31f83752220c7181c5d1f2ef1ca704d64b7438e6febbc44081d9fe28727a52d5
  Contract call:       CommunityVault#setAllowance
  Transaction:         0xa0828ba48d0d7f794730e01f5c1a60f4937008747b1b6411b7dd41f7620bcd8b
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xe3011a37a904ab90c8881a99bd1f6e21401f1522
  Value:               0 ETH
  Gas used:            53471 of 199023256
  Block #11400126:     0xcc6a1f48342993d3ada5704ce1037e488ee58904d650d02a72737023af68a95b
  Contract deployment: YieldFarm
  Contract address:    0x38a024c0b412b9d1db8bc398140d00f5af3093d4
  Transaction:         0x29007c6231e3a0c036b537065443f3a8b74292882103d92e79ae0004670e1cdd
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            1716345 of 1716345
  Block #11400127:     0xfcbbbb42ba5268ef419be935ea3b910d44459b74c2bdb5400cf4089ebb4e28f2
  Contract call:       CommunityVault#setAllowance
  Transaction:         0xad876d205dc160ddc905de2cc24141422a4a9a0aab6643a3df3cd5261b1ac75d
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xe3011a37a904ab90c8881a99bd1f6e21401f1522
  Value:               0 ETH
  Gas used:            53459 of 199023192
  Block #11400128:     0xe65cdecd2cb43d0d2c964966f82b7c766ddb30fda1367dbceeb6155386a0d73b
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Contract call:       Ionx#transfer
  Transaction:         0x751c9ae1ddf81fc8ce728ec375a3a8709ba480db738ea275c8b866697debcb91
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Value:               0 ETH
  Gas used:            51713 of 199023256
  Block #11400129:     0x756c34e3af0ad6e7ab1d36e1425e9d74e157dc18fd332a301b57a36d54bdfd06
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Contract deployment: VestingClaim7
  Contract address:    0xb82008565fdc7e44609fa118a4a681e92581e680
  Transaction:         0x9f2ede63c1539f45779a8120775a4a62422c09beb95b096686d3cf075e7addf5
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            601584 of 601584
  Block #11400130:     0xafe7391c3a191cf8b6b27ef218640cb2a4c1857b7b4c5fd6d7527a4a7fa87ddb
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Contract call:       Ionx#transfer
  Transaction:         0xdb689e05e6a06e4021b1e117a295b5e9a95431663b4fa0605d6e5693c3504a51
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f
  Value:               0 ETH
  Gas used:            51737 of 199023384
  Block #11400131:     0x048803aaa449c8b8750dd0492873ce07387249ed9b9026656ee3c5eaa5362eb6
  Contract call:       Ionx#balanceOf
  From:                0x70997970c51812dc3a010c7d01b50e0d17dc79c8
  To:                  0x7a2088a1bfc9d81c55368ae168c2c02570cb814f




"{
  "code": -32603,
  "message": "Internal JSON-RPC error.",
  "data": {
    "code": -32603,
    "message": "Error: VM Exception while processing transaction: revert CP:E-417"
  },
  "stack": "Error: Internal JSON-RPC error.\n    at new i (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:184008)\n    at s (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:179620)\n    at Object.internal (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:180230)\n    at c (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:110035)\n    at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:111067\n    at async chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:164413"
}
  at new i (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:184008)
  at s (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:179620)
  at Object.internal (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:180230)
  at c (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:110035)
  at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:111067
  at async chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:164413"