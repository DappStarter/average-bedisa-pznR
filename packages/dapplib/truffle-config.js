require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note maze prosper harvest only equal ghost'; 
let testAccounts = [
"0x0855f01e92c7fd4970fda599b1af2710b6a5267ee250a69b1612bcc5c74e72a0",
"0xd951c0e71b2f487a96095c82b4b33502a81e678663abfbeb44c2640ccf4ad5af",
"0x1c0ada8780e6723cecc0bb4cedc3ee4aa93ab1653b2c80c70cd9edeb22df5913",
"0x135e7668fda27cba2c4a5d891da05de5fe5c17562d24a371ace27c799fb8b41c",
"0x6ebe997b82f5f7df8ed359f4c05c5ac08325173d6c3884562a89dad00320a459",
"0xa1c75fbb803240d6a4f25f7257e6c4ac6de040ba30cb078744e27e38fd04f0fa",
"0x34468ce4f9a4a4e7d6cf2039656a20bd5b88ff37da5378b2d8341e5c0dbccc0f",
"0xcb2f555f78b3a17177d733cee9799426c3853bd8908b6720f89b04a80dddc973",
"0x011db821c6ef4e00b0cdc1b6f3a53124f7b32e65b102962d71a8fa20d1b54238",
"0x875dd0db5d5bbba8c4113d028ea3d8811a9639ee88ba06d88d60529f0a329368"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

