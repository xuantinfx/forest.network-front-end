import { requestApi } from '../apis/requestApi';
import { postTranSaction } from '../apis/transaction';
import { updateAccount } from '../lib/encodeTX';

const updateAccoutJob = (key, value, sequence) => {
    return new Promise((resolve, reject) => {
        let tx = updateAccount(
            sessionStorage.getItem("SECRET_KEY"),
            sequence,
            Buffer.alloc(0),
            key,
            value,
            1);
        requestApi(postTranSaction(tx))
        .then(() => {
            resolve(tx.length);
        })
        .catch(err => {
            console.error(err);
            reject(err.response.data.message.error);
        })
    })
}

export default (object, sequence) => {
    let seq = sequence;
    return new Promise(async (resolve, reject) => {
        let txSize = 0;
        let delta = 0;
        try {
            for( let key in object) {
                delta = await updateAccoutJob(key, object[key], ++seq);
                txSize += delta;
            }
            resolve({sequence: seq, txSize});
        } catch (err) {
            reject({err, sequence: --seq, txSize});
        }
    })
}