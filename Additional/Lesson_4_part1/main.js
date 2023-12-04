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

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5, index: 0},
    {title: 'Java Complex', monthDuration: 6, index: 1},
    {title: 'Python Complex', monthDuration: 6, index: 2},
    {title: 'QA Complex', monthDuration: 4, index: 3},
    {title: 'FullStack', monthDuration: 7, index: 4},
    {title: 'Frontend', monthDuration: 4, index: 5}
];

function courses(array) {
    for (const item of array) {
        // console.log(item)
        createHr('blue')
        for (const itemKey in item) {
            // console.log(itemKey)
            document.write(`<div>
                <h2 style="color: #1010e1">${itemKey}:
                <span style="color: #267726">${item[itemKey]}</span>
                </h2>
                </div>`)
        }
    }
}

courses(coursesAndDurationArray);
courses(coursesArray);

function createHr(color) {
    document.write(`<hr style="border: 2px solid ${color}">`);
}