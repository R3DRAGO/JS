
// =============================================================================1========================================================================================================

// let form = document.forms[0];
// console.log(form);
//
// let users = [];
// console.log(users);
//
// form.onsubmit = function (e) {
//     console.log(e);
//     e.preventDefault();
//     let username = e.target.name.value;
//     let surname = e.target.surname.value;
//     let age = this.age.value;
//     console.log({username, surname, age});
//     users.push({username, surname, age})
// };
//
// let show = document.getElementById('show');
// show.onclick = function (e) {
//     for (const user of users) {
//         let div = document.createElement('div');
//         div.innerText = `user: name - ${user.username}, surname - ${user.surname}, age - ${user.age}`;
//         document.body.append(div);
//     }
// };

// =============================================================================2========================================================================================================

// є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

let currentNumber = localStorage.getItem('counter') || 0;

document.getElementById('counterBlock').innerText = currentNumber;

currentNumber++;

document.getElementById('counterBlock').innerText = currentNumber;
localStorage.setItem('counter', currentNumber);