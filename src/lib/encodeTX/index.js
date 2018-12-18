import { encode, sign, getTXSubmitRequest} from '../transaction'
import base32 from 'base32.js'
import _ from 'lodash'

export const createAccount = (secretKey, sequence, memo, address, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "create_account",
        params: {
            address
        }
    }

    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

export const payment = (secretKey, sequence, memo, address, amount, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "payment",
        params: {
            address,
            amount
        }
    }

    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

export const post = (secretKey, sequence, memo, content, keys, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "post",
        params: {
            content: {
                type: 1,
                text: content
            },
            keys
        }
    }

    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

export const updateAccount = (secretKey, sequence, memo, key, value, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "update_account",
        params: {
            key,
            value
        }
    }
    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

export const followings = (secretKey, sequence, memo, addresses, version) => {
    // Map public key từ 54 xuống 35
    addresses =  _.map(addresses, (address54 => {
        return Buffer.from(base32.decode(address54));
    }))
    
    let transaction = {
        version,
        sequence,
        memo,
        operation: "update_account",
        params: {
            key: "followings",
            value: {
                addresses
            }
        }
    }
    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}