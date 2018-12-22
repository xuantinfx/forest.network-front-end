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

//picture ở dạng Buffer của hình jpeg
export const updatePicture = (secretKey, sequence, memo, picture, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "update_account",
        params: {
            key: "picture",
            value: picture
        }
    }
    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

// reaction là số tương ứng
// reaction = 0: Không phản ứng (hủy bỏ phản ứng trước đó)
// reaction = 1: Like
// reaction = 2: Love
// reaction = 3: Haha
// reaction = 4: Wow
// reaction = 5: Sad
// reaction = 6: Angry
export const reactionTweet = (secretKey, sequence, memo, hash, reaction, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "interact",
        params: {
            object: hash,
            content: {
                type: 2,
                reaction
            }
        }
    }
    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}

export const commentTweet = (secretKey, sequence, memo, hash, text, version) => {
    let transaction = {
        version,
        sequence,
        memo,
        operation: "interact",
        params: {
            object: hash,
            content: {
                type: 1,
                text
            }
        }
    }
    return getTXSubmitRequest(encode(sign(transaction, secretKey)));
}