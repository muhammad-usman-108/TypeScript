function combine(input1, input2) {
    var out;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine(2, 3));
console.log(combine('Muhammad', 'Usman'));
