// Отримуємо id користувача з параметрів URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

async function getUserDetails() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userDetails = await response.json();
        return userDetails;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}
async function renderUserDetails() {
    const userDetailsElement = document.getElementById('userDetails');
    const userDetails = await getUserDetails();
    for (const [key, value] of Object.entries(userDetails)) {
        const detailItem = document.createElement('p');
        detailItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        userDetailsElement.appendChild(detailItem);
    }
}
window.onload = renderUserDetails;