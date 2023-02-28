function squared(x) {
    return Math.pow(x,2);
}

function squaredMap(arr) {

    return arr.map(squared);
    
    
}

module.exports = squaredMap;