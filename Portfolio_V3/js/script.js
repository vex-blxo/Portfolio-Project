const meetTeamButton = document.getElementById('meet-team-button');
const heroSection = document.getElementById('hero');
const teamCardsSection = document.getElementById('team-cards');
const backButton = document.getElementById('back-button');

// Handle transition from hero to team section
meetTeamButton.addEventListener('click', () => {
    heroSection.style.opacity = 0;
    setTimeout(() => {
        heroSection.style.display = 'none';
        teamCardsSection.style.display = 'flex';
        backButton.classList.remove('hidden');
        teamCardsSection.style.opacity = 1;
    }, 500);
});

// Handle transition from team back to hero
backButton.addEventListener('click', () => {
    teamCardsSection.style.opacity = 0;
    setTimeout(() => {
        teamCardsSection.style.display = 'none';
        heroSection.style.display = 'flex';
        heroSection.style.flexDirection = 'column';
        heroSection.style.justifyContent = 'center';
        heroSection.style.alignItems = 'center';
        heroSection.style.opacity = 1;
    }, 500);
});
