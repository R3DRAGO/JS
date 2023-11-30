// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function tringleSquare(a, b){
//     return a * b;
// }
// let x = tringleSquare(10, 2)
//
// console.log(x)




// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea(r){
//     return Math.PI * r * 2;
// }
//
// let x = circleArea(8);
//
// console.log(x)




// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(h, r){
//     return 2 * Math.PI * r * h;
// }
//
// let x = cylinderArea(5, 26)
//
// console.log(x)





// - створити функцію яка приймає масив та виводить кожен його елемент

// function massif(m){
//     for (let i = 0; i < m.length; i++){
//         console.log(m[i])
//     }
// }
//
// massif([1,3, true, false, 'safaf'])



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraph('abc');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text){
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>
// `)
// }
//
// list('abc')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text, number){
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++){
//         document.write(`<li>${text}</li>`);
// }
//     document.write(`</ul>`);
// }
//
// list('abc', 10)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function massif(elem){
//     for (let i = 0; i < elem.length; i++){
//        document.write(`<li>${elem[i]}</li>`)
//    }
// }
//
// massif([10, true, 'abc', 1.4, false])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// const users = [
//     {id: 1, name: 'vit', age: 22},
//     {id: 2, name: 'mar', age: 10},
//     {id: 3, name: 'kar', age: 50}
// ]
// function user(info){
//     for (let i = 0; i < info.length; i++){
//         document.write(`<div>`+`ID: ${info[i].id}<br>`+`Name: ${info[i].name}`+`<br>Age: ${info[i].age}</div>`)
//     }
// }
//
// user(users);




// - створити функцію яка повертає найменьше число з масиву


// function minNum(num){
//     let min = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] < min){
//             min = num[i];
//         }
//     }
//     return min;
// }
//
// let x = minNum([50,34,2,100,1])
//
// console.log(x)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function  sum(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(sum([1,2,10]))



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2){
//         const i = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = i;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 3))



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues,exchangeCurrency){
    for (let curr of currencyValues){
        if (curr.currency === exchangeCurrency){
            return sumUAH / curr.value
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))