export default (num) => {
    if(num >= 1000) {
        return Math.floor(num/1000) + " N";
    }
    return "" + num;
}