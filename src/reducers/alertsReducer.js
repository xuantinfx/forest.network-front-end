import { userActionsConst } from '../actions/userActions';
import { profileActions } from '../actions/profileActions';
import { alertsActions } from '../actions/alertsActions';

const initialState = {
  alerts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case userActionsConst.FOLLOW_FALSE:
    case userActionsConst.POST_TWEET_FALSE:
    case userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE:
    case profileActions.LOAD_FOLLOW_FALSE:
    case profileActions.LOAD_PROFILE_FALSE:
        return {
            ...state,
            alerts: [...state.alerts, {type: 'error', content: action.error}]
        }
    // Nếu cần hiển thị message thì làm giống như trên
    // ví dụ
    // case success
    //   return {
    //      ...state
    //      alerts: [...state.alerts, {type: 'message', content: action.messgae}]
    //}
    case alertsActions.REMOVE_ALERT: {
        let newAlerts = [];
        let index = action.index;
        for(let i = 0; i < state.alerts.length; i++) {
            if(i !== index) {
                newAlerts.push(state.alerts[i]);
            }
        }
        return {
            ...state,
            alerts: newAlerts
        }
    }
    default:
      return state
  }
}
