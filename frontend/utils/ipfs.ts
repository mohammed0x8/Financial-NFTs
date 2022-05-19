export const getIFPSURL = (url: string) => {
    let result = url;
    if (result.indexOf('ipfs://') === 0) {
        result = `https://ipfs.infura.io/ipfs/${result.replace('ipfs://', '')}`;
    }
    return result;
}