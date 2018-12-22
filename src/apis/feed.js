// tx là transaction dạng base64
export const getFeed = (publicKey) => ({
    url: window.APP.API_HOST + "/feed/",
    method: "GET",
    params: {},
    headers: {public_key: publicKey}
})