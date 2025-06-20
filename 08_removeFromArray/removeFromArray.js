const removeFromArray = function(array, ...args) {
    let newArray = array.filter(val => !args.includes(val));
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
