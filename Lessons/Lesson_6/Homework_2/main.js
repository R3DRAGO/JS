// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// ====================================================================================================

// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((courses1, courses2) => {
    return courses2.monthDuration - courses1.monthDuration
})
console.log(sort)

// ====================================================================================================

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(function (item) {
    return item.monthDuration > 5;
});

console.log(filter)

// ====================================================================================================

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

coursesAndDurationArray.map((value, index) => {
    let newCourse = {
        id: index,
        title: value.title,
        monthDuration: value.monthDuration,
    }
    console.log(newCourse)
});


// ====================================================================================================

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];
// ====================================================================================================

// - знайти піковий туз
let piqueAce = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace')[0];
console.log(piqueAce);
// ====================================================================================================

// - всі шістки
let sixes = cards.filter(card => card.value === '6');
console.log(sixes);
// ====================================================================================================

// - всі червоні карти
let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);
// ====================================================================================================

// - всі буби
let diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);
// ====================================================================================================

// - всі трефи від 9 та більше
let highValueClubs = cards.filter(card => card.cardSuit === 'clubs' && (
    card.value === '9' || card.value === '10'
    || card.value === 'jack' || card.value === 'queen'
    || card.value === 'king' || card.value === 'ace'));
console.log(highValueClubs);


// ====================================================================================================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let groupedBySuits = cards.reduce((accumulator, card) => {
//     accumulator[card.cardSuit].push(card);
//     return accumulator;
// }, { spade: [], diamond: [], heart: [], clubs: [] });
//
// console.log(groupedBySuits);

