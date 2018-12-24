import typeSocket from '../constants/typeSocket';

export const receiveMoney = (address, name, amount) => {
    return {
        type: typeSocket.RECEIVE_MONEY,
        address,
        name,
        amount
    }
}

export const followingPost = (address, name, content) => {
    return {
        type: typeSocket.FOLLOWING_POST,
        address,
        name,
        content
    }
}

export const receiveReaction = (address, name, reaction) => {
    return {
        type: typeSocket.RECEIVE_REACTION,
        address,
        name,
        reaction
    }
}

export const receiveComment = (address, name, content) => {
    return {
        type: typeSocket.RECEIVE_COMMENT,
        address,
        name,
        content
    }
}

export const receiveFollowings = (address, name) => {
    return {
        type: typeSocket.RECEIVE_FOLLOWINGS,
        address,
        name
    }
}

export const receiveUnfollowings = (address, name) => {
    return {
        type: typeSocket.RECEIVE_UNFOLLOWINGS,
        address,
        name
    }
}