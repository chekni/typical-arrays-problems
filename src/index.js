exports.min = function min(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    let minimum = array[0];
    array.forEach(element => {
        if (minimum > element) {
            minimum = element;
        }
    });
    return minimum;
}

exports.max = function max(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    let maximum = array[0];
    array.forEach(element => {
        if (maximum < element) {
            maximum = element;
        }
    });
    return maximum;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    let l = array.length;
    let sum = 0;
    array.forEach(elem => {
        sum += elem;
    })
    return sum / l;
}