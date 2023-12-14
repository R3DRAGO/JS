// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, maker, grad_year, max_speed, engine_cap) {
    this.model = model;
    this.grad_year = grad_year;
    this.max_speed = max_speed;
    this.engine_cap = engine_cap;
    this.driver = null;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${max_speed} кілометрів на годину`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`
        Модель - ${model} 
        Виробник - ${maker}
        Рік випуску - ${grad_year}
        Максимальна швидкість - ${max_speed} км/год
        Об'єм двигуна - ${engine_cap} літри
        `)
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість піднята на ${newSpeed} км/год`)
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        this.grad_year += newValue;
        console.log(`Рік випуску змінено на ${newValue} рік`)
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Додано водія: ${driver.name}`)
    }
}

let car = new Car('BMW', 'Germany', '2005', '250', 2.0);

car.drive();
car.info();
car.increaseMaxSpeed(20)
car.changeYear(2010)
car.addDriver({name: 'Avatar', age: 18})




