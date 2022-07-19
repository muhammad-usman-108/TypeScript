var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Muhammad Usman',
    age: 29,
    designation: 'Software Engineer',
    role: Role.AUTHOR
};
console.log(person);
if (person.role === Role.AUTHOR) {
    console.log("Current user is Author");
}
