// tx là transaction dạng base64
export const postTranSaction = (tx = "") => ({
    url: process.env.API_HOST + "/transaction",
    method: "POST",
    params: {tx},
    headers: {}
})