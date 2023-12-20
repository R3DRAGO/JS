<!-- - створити блок,-->
<!-- - додати йому класи wrap, collapse, alpha, beta-->
<!-- - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту-->
<!-- - додати цей блок в body.-->
<!-- - клонувати його повністю, та додати клон в body.-->

let block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

block.style.background = 'blue';
block.style.color = 'red';
block.style.fontSize = '15px';
block.innerText = 'Bla bla';
document.body.appendChild(block);
let blockClone = block.cloneNode(true);
blockClone.style.background = 'yellow';
document.body.appendChild(blockClone);


// ====================================================================================================

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
let arr = ['Main', 'Products', 'About us', 'Contacts'];

let ulElement = document.createElement('ul');

arr.forEach(function (item) {
    let liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);

// ====================================================================================================

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `TITTLE: ${course.title} | DURATION: ${course.monthDuration}`;
    document.body.appendChild(div);
}



