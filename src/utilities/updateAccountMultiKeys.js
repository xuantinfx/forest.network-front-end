import { requestApi } from '../apis/requestApi';
import { postTranSaction } from '../apis/transaction';
import { updateAccount } from '../lib/encodeTX';

const updateAccoutJob = (key, value, sequence) => {
    return new Promise((resolve, reject) => {
        requestApi(postTranSaction(updateAccount(
            sessionStorage.getItem("SECRET_KEY"),
            sequence,
            Buffer.alloc(0),
            key,
            value,
            1)))
        .then(() => {
            resolve();
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
        try {
            for( let key in object) {
                await updateAccoutJob(key, object[key], ++seq)
            }
            resolve(seq);
        } catch (err) {
            reject({err, sequence: --seq});
        }
    })
}