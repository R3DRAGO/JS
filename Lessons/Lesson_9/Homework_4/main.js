// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {
    let block = document.createElement('div');
    let title = document.createElement('h1');
    let durationBox = document.createElement('div');
    let monthDuration = document.createElement('div');
    let hourDuration = document.createElement('div');
    let modules = document.createElement('div');
    let ul = document.createElement('ul');

    title.innerText = course.title;
    monthDuration.innerText = course.monthDuration;
    hourDuration.innerText = course.hourDuration;

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.innerText = course.modules[i];
        div.classList.add('blue-box', 'margin');
        modules.appendChild(div);
    }

    for (let i = 3; i < course.modules.length; i++) {
        let li = document.createElement('li');
        li.innerText = course.modules[i];
        ul.appendChild(li);
    }

    block.classList.add('main');
    title.classList.add('blue-box', 'text-center');
    monthDuration.classList.add('blue-box', 'text-center', 'grow1');
    hourDuration.classList.add('blue-box', 'text-center', 'grow2');
    modules.classList.add('blue-box');
    durationBox.classList.add('flex');


    modules.appendChild(ul);
    durationBox.append(monthDuration, hourDuration)
    block.append(title, durationBox, modules);
    document.body.appendChild(block);
}
