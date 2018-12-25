import typeSocket from '../../constants/typeSocket';
import { followingPost, receiveFollowings, receiveUnfollowings, receiveReaction, receiveComment, receiveMoney} from '../../actions/socketAction';

export default (dispatch, obj) => {
    console.log('obj', obj);
    switch (obj.type) {
        case typeSocket.FOLLOWING_POST:
            dispatch(followingPost(obj.address, obj.name, obj.content));
            break;
        case typeSocket.RECEIVE_FOLLOWINGS:
            dispatch(receiveFollowings(obj.address, obj.name));
            break;
        case typeSocket.RECEIVE_UNFOLLOWINGS:
            dispatch(receiveUnfollowings(obj.address, obj.name));
            break;
        case typeSocket.RECEIVE_REACTION:
            dispatch(receiveReaction(obj.address, obj.name, obj.reaction));
            break;
        case typeSocket.RECEIVE_COMMENT:
            dispatch(receiveComment(obj.address, obj.name, obj.content));
            break;
        case typeSocket.RECEIVE_MONEY:
            dispatch(receiveMoney(obj.address, obj.name, obj.amount));
            break;
    
        default:
            break;
    }
}