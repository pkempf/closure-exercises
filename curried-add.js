function curriedAdd(total) {
    if (total === undefined) return 0;
    function add(num) {
        if (num === undefined) return total;
        total += num;
        return add;
    }
    return add;
}

module.exports = { curriedAdd };
