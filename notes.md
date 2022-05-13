


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