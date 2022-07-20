var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ['Sports', 'Cooking'];
var actHobbies = ['Hiking'];
actHobbies.push.apply(actHobbies, hobbies);
console.log(actHobbies);
var person = {
    name: 'Usman',
    age: 30
};
var copiedPerson = __assign(__assign({}, person), { email: 'umuhammad202@yahoo.com' });
console.log(copiedPerson);
