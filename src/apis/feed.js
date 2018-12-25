// tx là transaction dạng base64
export const getFeed = (publicKey,page,size) => ({
    url: window.APP.API_HOST + "/feed/",
    method: "GET",
    params: {page, size},
    headers: {public_key: publicKey}
})