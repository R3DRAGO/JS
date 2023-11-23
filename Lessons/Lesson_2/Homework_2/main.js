// Логічні розгалуження:



// 1
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = +prompt('Take a number:');
//
// if (x !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }




// 2
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('Enter a number from 0 to 59');
//
// if (time >= 0 && time <=14){
//     console.log('The figure refers to the first quarter');
// }else if (time >= 15 && time <=29){
//     console.log('The figure refers to the second quarter');
// }else if (time >= 30 && time<=44){
//     console.log('The figure refers to the third quarter');
// }else if (time >= 45 && time<= 59){
//     console.log('The figure refers to the fourth quarter');
// }else{
//     console.log('Error')
// }





// 3
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = +prompt('Enter day from 0 to 31');
//
// if (day >= 0 && day <= 9){
//     console.log('First half');
// }else if(day >= 10 && day <= 19){
//     console.log('Second half');
// }else if(day >= 20 && day <= 31){
//     console.log('Third half')
// }else{
//     console.log('Error')
// }




// 4
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


// let timetable = +prompt('Take a number of day from 1 to 7');
// switch (timetable) {
//     case 1:
//         console.log([
//             {
//                 Day: 'Monday',
//                 FirstLesson: 'NNS',
//                 SecondLesson: 'AA',
//                 ThirdLesson: 'BB',
//             }
//         ])
//         break
//
//         case 2:
//         console.log([
//             {
//                 Day: 'Tuesday',
//                 FirstLesson: 'HGAA',
//                 SecondLesson: 'AAGG',
//                 ThirdLesson: 'BBASF',
//             }
//         ])
//         break
//
//         case 3:
//         console.log([
//             {
//                 Day: 'Wednesday',
//                 FirstLesson: 'JFS',
//                 SecondLesson: 'BCX',
//                 ThirdLesson: 'JDF',
//             }
//         ])
//         break
//
//         case 4:
//         console.log([
//             {
//                 Day: 'Thursday',
//                 FirstLesson: 'HG',
//                 SecondLesson: 'AAB',
//                 ThirdLesson: 'CGD',
//             }
//         ])
//         break
//
//         case 5:
//         console.log([
//             {
//                 Day: 'Friday',
//                 FirstLesson: 'AA',
//                 SecondLesson: 'JJ',
//                 ThirdLesson: 'CC',
//             }
//         ])
//         break
//
//         case 6:
//         console.log('Weekend')
//         break
//
//         case 7:
//         console.log('Weekend')
//         break
//
//     default:
//         console.log('Please input number from 1 to 7')
//
// }



// 5
// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = 1;
//
// if (x === '' || x === 0 || x === null || isNaN(x) || x===false ){
//     console.log('default')
// }else{
//     console.log(typeof x)
// }