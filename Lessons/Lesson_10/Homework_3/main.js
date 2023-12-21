// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let data = Array.from({ length: 100 }, (_, index) => index + 1);

let itemsPerPage = 10;

let currentPage = 1;

function displayItems() {
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let currentItems = data.slice(startIndex, endIndex);

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = currentItems.join("<br>");
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems();
    }
}

function nextPage() {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
        currentPage++;
        displayItems();
    }
}

displayItems();
















//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача


