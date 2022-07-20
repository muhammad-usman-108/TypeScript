const add = (...numbers: number[]) => {
    return numbers.reduce( (curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

console.log(add(2,3,4,5,1,2,3));