export const alertsActions = {
    REMOVE_ALERT: "REMOVE_ALERT"
}

export const removeAlert = (index) => {
    return {
        type: alertsActions.REMOVE_ALERT,
        index
    }
} 