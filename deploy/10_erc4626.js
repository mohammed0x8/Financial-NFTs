const {
  getDeployData,
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
    const { getNamedAccounts } = hre;
    const { deployer, protocolOwner } = await getNamedAccounts();
    const network = await hre.network;

    const chainId = chainIdByName(network.name);
    const {isProd, isHardhat} = chainTypeById(chainId);
    const alchemyTimeout = isHardhat ? 0 : (isProd ? 10 : 1);
    const deployData = {};

    log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    log('Charged Particles LP: Generic ERC4626 - Contract Deployment');
    log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

    log(`  Using Network: ${chainNameById(chainId)} (${chainId})`);
    log('  Using Accounts:');
    log('  - Deployer:    ', deployer);
    log('  - Owner:       ', protocolOwner);
    log(' ');

    await log('\n  Deploying ERC4626-GenericWalletManager...')(alchemyTimeout);
    const GenericWalletManager = await hre.ethers.getContractFactory('ERC4626WalletManager');
    const GenericWalletManagerInstance = await GenericWalletManager.deploy();
    const genericWalletManager = await GenericWalletManagerInstance.deployed();
    deployData['ERC4626WalletManager'] = {
      abi: getContractAbi('ERC4626WalletManager'),
      address: genericWalletManager.address,
      deployTransaction: genericWalletManager.deployTransaction,
    }
    saveDeploymentData(chainId, deployData);
    log('  - ERC4626WalletManager:  ', genericWalletManager.address);
    log('     - Block:              ', genericWalletManager.deployTransaction.blockNumber);
    log('     - Gas Cost:           ', getTxGasCost({ deployTransaction: genericWalletManager.deployTransaction }));


    log('\n  Contract Deployment Data saved to "deployments" directory.');
    log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
};

module.exports.tags = ['ERC4626']
