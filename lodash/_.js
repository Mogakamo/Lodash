const _ = {
    clamp(number, lower, upper) {
        const lowerClampValue = (() => {
           return Math.max(number, lower);
        })

        const clampedValue = (() => {
            return Math.min(lowerClampValue, upper);
        })
        return clampedValue;
    }
};



// Do not write or modify code below this line.
module.exports = _;