export default (balance) => {
    let tree = balance / 100000000;
    if(tree >= 1) {
        return tree.toLocaleString() + " TRE"
    }
    return (balance || 0).toLocaleString() + " CEL"
}