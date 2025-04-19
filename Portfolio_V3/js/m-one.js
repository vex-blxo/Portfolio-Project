document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll('.edit_button');
    const portfolios = document.querySelectorAll('.portfolio');

    const queryParams = new URLSearchParams(window.location.search);
    const member = queryParams.get("member");
    const isViewOnly = queryParams.get("view") === "1";

    // Hide all portfolios first
    portfolios.forEach(portfolio => portfolio.style.display = "none");

    // Show the selected member's portfolio
    if (member) {
        const target = document.getElementById("portfolio" + member);
        if (target) {
            target.style.display = "block";

            if (!isViewOnly) {
                // Edit mode from admin
                enableEditMode("portfolio" + member);
            } else {
                // View-only mode: hide all edit buttons
                const editBtn = target.querySelector(".edit-button");
                if (editBtn) {
                    editBtn.style.display = "none";
                }
            }
        }
    }

    // Optional: For admin view, also attach click listeners to internal edit buttons
    if (!isViewOnly) {
        editButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                portfolios.forEach(port => port.style.display = 'none');

                const selected = document.getElementById('portfolio' + (index + 1));
                selected.style.display = 'block';
                enableEditMode('portfolio' + (index + 1));
            });
        });
    }

    // Load stored data
    loadDataFromLocalStorage();
});

// Function to enable edit mode for bio and career goals
function enableEditMode(profileId) {
    const bioText = document.querySelector(`#${profileId} .bio-text`);
    const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

    const bioInput = document.querySelector(`#${profileId} .bio-input`);
    const careerGoalInput = document.querySelector(`#${profileId} .career-goal-input`);

    bioText.style.display = 'none';
    careerGoalText.style.display = 'none';
    bioInput.style.display = 'block';
    careerGoalInput.style.display = 'block';

    bioInput.value = localStorage.getItem(profileId + '_bio') || bioText.textContent.trim();
    careerGoalInput.value = localStorage.getItem(profileId + '_careerGoal') || careerGoalText.textContent.trim();

    const editButton = document.querySelector(`#${profileId} .edit-button`);
    editButton.textContent = 'Save Changes';
    editButton.setAttribute('onclick', `saveChanges('${profileId}')`);
}

// Function to save the changes after editing
function saveChanges(profileId) {
    const bioInput = document.querySelector(`#${profileId} .bio-input`);
    const careerGoalInput = document.querySelector(`#${profileId} .career-goal-input`);

    const bioText = document.querySelector(`#${profileId} .bio-text`);
    const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

    localStorage.setItem(profileId + '_bio', bioInput.value);
    localStorage.setItem(profileId + '_careerGoal', careerGoalInput.value);

    bioText.textContent = bioInput.value;
    careerGoalText.textContent = careerGoalInput.value;

    bioText.style.display = 'block';
    careerGoalText.style.display = 'block';
    bioInput.style.display = 'none';
    careerGoalInput.style.display = 'none';

    const editButton = document.querySelector(`#${profileId} .edit-button`);
    editButton.textContent = 'Edit';
    editButton.setAttribute('onclick', `enableEditMode('${profileId}')`);
}

// Load data from localStorage and update the text content
function loadDataFromLocalStorage() {
    const profileIds = ['portfolio1', 'portfolio2', 'portfolio3', 'portfolio4', 'portfolio5', 'portfolio6'];

    profileIds.forEach(profileId => {
        const bioText = document.querySelector(`#${profileId} .bio-text`);
        const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

        if (localStorage.getItem(profileId + '_bio')) {
            bioText.textContent = localStorage.getItem(profileId + '_bio');
        }
        if (localStorage.getItem(profileId + '_careerGoal')) {
            careerGoalText.textContent = localStorage.getItem(profileId + '_careerGoal');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll('.edit_button');
    const portfolios = document.querySelectorAll('.portfolio');

    const queryParams = new URLSearchParams(window.location.search);
    const member = queryParams.get("member");
    const isViewOnly = queryParams.get("view") === "1";

    // Hide all portfolios first
    portfolios.forEach(portfolio => portfolio.style.display = "none");

    // Show the selected member's portfolio
    if (member) {
        const target = document.getElementById("portfolio" + member);
        if (target) {
            target.style.display = "block";

            if (!isViewOnly) {
                // Edit mode from admin
                enableEditMode("portfolio" + member);
            } else {
                // View-only mode: hide all edit buttons
                const editBtn = target.querySelector(".edit-button");
                if (editBtn) {
                    editBtn.style.display = "none";
                }
            }
        }
    }

    // Optional: For admin view, also attach click listeners to internal edit buttons
    if (!isViewOnly) {
        editButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                portfolios.forEach(port => port.style.display = 'none');

                const selected = document.getElementById('portfolio' + (index + 1));
                selected.style.display = 'block';
                enableEditMode('portfolio' + (index + 1));
            });
        });
    }

    // Load stored data
    loadDataFromLocalStorage();
});

// Function to enable edit mode for bio and career goals
function enableEditMode(profileId) {
    const bioText = document.querySelector(`#${profileId} .bio-text`);
    const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

    const bioInput = document.querySelector(`#${profileId} .bio-input`);
    const careerGoalInput = document.querySelector(`#${profileId} .career-goal-input`);

    bioText.style.display = 'none';
    careerGoalText.style.display = 'none';
    bioInput.style.display = 'block';
    careerGoalInput.style.display = 'block';

    bioInput.value = localStorage.getItem(profileId + '_bio') || bioText.textContent.trim();
    careerGoalInput.value = localStorage.getItem(profileId + '_careerGoal') || careerGoalText.textContent.trim();

    const editButton = document.querySelector(`#${profileId} .edit-button`);
    editButton.textContent = 'Save Changes';
    editButton.setAttribute('onclick', `saveChanges('${profileId}')`);
}

// Function to save the changes after editing
function saveChanges(profileId) {
    const bioInput = document.querySelector(`#${profileId} .bio-input`);
    const careerGoalInput = document.querySelector(`#${profileId} .career-goal-input`);

    const bioText = document.querySelector(`#${profileId} .bio-text`);
    const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

    localStorage.setItem(profileId + '_bio', bioInput.value);
    localStorage.setItem(profileId + '_careerGoal', careerGoalInput.value);

    bioText.textContent = bioInput.value;
    careerGoalText.textContent = careerGoalInput.value;

    bioText.style.display = 'block';
    careerGoalText.style.display = 'block';
    bioInput.style.display = 'none';
    careerGoalInput.style.display = 'none';

    const editButton = document.querySelector(`#${profileId} .edit-button`);
    editButton.textContent = 'Edit';
    editButton.setAttribute('onclick', `enableEditMode('${profileId}')`);
}

// Load data from localStorage and update the text content
function loadDataFromLocalStorage() {
    const profileIds = ['portfolio1', 'portfolio2', 'portfolio3', 'portfolio4', 'portfolio5', 'portfolio6'];

    profileIds.forEach(profileId => {
        const bioText = document.querySelector(`#${profileId} .bio-text`);
        const careerGoalText = document.querySelector(`#${profileId} .career-goal-text`);

        if (localStorage.getItem(profileId + '_bio')) {
            bioText.textContent = localStorage.getItem(profileId + '_bio');
        }
        if (localStorage.getItem(profileId + '_careerGoal')) {
            careerGoalText.textContent = localStorage.getItem(profileId + '_careerGoal');
        }
    });
}