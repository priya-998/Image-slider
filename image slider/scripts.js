// Selecting the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Adding event listener for the 'Next' button
next.addEventListener('click', function() {
    let slide = document.querySelector('.slide'); // Select the slide container
    let items = document.querySelectorAll('.item'); // Get all items

    if (items.length > 1) {
        // Move the first item to the end of the slide
        slide.appendChild(items[0]);
    }
});

// Adding event listener for the 'Previous' button
prev.addEventListener('click', function() {
    let slide = document.querySelector('.slide'); // Select the slide container
    let items = document.querySelectorAll('.item'); // Get all items

    if (items.length > 1) {
        // Move the last item to the beginning of the slide
        slide.insertBefore(items[items.length - 1], items[0]);
    }
});
