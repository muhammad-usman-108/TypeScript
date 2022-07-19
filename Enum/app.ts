
enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Muhammad Usman',
    age: 29,
    designation: 'Software Engineer',
    role: Role.AUTHOR
}

console.log(person);

if (person.role === Role.AUTHOR) {
    console.log("Current user is Author");
}
