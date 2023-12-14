// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let cinderellasArray = [
    new Cinderella("Cindy1", 20, 36),
    new Cinderella("Cindy2", 22, 37),
    new Cinderella("Cindy3", 25, 38),
    new Cinderella("Cindy4", 18, 36),
    new Cinderella("Cindy5", 28, 39),
    new Cinderella("Cindy6", 23, 37),
    new Cinderella("Cindy7", 21, 38),
    new Cinderella("Cindy8", 26, 40),
    new Cinderella("Cindy9", 19, 36),
    new Cinderella("Cindy10", 24, 39)
];

let princeCharming = new Prince("Prince Charming", 30, 38);


for (let i = 0; i < cinderellasArray.length; i++) {
    let chosenCinderella;
    if (cinderellasArray[i].shoeSize === princeCharming.foundShoe) {
        chosenCinderella = cinderellasArray[i];
        console.log(`Принц ${princeCharming.name} вибрав попелюшку ${chosenCinderella.name}`);
    }



    let chosenCinderellaFind = cinderellasArray.find(function (cinderella) {
        return cinderella.shoeSize === princeCharming.foundShoe;
    });

    console.log(`Принц ${princeCharming.name} вибрав попелюшку ${chosenCinderellaFind.name}`);
}
