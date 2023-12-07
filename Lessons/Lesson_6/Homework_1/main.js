// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length)
console.log(loremIpsum.length)
console.log(javascriptIsCool.length)

// ====================================================================================================

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(helloWorld.toUpperCase())
console.log(loremIpsum.toUpperCase())
console.log(javascriptIsCool.toUpperCase())

// ====================================================================================================

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lower1 = 'HELLO WORLD';
let lower2 = 'LOREM IPSUM';
let lower3 = 'JAVASCRIPT IS COOL';

console.log(lower1.toLowerCase())
console.log(lower2.toLowerCase())
console.log(lower3.toLowerCase())

// ====================================================================================================

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string';

console.log(str.trim())

// ====================================================================================================

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let rev = 'Ревуть воли як ясла повні';

function stringToArray(rev) {
    return rev.split(' ');
}

console.log(stringToArray(rev))

// ====================================================================================================

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

let voids = numbers.map((item) => console.log(item.toString()));

// ====================================================================================================

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    } else {
        console.log('Error');
    }

    return nums;
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));




