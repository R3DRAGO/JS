// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
//
function hideElement() {
    let element = document.getElementById("text");

    if (element) {
        element.style.display = "none";
    }
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function checkAge() {
    let ageInput = document.getElementById("ageInput");
    let age = parseInt(ageInput.value);

    if (!isNaN(age) && age < 18) {
        alert("Немає 18 років");
    } else {
        alert("OK");
    }
}