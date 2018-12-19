// tx là transaction dạng base64
export const getFollower = (address) => ({
    url: window.APP.API_HOST + "/followers/" + address,
    method: "GET",
    params: {},
    headers: {}
})