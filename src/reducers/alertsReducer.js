import { userActionsConst } from '../actions/userActions';
import { profileActions } from '../actions/profileActions';
import { alertsActions } from '../actions/alertsActions';
import typeSocket from '../constants/typeSocket';
import showBalance from '../utilities/showBalance';

const initialState = {
    alerts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case alertsActions.SHOW_ERROR:
        case userActionsConst.FOLLOW_FALSE:
        case userActionsConst.POST_TWEET_FALSE:
        case userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE:
        case userActionsConst.UPDATE_PROFILE_PICTURE_FAIL:
        case userActionsConst.SEND_MONEY_FAIL:
        case userActionsConst.REPLY_TWEET_FAIL:
        case profileActions.LOAD_FOLLOW_FALSE:
        case profileActions.LOAD_PROFILE_FALSE:
            return {
                ...state,
                alerts: [{ type: 'error', content: action.error }, ...state.alerts]
            }
        // Nếu cần hiển thị message thì làm giống như trên
        // ví dụ
        // case success
        //   return {
        //      ...state,
        //      alerts: [{type: 'message', content: action.message}, ...state.alerts]
        //}
        case alertsActions.SHOW_MESSAGE:
            return {
                ...state,
                alerts: [{ type: 'message', content: action.message }, ...state.alerts]
            }
        case alertsActions.REMOVE_ALERT: {
            let newAlerts = [];
            let index = action.index;
            for (let i = 0; i < state.alerts.length; i++) {
                if (i !== index) {
                    newAlerts.push(state.alerts[i]);
                }
            }
            return {
                ...state,
                alerts: newAlerts
            }
        }
        case typeSocket.FOLLOWING_POST: {
            let message = `${action.name || action.address} đã đăng "${action.content.slice(0,50)}"`;
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        case typeSocket.RECEIVE_MONEY: {
            let message = `${action.name || action.address} đã chuyển cho bạn ${showBalance(action.amount)}`;
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        case typeSocket.RECEIVE_REACTION: {
            let react = ["bỏ thích", "thích", "yêu", "cười", "bất ngờ", "buồn", "giận giữ"];
            let message = `${action.name || action.address} đã ${react[action.reaction]} bài viết của bạn`;
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        case typeSocket.RECEIVE_COMMENT: {
            let message = `${action.name || action.address} đã bình luận "${action.content.slice(0, 30)}" bài viết của bạn`
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        case typeSocket.RECEIVE_FOLLOWINGS: {
            let message = `${action.name || action.address} đã theo dõi bạn`;
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        case typeSocket.RECEIVE_UNFOLLOWINGS: {
            let message = `${action.name || action.address} đã bỏ theo dõi bạn`;
            return {
                ...state,
                alerts: [{type: 'message', content: message}, ...state.alerts]
            }
        }
        default:
            return state
    }
}
