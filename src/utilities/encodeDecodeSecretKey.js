import crypto from 'crypto';

export const encode = (secretKey) => {
    let mykey = crypto.createCipher('aes-128-cbc', 'mypassword key gg');
    let hash = mykey.update(secretKey, 'utf8', 'hex');
    hash += mykey.final('hex');
    return hash;
}

export const decode = (hash) => {
    if(!hash) {
        return null;
    }

    let mykey = crypto.createDecipher('aes-128-cbc', 'mypassword key gg');
    let secretKey = mykey.update(hash, 'hex', 'utf8')
    secretKey += mykey.final('utf8');

    return secretKey;
}