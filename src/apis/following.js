// tx là transaction dạng base64
export const getFollowing = (address) => ({
    url: window.APP.API_HOST + "/followings/" + address,
    method: "GET",
    params: {},
    headers: {}
})