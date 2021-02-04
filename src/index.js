exports.min = function min(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    if (array || array.length) {
        let minimum = array[0];
        array.forEach(element => {
            if (minimum > element) {
                minimum = element;
            }
        });
        return minimum;
    } else return 0;
}

exports.max = function max(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    if (array || array.length) {
        let maximum = array[0];
        array.forEach(element => {
            if (maximum < element) {
                maximum = element;
            }
        });
        return maximum;
    } else return 0;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array <= 0) return 0;
    if (array || array.length) {
        let l = array.length;
        let sum = 0;
        array.forEach(elem => {
            sum += elem;
        })
        return sum / l;
    } else return 0;
}

const arr = [-29, -15, 32, -21, -5, 29, 5, -1, 1, 24, 36, 24, -22, 36, 11, -2, -30, 0, 39, -18];