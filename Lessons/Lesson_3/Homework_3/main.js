// Є масив


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// За допомоги циклу вивести:

// - користувачів зі статусом true

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.status === true){
//         console.log(user)
//     }
// }

// - користувачів зі статусом false

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.status === false){
//         console.log(user)
//     }
// }

// - користувачів які старші за 30 років

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age > 30){
        console.log(user)
    }
}