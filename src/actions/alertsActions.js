export const alertsActions = {
    REMOVE_ALERT: "REMOVE_ALERT",
    SHOW_ERROR: "SHOW_ERROR",
    SHOW_MESSAGE: "SHOW_MESSAGE"
}

export const removeAlert = (index) => {
    return {
        type: alertsActions.REMOVE_ALERT,
        index
    }
}

export const showError = (error) => {
    return {
        type: alertsActions.SHOW_ERROR,
        error
    }
}

export const showMessage = (message) => {
    return {
        type: alertsActions.SHOW_MESSAGE,
        message
    }
}