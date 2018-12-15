// tx là transaction dạng base64
export const postTranSaction = (tx = "") => ({
    url: window.APP.API_HOST + "/transaction",
    method: "POST",
    params: {tx},
    headers: {}
})