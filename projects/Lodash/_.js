const _ = {
    clamp(number, lowerBound, upperBound) {
        if (number <= lowerBound) {
            return lowerBound;
        } else if (number >= upperBound) {
            return upperBound;
        } else {
            return number;
        }
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        if (number < start) {
            return false;
        } else if (number >= end) {
            return false;
        } else {
            return true;
        }
    },
    words(stringOfWords) {
        const arrOfWords = stringOfWords.split(' ');
        return arrOfWords;
    },
    pad(string, length) {
        let lengthDiff = length - string.length;
        if (lengthDiff > 0) {
            let startPadding = Math.floor(lengthDiff/2);
            let endPadding = lengthDiff - startPadding;
            let padding = ' ';
            string = padding.repeat(startPadding) + string + padding.repeat(endPadding);
        }
        return string;
    },
    has(object, key) {
        let hasKey = object[key] !== undefined;
        return hasKey;
    },
    invert(object) {
        let keys = Object.keys(object).reverse();
        let values = Object.values(object).reverse();
        let newObject = {};
        for (let i=0; i<keys.length; i++) {
            newObject[values[i]] = keys[i];
        }
        return newObject;
    },
    findKey(object, predicate) {
        for (let key in object) {
            let value = object.key;
            if (predicate(value)) {
                return key;
            }
        }
        return undefined;
    }
};

// Do not write or modify code below this line.
module.exports = _;