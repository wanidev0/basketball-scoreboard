// Get elements from document
const btnsScore = document.querySelectorAll('.btn-score');
const home = document.querySelector('.home');
const homeScore = document.querySelectorAll('.score')[0];
const guestScore = document.querySelectorAll('.score')[1];

// Score Buttons Logic
const scores = [1, 2, 3];

btnsScore.forEach((button) => {
    button.addEventListener('click', () => {
        for (const score of scores) {
            if (button.textContent.includes(score)) {
                if (home.contains(button)) {
                    homeScore.textContent = Math.min(99, Number(homeScore.textContent) + score);
                }
                else {
                    guestScore.textContent = Math.min(99, Number(guestScore.textContent) + score);
                }
            }
        }

        // Highlights the one with more score
        let winning = Math.max(homeScore.textContent, guestScore.textContent) 

        if (homeScore.textContent == guestScore.textContent) {
            homeScore.classList.remove('highlight')
            guestScore.classList.remove('highlight')  
        }
        else if (winning == homeScore.textContent) {
            homeScore.classList.add('highlight')
            guestScore.classList.remove('highlight')
        }
        else {
            homeScore.classList.remove('highlight')
            guestScore.classList.add('highlight')
        }
    });
});

// 'New Game Button Logic
const btnNG = document.querySelector('.btn-ng');

btnNG.addEventListener('click', () => {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeScore.classList.remove('highlight')
    guestScore.classList.remove('highlight')
});