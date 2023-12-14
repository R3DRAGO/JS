// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// ====================================================================================================

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr = []

for (let i = 1; i <= 10; i++) {
    let newUser = new User(i, "Name" + i, "Surname" + i, "email" + i +
        "@example.com", "123-456-789" + i);
    arr.push(newUser);
}

console.log(arr)
// ====================================================================================================

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterArr = arr.filter(function (user) {
    return user.id % 2 === 0;
})

console.log(filterArr)
// ====================================================================================================

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArr = arr.sort((a, b) => {
    return b.id - a.id;
})

console.log(sortArr)
// ====================================================================================================

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// ====================================================================================================

// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = [];

for (let i = 1; i <= 10; i++) {
    let newClient = new Client(i, "Name" + i, "Surname" + i, "email" + i + "@agg.com",
        "123-456-789" + i, ["Product" + i, "Product" + (i + 1)]);
    arrClient.push(newClient);
}

console.log(arrClient)
// ====================================================================================================

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = arrClient.sort((a, b) => {
    return a.order.length - b.order.length;
})

console.log(arrClient)
