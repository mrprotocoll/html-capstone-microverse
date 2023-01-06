// function to toggle navbar
const toggleNavbar = () => {
    document.querySelector('.navbar').classList.toggle('show');
};

// function to close modal when close button is clicked
const closeModal = () => {
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('#modal-section').innerHTML = '';
    });
};

// WINDOWS ON LOAD
window.addEventListener('load', () => {
    // toggle navbar on mobile
    document.querySelector('.bars').addEventListener('click', toggleNavbar);
})