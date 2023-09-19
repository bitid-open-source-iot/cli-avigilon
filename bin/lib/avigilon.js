const crypto = require('crypto');

function showHelp() {
    console.log(`
        -n --userNonce  userNonce
        -k --userKey    userKey

        example: ice -c /dev/ttyACM0 -p <password here>
    `)
}

function tokenGenerator() {
    return new Promise((resolve, reject) => {
        const TokenGenerator = {
            getToken() {
                const timestamp = (Date.now() / 1000 | 0).toString();
                const hash = crypto.createHash('sha256');
                const userNonce = '001Do00000F5vY4IAJ';
                const userKey = 'cfc898a2eee5fee8533150690f46483d652023d278d310bc05df88ab05191290';
                const encrypted = hash.update(`${timestamp}${userKey}`).digest('hex');
                const authToken = `${userNonce}:${timestamp}:${encrypted}`;
                return authToken;
            }
        };
        // console.log(TokenGenerator.getToken());
        resolve(TokenGenerator.getToken())
    })
}

module.exports = {
    tokenGenerator,
    showHelp
}
