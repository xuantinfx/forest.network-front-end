export const getProfile = (address) => {
  return {
    url: window.APP.API_HOST + "/profile/" + address,
    method: "GET",
    params: {},
    headers: {}
  }
}