// Toggle between mobile and email input modes
(function() {
    const toggle = document.getElementById('toggleLink');
    const heading = document.getElementById('heading');
    const sub = document.getElementById('subheading');
    const input = document.getElementById('mainInput');

    let mode = 'mobile'; // default mode

    function updateUI() {
        if (mode === 'mobile') {
            heading.textContent = 'Find your account';
            sub.textContent = 'Enter your mobile number.';
            input.placeholder = 'Mobile number';
            input.type = 'tel';
            input.inputMode = 'numeric';
            toggle.textContent = 'Search by email address';
            toggle.setAttribute('aria-pressed', 'false');
        } else {
            heading.textContent = 'Find your account';
            sub.textContent = 'Enter your email address.';
            input.placeholder = 'Email address';
            input.type = 'email';
            input.removeAttribute('inputmode');
            toggle.textContent = 'Search by mobile number';
            toggle.setAttribute('aria-pressed', 'true');
        }
    }

    // Toggle when clicked
    toggle.addEventListener('click', function() {
        mode = mode === 'mobile' ? 'email' : 'mobile';
        updateUI();
    });

    // Toggle on keyboard: Enter or Space
    toggle.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle.click();
        }
    });

    // Initialize the UI
    updateUI();
})();