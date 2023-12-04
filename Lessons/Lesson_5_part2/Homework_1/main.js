// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let tringleSquare = (a, b) => a * b;
//
// console.log(tringleSquare(10, 20))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let circleArea = r => Math.PI * r * 2;
//
// console.log(circleArea(15))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// let cylinderArea = (h, r) => 2 * Math.PI * r * h;
//
// console.log(cylinderArea(5, 26))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = (m) => {
//     for (let i = 0; i < m.length; i++) {
//         console.log(m[i])
//     }
// }
//
// arr([1, 3, true, false, 'safaf'])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// let p = (text) => document.write(`<p>${text}</p>`);
//
// p('abc');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// let list = (text) => document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
//     `);
//
// list('abafasfsaf')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list('abc', 15)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = (elem) => {
//     for (let i = 0; i < elem.length; i++) {
//         document.write(`<li>${elem[i]}</li>`)
//     }
// }
//
// arr([10, true, 'ABC', 1.4, false])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// const users = [
//     {id: 1, name: 'vit', age: 22},
//     {id: 2, name: 'mar', age: 10},
//     {id: 3, name: 'kar', age: 50}
// ]
// let user = (info) => {
//     for (let i = 0; i < info.length; i++) {
//         document.write(`<div>` + `ID: ${info[i].id}<br>` + `Name: ${info[i].name}` + `<br>Age: ${info[i].age}</div>`)
//     }
// }
//
// user(users);


// - створити функцію яка повертає найменьше число з масиву


// let minNum = (num) => {
//     let min = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] < min) {
//             min = num[i];
//         }
//     }
//     return min;
// }
//
// let x = minNum([50, 34, 2, 100, 1, 0.1])
//
// console.log(x)






// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(sum([1, 2, 10]))



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     const i = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = i;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 1, 3))




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
            return sumUAH / curr.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))





















