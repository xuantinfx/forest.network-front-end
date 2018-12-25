// tx là transaction dạng base64
export const getTweet = (address,page, size,publicKey) => ({
    url: window.APP.API_HOST + "/tweets/" + address,
    method: "GET",
    params: {page, size},
    headers: {public_key: publicKey}
})