require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'heavy prize flee venture strong radar toss hospital hunt desert flock slush'; 
let testAccounts = [
"0x3f53a2b3b6082cefa81f231fae508584c18d900dba7b721cf26852c8d32767c7",
"0xcec3a0b1fb1d20967c6495f9f2b0aad0fa927e91aca602222d4eb1089775ba62",
"0x2f016a4d1c2d91d4cda8458b37b739ecec7a73ee007f5a8150f4b9632542b8b3",
"0x5b90e726ecd319c235d49f519a5e79c6ced50cb3b7db3b088d23077ed9181fc7",
"0x08d7d568625fdc8eff04f102265cb5784e89e745156a32c2966d540e2e13849b",
"0xe592121a3d07f9f135606afbf40f5bb54045ef95e6eaa1d9c3316fd744517d33",
"0x7e8485df68c53c07eab2b524108d319a39d2480261cdbcd655fbaf44c8a8e2e1",
"0x3af9d51ff842e6b62d8c9108bf2ad274b16599bbfd8ee37a8e7363a64fc7ad90",
"0x92299927228773e18c1c8491c4c2d65b402b2dad63570314efe9e0a88d4713e8",
"0x40310e7845e573d6360eb28a88dd1a23e4b48c6bafa0460038e29fc819e17d55"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


