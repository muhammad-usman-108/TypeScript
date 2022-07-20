const hobbies = ['Sports', 'Cooking'];
const actHobbies = ['Hiking'];

actHobbies.push(...hobbies);

console.log(actHobbies);

const person = {
    name: 'Usman',
    age: 30
}

const copiedPerson = {
    ...person,
    email: 'umuhammad202@yahoo.com'
}

console.log(copiedPerson);