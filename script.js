document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();
        const targetPageId = card.getAttribute('data-target');

        // Move cards to the left and change their dimensions
        document.querySelectorAll('.card').forEach((c, index) => {
            c.classList.remove('enlarged', 'revert');
            c.style.transform = `translateX(${index * -30}%)`;
            c.style.left = '10%';
            c.style.width = '300px';  // Change width
        });

        // Enlarge the clicked card
        card.classList.add('enlarged');

        // Show target page content
        document.querySelectorAll('.page').forEach(page => page.classList.remove('display'));
        document.getElementById(targetPageId).classList.add('display');
        document.getElementById('home-page').style.width = '50%';
    });
});

// Add event listener to the entire document to go back to the homepage
document.addEventListener('click', (event) => {
    const enlargedCard = document.querySelector('.card.enlarged');
    const homePage = document.getElementById('home-page');

    // Check if the click is outside of any card and within the homepage section
    if (enlargedCard && !enlargedCard.contains(event.target) && homePage.contains(event.target)) {
        goHome();
    }
}, true);

function goHome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('display'));
    document.getElementById('home-page').classList.add('display');

    // Reset card positions and dimensions
    document.querySelectorAll('.card').forEach(c => {
        c.style.transform = 'translateX(0)';
        c.style.left = '0%';
        c.style.width = '25%';  // Original width
    });

    document.getElementById('home-page').style.width = '100%';
}
