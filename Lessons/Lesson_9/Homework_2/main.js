// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    h1.innerText = course.title;
    p.innerText = course.monthDuration;

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    div.append(h1, p);
    document.body.appendChild(div);
}

