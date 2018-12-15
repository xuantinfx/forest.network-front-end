const vstruct = require('varstruct');
const crypto = require('crypto');
const { Keypair } = require('stellar-base');
const v1 = require('./v1');

const Transaction = vstruct([
  { name: 'version', type: vstruct.UInt8 },
]);

export function encode(tx) {
  switch (tx.version) {
    case 1:
      return v1.encode(tx);

    default:
      throw Error('Unsupport version');
  }
}

export function decode(data) {
  const versionTx = Transaction.decode(data);
  switch (versionTx.version) {
    case 1:
      return v1.decode(data);
    
    default:
      throw Error('Unsupport version');
  }
}

export function getUnsignedHash(tx) {
  return crypto
    .createHash('sha256')
    .update(encode({
      ...tx,
      signature: Buffer.alloc(64, 0),
    }))
    .digest();
}

export function sign(tx, secret) {
  const key = Keypair.fromSecret(secret);
  tx.account = key.publicKey();
  tx.signature = key.sign(getUnsignedHash(tx));
  return tx;
}

export function verify(tx) {
  const key = Keypair.fromPublicKey(tx.account);
  return key.verify(getUnsignedHash(tx), tx.signature);
}

export function hash(tx) {
  return tx.hash = crypto.createHash('sha256')
    .update(encode(tx))
    .digest()
    .toString('hex')
    .toUpperCase();
}

export function getTXBase64(tx) {
  return tx.toString('base64');
}
