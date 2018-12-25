import { postTranSaction } from "../apis/transaction";
import { requestApi } from "../apis/requestApi";
import { getProfile } from "../apis/profile";
import { Keypair } from 'stellar-base';
import { followings, post, updatePicture, payment, reactionTweet, commentTweet } from '../lib/encodeTX';
import updateAccountMultiKeys from '../utilities/updateAccountMultiKeys'
import _ from 'lodash';
import moment from "moment";
import { showMessage } from "./alertsActions";

export const userActionsConst = {
    CHANGE_SIGNUP: 'CHANGE_SIGNUP',
    LOGIN: 'LOGIN',
    LOGIN_DONE: 'LOGIN_DONE',
    INCREASE_SEQUENCE: 'INCREASE_SEQUENCE',
    BEGIN_FOLLOW: "BEGIN_FOLLOW",
    FOLLOW_DONE: "FOLLOW_DONE",
    UNFOLLOW_DONE: "UNFOLLOW_DONE",
    FOLLOW_FALSE: "FOLLOW_FALSE",
    BEGIN_UPDATE_PROFILE_PICTURE: 'BEGIN_UPDATE_PROFILE_PICTURE',
    UPDATE_PROFILE_PICTURE_DONE: 'UPDATE_PROFILE_PICTURE_DONE',
    UPDATE_PROFILE_PICTURE_FAIL: 'UPDATE_PROFILE_PICTURE_FAIL',
    BEGIN_GET_USER_PROFILE: 'BEGIN_GET_USER_PROFILE',
    GET_USER_PROFILE_DONE: 'GET_USER_PROFILE_DONE',
    SUBMIT_UPDATE_PROFILE: "SUBMIT_UPDATE_PROFILE",
    SUBMIT_UPDATE_PROFILE_FALSE: "SUBMIT_UPDATE_PROFILE_FALSE",
    SUBMIT_UPDATE_PROFILE_DONE: 'SUBMIT_UPDATE_PROFILE_DONE',
    EDIT_PROFILE: 'EDIT_PROFILE',
    BEGIN_POST_TWEET: "BEGIN_POST_TWEET",
    POST_TWEET_DONE: "POST_TWEET_DONE",
    POST_TWEET_FALSE: "POST_TWEET_FALSE",
    BEGIN_SEND_MONEY: 'BEGIN_SEND_MONEY',
    SEND_MONEY_DONE: 'SEND_MONEY_DONE',
    SEND_MONEY_FAIL: 'SEND_MONEY_FAIL',
    LOG_OUT: "LOG_OUT",
    BEGIN_REACT: 'BEGIN_REACT',
    REACT_DONE: 'REACT_DONE',
    REACT_FALSE: 'REACT_FALSE',
    BEGIN_REPLY_TWEET: 'BEGIN_REPLY_TWEET',
    REPLY_TWEET_DONE: 'REPLY_TWEET_DONE',
    REPLY_TWEET_FAIL: 'REPLY_TWEET_FAIL'
}

export const changeSingup = (isLogin) => {
    return {
        type: userActionsConst.CHANGE_SIGNUP,
        isLogin
    }
}

export const login = (alreadyLogin) => {
    return {
        type: userActionsConst.LOGIN,
        alreadyLogin,
    }
}

export const loginDone = (profile) => {
    return {
        type: userActionsConst.LOGIN_DONE,
        profile
    }
}

export const increaseSequence = () => {
    return {
        type: userActionsConst.INCREASE_SEQUENCE
    }
}

const updateFollowings = (listFollowings, sequence) => {
    return new Promise((resolve, reject) => {
        let secretKey = sessionStorage.getItem("SECRET_KEY");
        let tx = followings(secretKey, sequence + 1, Buffer.alloc(0), listFollowings, 1);
        requestApi(postTranSaction(tx))
            .then(res => {
                if (res.message.error) {
                    // False
                    reject(res.message.error)
                } else {
                    // Success
                    resolve(Buffer.from(tx, 'base64').length);
                }
            })
            .catch(err => {
                console.error(err);
                reject(err.response.data.message.error);
            })
    })
}

export const follow = (listFollowings, address) => {
    return (dispatch, getState) => {
        let sequence = getState().user.sequence;
        let newListFollowings = _.uniq([...listFollowings, address]);
        updateFollowings(newListFollowings, sequence)
            .then((txSize) => {
                dispatch(followDone(address, txSize));
            })
            .catch((error) => {
                dispatch(followFalse(error));
            })
    }
}

export const unFollow = (listFollowings, address) => {
    return (dispatch, getState) => {
        let sequence = getState().user.sequence;
        let newListFollowings = _.cloneDeep(listFollowings);
        _.remove(newListFollowings, (following) => following === address);
        updateFollowings(newListFollowings, sequence)
            .then((txSize) => {
                dispatch(unFollowDone(address, txSize));
            })
            .catch((error) => {
                dispatch(followFalse(error));
            })
    }
}

export const beginFollow = () => {
    return {
        type: userActionsConst.BEGIN_FOLLOW
    }
}

export const followDone = (address, txSize) => {
    return {
        type: userActionsConst.FOLLOW_DONE,
        address,
        txSize
    }
}

