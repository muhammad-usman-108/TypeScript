function combine(input1, input2, resultConversion) {
    var out;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine(2, 3, 'as-number'));
console.log(combine('2', '3', 'as-number'));
console.log(combine('Muhammad', 'Usman', 'as-text'));
