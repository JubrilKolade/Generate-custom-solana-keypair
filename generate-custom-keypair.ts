import { Keypair } from "@solana/web3.js"

async function generateCustomAddress(pattern) {
    let keypair;
    let publicKey;

    while (true) {
        keypair = Keypair.generate()
        publicKey = keypair.publicKey.toBase58();

        if (publicKey.startsWith(pattern)) {
            break;
        }
    }

    return { publicKey, secretKey: keypair.secretKey };
}

(async () => {
    const pattern = 'Leo';
    const { publicKey, secretKey } = await generateCustomAddress(pattern);

    console.log('Generated custom address:', publicKey);
    console.log('Secret key:' , secretKey.toString('hex'));
})();