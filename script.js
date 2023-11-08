// Add this to your script.js file

const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
    menuOptions.style.display = (menuOptions.style.display === 'none' || menuOptions.style.display === '') ? 'block' : 'none';
});

// Close the menu if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (!menuOptions.contains(event.target) && event.target !== menuButton) {
        menuOptions.style.display = 'none';
    }
});


  // Add event listener for keyboard arrow keys
  document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the down arrow key
    if (event.key === 'ArrowDown') {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
    // Check if the pressed key is the up arrow key
    else if (event.key === 'ArrowUp') {
        // Scroll to the previous section smoothly
        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    }
});
