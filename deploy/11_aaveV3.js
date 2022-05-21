const {
    saveDeploymentData,
    getContractAbi,
    getTxGasCost,
    presets,
  } = require('../js-helpers/deploy');
  
  const {
    log,
    chainTypeById,
    chainNameById,
    chainIdByName,
  } = require('../js-helpers/utils');
  
  module.exports = async (hre) => {
      const { ethers, getNamedAccounts } = hre;
      const { deployer, protocolOwner } = await getNamedAccounts();
      const network = await hre.network;
      const deployData = {};
  
      const chainId = chainIdByName(network.name);
      const {isProd, isHardhat} = chainTypeById(chainId);
      const alchemyTimeout = isHardhat ? 0 : (isProd ? 10 : 1);
      const lendingPoolProviderV3 = presets.Aave.v3.lendingPoolProvider[chainId];
      log(`CHAIN ID = ${chainId}`);
  
  
      log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      log('Charged Particles LP: Aave-V3 - Contract Deployment');
      log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
  
      log(`  Using Network: ${chainNameById(chainId)} (${chainId})`);
      log('  Using Accounts:');
      log('  - Deployer:    ', deployer);
      log('  - Owner:       ', protocolOwner);
      log(' ');
  
      await log('\n  Deploying AaveV3WalletManager...')(alchemyTimeout);
      const AaveWalletManager = await hre.ethers.getContractFactory('AaveV3WalletManager');
      const AaveWalletManagerInstance = await AaveWalletManager.deploy();
      const aaveWalletManager = await AaveWalletManagerInstance.deployed();
      deployData['AaveV3WalletManager'] = {
        abi: getContractAbi('AaveV3WalletManager'),
        address: aaveWalletManager.address,
        deployTransaction: aaveWalletManager.deployTransaction,
      }
      saveDeploymentData(chainId, deployData);
      log('  - AaveV3WalletManager:  ', aaveWalletManager.address);
      log('     - Block:           ', aaveWalletManager.deployTransaction.blockNumber);
      log('     - Gas Cost:        ', getTxGasCost({ deployTransaction: aaveWalletManager.deployTransaction }));
  
      await log('\n  Deploying AaveBridgeV3 with LP Provider: ', lendingPoolProviderV3)(alchemyTimeout);
      const AaveBridgeV3 = await ethers.getContractFactory('AaveBridgeV3');
      const AaveBridgeV3Instance = await AaveBridgeV3.deploy(lendingPoolProviderV3);
      const aaveBridgeV3 = await AaveBridgeV3Instance.deployed();
      deployData['AaveBridgeV3'] = {
        abi: getContractAbi('AaveBridgeV3'),
        address: aaveBridgeV3.address,
        lendingPoolProvider: lendingPoolProviderV3,
        deployTransaction: aaveBridgeV3.deployTransaction,
      }
      saveDeploymentData(chainId, deployData);
      log('  - AaveBridgeV2:       ', aaveBridgeV3.address);
      log('     - Block:           ', aaveBridgeV3.deployTransaction.blockNumber);
      log('     - Gas Cost:        ', getTxGasCost({deployTransaction: aaveBridgeV3.deployTransaction}));
  
  
      log('\n  Contract Deployment Data saved to "deployments" directory.');
      log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
  };
  
  module.exports.tags = ['aaveV3']