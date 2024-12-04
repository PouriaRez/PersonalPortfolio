let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar a'); // Select all navbar links

//Open the burger menu to show the nav bar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x') //Display an X to close navbar
    navbar.classList.toggle('active') // Activate the navbar.
}

// Close the navbar when any link inside the navbar is clicked
navbarLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active'); // Close the navbar
        menuIcon.classList.remove('bx-x'); // Optionally reset the menu icon
    }
});

//handling clicks on project cards
let projectBtn = document.querySelectorAll('project-btn');

projectBtn.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url'); // Get URL from data attribute
        window.open(url, '_blank') //opens in new tab
    });
});

//handling on click for contact me button. 
let contactBtn = document.querySelector('#contact-me-btn');
//when clicked, go to user's mail app.
contactBtn.addEventListener('click', () => { 
   window.location.href = 'mailto:rezaeizadehpouria@gmail.com';
});