// tx là transaction dạng base64
export const getTweet = (address,publicKey) => ({
    url: window.APP.API_HOST + "/tweets/" + address,
    method: "GET",
    params: {},
    headers: {public_key: publicKey}
})