export const unFollowDone = (address, txSize) => {
    return {
        type: userActionsConst.UNFOLLOW_DONE,
        address,
        txSize
    }
}

export const followFalse = (error) => {
    return {
        type: userActionsConst.FOLLOW_FALSE,
        error
    }
}

export const beginUpdateProfilePicture = () => {
    return {
        type: userActionsConst.BEGIN_UPDATE_PROFILE_PICTURE
    }
}

export const updateProfilePictureDone = (pictureBuffer, txSize) => {
    return {
        type: userActionsConst.UPDATE_PROFILE_PICTURE_DONE,
        pictureBuffer: pictureBuffer,
        txSize
    }
}

export const updateProfilePictureFail = (error) => {
    return {
        type: userActionsConst.UPDATE_PROFILE_PICTURE_FAIL,
        error
    }
}

export const updateProfilePicture = (pictureBuffer) => {
    return (dispatch, getState) => {
        let state = getState();
        let { sequence } = state.user
        dispatch(beginUpdateProfilePicture());

        //create transaction
        let tx = updatePicture(sessionStorage.getItem('SECRET_KEY'), sequence + 1, Buffer.from(''), pictureBuffer, 1);

        let config = postTranSaction(tx);

        requestApi(config).then(result => {
            dispatch(updateProfilePictureDone(pictureBuffer, Buffer.from(tx, 'base64').length));
            dispatch(increaseSequence());
            dispatch(showMessage('Cập nhật hình thành công'))
        }).catch(err => {
            dispatch(updateProfilePictureFail('Cập nhật hình thất bại'));
        })
    }
}

export const beginGetUserProfile = () => {
    return {
        type: userActionsConst.BEGIN_GET_USER_PROFILE
    }
}

export const getUserProfileDone = (userProfile) => {
    return {
        type: userActionsConst.GET_USER_PROFILE_DONE,
        userProfile: userProfile
    }
}

export const getUserProfile = () => {
    return (dispatch) => {
        dispatch(beginGetUserProfile());

        const userAddress = Keypair.fromSecret(sessionStorage.getItem('SECRET_KEY')).publicKey();
        const config = getProfile(userAddress);

        requestApi(config).then(result => {
            dispatch(getUserProfileDone(result.data))
        }).catch(err => {
            console.error(err);
        })
    }
}

const submitUpdateProfile = () => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE
    }
}

const submitUpdateProfileFalse = (error, sequence, txSize) => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE,
        error,
        sequence,
        txSize
    }
}

const submitUpdateProfileDone = (profile, sequence, txSize) => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE_DONE,
        profile,
        sequence,
        txSize
    }
}

export const updateProfile = (profile) => {
    return (dispatch, getState) => {

        let state = getState();

        let sequence = state.user.sequence;

        let profileUpdate = {};

        let oldProfile = state.user;

        // Lọc ra những trường thay đổi
        for (let key in profile) {
            if (oldProfile[key] !== profile[key]) {
                profileUpdate[key] = profile[key];
            }
        }

        // Begin
        dispatch(submitUpdateProfile());

        updateAccountMultiKeys(profileUpdate, sequence)
            .then(({ sequence, txSize }) => {
                // Done
                dispatch(submitUpdateProfileDone(profileUpdate, sequence, txSize));
            })
            .catch(({ err, sequence, txSize }) => {
                console.error(err);
                // Error
                dispatch(submitUpdateProfileFalse(err, sequence, txSize));
            })

    }
}

export const editProfile = () => {
    return {
        type: userActionsConst.EDIT_PROFILE
    }
}

const beginPostTweet = () => {
    return {
        type: userActionsConst.BEGIN_POST_TWEET
    }
}

const postTweetDone = (tweet, txSize) => {
    return {
        type: userActionsConst.POST_TWEET_DONE,
        tweet,
        txSize
    }
}

const postTweetFalse = (error) => {
    return {
        type: userActionsConst.POST_TWEET_FALSE,
        error
    }
}

export const postTweet = (tweetContent) => {
    return (dispatch, getState) => {
        // begin
        dispatch(beginPostTweet());

        let state = getState();

        let sequence = state.user.sequence;
        let tx = post(
            sessionStorage.getItem('SECRET_KEY'),
            sequence + 1,
            Buffer.alloc(0),
            tweetContent,
            [],
            1);
        requestApi(postTranSaction(tx))
            .then(() => {
                // Success
                let tweet = {
                    name: state.user.name,
                    picture: state.user.picture,
                    content: tweetContent,
                    keys: [],
                    replies: [],
                    likes: [],
                    address: state.user.address,
                    time: (new Date()).getTime(),
                    _id: "123" + Math.random()
                }
                dispatch(postTweetDone(tweet, Buffer.from(tx, 'base64').length))
            })
            .catch(err => {
                console.error(err);
                // False
                dispatch(postTweetFalse(err.response.data.message.error));
            })
    }
}

export const logout = () => {
    return {
        type: userActionsConst.LOG_OUT
    }
}

export const beginSendMoney = () => {
    return {
        type: userActionsConst.BEGIN_SEND_MONEY
    }
}

