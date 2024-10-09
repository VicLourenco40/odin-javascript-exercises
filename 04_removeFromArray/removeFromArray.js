const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        while(array.includes(value)) {
            const index = array.lastIndexOf(value);
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
