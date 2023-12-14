
class Car {
    constructor(model, maker, grad_year, max_speed, engine_cap) {
        this.model = model;
        this.maker = maker
        this.grad_year = grad_year;
        this.max_speed = max_speed;
        this.engine_cap = engine_cap;
    }
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} кілометрів на годину`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`
        Модель - ${this.model} 
        Виробник - ${this.maker}
        Рік випуску - ${this.grad_year}
        Максимальна швидкість - ${this.max_speed} км/год
        Об'єм двигуна - ${this.engine_cap} літри
        `);
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість піднята на ${newSpeed} км/год`)
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue){
        this.grad_year += newValue;
        console.log(`Рік випуску змінено на ${newValue} рік`)
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
        console.log(`Додано водія: ${driver.name}`)
    }
}

let car = new Car('BMW', 'Italy', '2005', '250', 2.0);

car.drive();
car.info();
car.increaseMaxSpeed(20)
car.changeYear(2010)
car.addDriver({name: 'Avatar', age: 18})