export const sendMoney = (receivingAddress, amount) => {
    return (dispatch, getState) => {
        let state = getState();
        let { sequence } = state.user
        dispatch(beginSendMoney());

        let tx = '';
        //create transaction
        try {
            tx = payment(sessionStorage.getItem('SECRET_KEY'), sequence + 1, Buffer.from(''), receivingAddress, amount, 1);
        }
        catch (err) {
            dispatch(sendMoneyFail('Tài khoản không hợp lệ'));
            return;
        }

        let config = postTranSaction(tx);

        requestApi(config).then(result => {
            dispatch(sendMoneyDone({ fromOrTo: receivingAddress, amount: -amount, time: moment().format() }, Buffer.from(tx, 'base64').length));
            dispatch(increaseSequence());
            dispatch(showMessage('Giao dịch thành công'))
        }).catch(err => {
            let message = err.response ? err.response.data.message.error : 'Unknown error';
            dispatch(sendMoneyFail('Giao dịch thất bại: ' + message));
        })
    }
}

export const sendMoneyDone = (newPayment, txSize) => {
    return {
        type: userActionsConst.SEND_MONEY_DONE,
        newPayment,
        txSize
    }
}

export const sendMoneyFail = (error) => {
    return {
        type: userActionsConst.SEND_MONEY_FAIL,
        error
    }
}

const beginReact = () => {
    return {
        type: userActionsConst.BEGIN_REACT
    }
}

const reactDone = (tweets, txSize) => {
    return {
        type: userActionsConst.REACT_DONE,
        tweets,
        txSize
    }
}

const reactFalse = (error) => {
    return {
        type: userActionsConst.REACT_FALSE,
        error
    }
}

export const reactTweet = (hash, reaction) => {
    return (dispatch, getState) => {
        // begin
        dispatch(beginReact());

        let state = getState();

        let sequence = state.user.sequence;
        let tx = reactionTweet(
            sessionStorage.getItem('SECRET_KEY'),
            sequence + 1,
            Buffer.alloc(0),
            hash,
            reaction,
            1);
        requestApi(postTranSaction(tx))
            .then(() => {
                // Success

                //Check xem đã có reaction lần nào chưa
                let tweets = state.tweets.tweets
                let indexTweet = _.findIndex(tweets, tweet => {
                    if (tweet.hash === hash)
                        return true
                })
                let likes = tweets[indexTweet].likes
                let indexLike = _.findIndex(likes, like => {
                    if (like.from.address === Keypair.fromSecret(sessionStorage.getItem('SECRET_KEY')).publicKey()) {
                        return true;
                    }
                })
                if (indexLike > -1) {
                    if (reaction !== 0) {
                        let like = likes[indexLike];
                        like.reaction = reaction
                    }
                    else {
                        likes = likes.slice(indexLike, indexLike)
                    }
                }
                else {
                    if (reaction !== 0) {
                        let like = {
                            from: {
                                name: state.user.name,
                                address: state.user.address,
                                picture: state.user.picture || undefined
                            },
                            time: (new Date()).getTime(),
                            _id: "123" + Math.random(),
                            reaction: reaction
                        }
                        likes.push(like)
                    }
                }
                tweets[indexTweet].likes = likes
                tweets[indexTweet].reaction = reaction
                //console.log('likes',likes)
                dispatch(reactDone(tweets, tx.length))
            })
            .catch(err => {
                console.error(err);
                // False
                dispatch(reactFalse(err.response.data.message.error));
            })
    }
}

export const beginReplyTweet = () => {
    return {
        type: userActionsConst.BEGIN_REPLY_TWEET
    }
}

export const replyTweet = (content, hash) => {
    return (dispatch, getState) => {
        let state = getState();
        let { sequence, address, name, picture } = state.user;
        let { currentTweet: index } = state.tweets;
        //info for reducer to know where to push new reply
        let tweetMeta = {
            index,
            hash
        }
        let newReply = {
            content: content,
            from: {
                address: address,
                name: name,
                picture: picture
            },
            time: null
        }
        dispatch(beginReplyTweet());

        let tx = '';
        //create transaction
        try {
            tx = commentTweet(sessionStorage.getItem('SECRET_KEY'), sequence + 1, Buffer.from(''), hash, content, 1);
        }
        catch (err) {
            dispatch(replyTweetFail('Comment thất bại'));
            return;
        }

        let config = postTranSaction(tx);

        requestApi(config).then(result => {
            newReply.time = moment().format();
            dispatch(replyTweetDone(tweetMeta, newReply, Buffer.from(tx, 'base64').length));
        }).catch(err => {
            let message = err.response ? err.response.data.message.error : 'Unknown error';
            dispatch(replyTweetFail('Comment thất bại: ' + message));
        })
    }
}

export const replyTweetDone = (tweetMeta, newReply, txSize) => {
    return {
        type: userActionsConst.REPLY_TWEET_DONE,
        tweetMeta,
        newReply,
        txSize
    }
}

export const replyTweetFail = (error) => {
    return {
        type: userActionsConst.REPLY_TWEET_FAIL,
        error
    }
}