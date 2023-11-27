// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 1; i <= 10; i++){
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quo?</div>`)
//     console.log(i)
// }



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i <= 10; i++){
//     document.write(i + `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quo?</div>`)
//     console.log(i)
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 1;
// while (i <= 20){
//     document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`);
//     i++;
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i <= 20){
//     document.write(i + `<h1>Lorem ipsum dolor sit amet.</h1>`);
//     i++;
// }




// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// Масив:


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)
