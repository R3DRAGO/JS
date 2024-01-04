// Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push({ date: currentDate.toString() });
    localStorage.setItem('sessions', JSON.stringify(sessions));
});