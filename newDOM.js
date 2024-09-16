// Change the text content of the <h1> element
document.getElementById('main-heading').textContent = 'JavaScript DOM Practice Updated';

// Add an event listener to the button
document.getElementById('change-text').addEventListener('click', function() {
    document.getElementById('main-heading').textContent = 'Text Changed by Button';
});

// Access and modify the input value
document.getElementById('text-input').value = 'New input value';

// Add a class to the paragraph
document.querySelector('.description').classList.add('highlight');

// Remove a class from the paragraph
document.querySelector('.description').classList.remove('highlight');

// Change text of the list items
const items = document.getElementsByClassName('item');
for (let item of items) {
    item.textContent = 'Updated Item';
}
