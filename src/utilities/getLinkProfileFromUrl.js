export default () => {
    let arr = window.location.href.split('/')
    if(arr.length > 5) {
        arr.pop();
    }
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "profile") {
            arrRes.push(arr[i])
            arrRes.push(arr[i+1]);
            break;
        }
    }
    return arrRes.join('/')
}