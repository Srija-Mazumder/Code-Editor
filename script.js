function run() {
    let htmlCode = document.getElementById("HTML-CODE");
    let cssCode = document.getElementById("CSS-CODE");
    let jsCode = document.getElementById("JS-CODE");

    let output = document.getElementById("op");

    output.contentDocument.body.innerHTML = 
    htmlCode.value + "<style>" + cssCode.value + "</style>";
   
    output.contentWindow.eval(jsCode.value);
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('.nav ul');
    const themeToggle = document.querySelector('.theme-toggle i');
    const createAccountLink = document.getElementById('create-account-link');
    const createAccountLinkFooter = document.getElementById('create-account-link-footer');
    const accountSection = document.getElementById('account');
    const closeBtn = document.getElementById('close-btn');

    // Function to toggle the navigation menu
    function toggleMenu() {
        navUl.classList.toggle('active');
    }

    // Function to check viewport and hide/show hamburger menu accordingly
    function checkViewport() {
        if (window.innerWidth > 768) {
            menuIcon.style.display = 'none'; // Hide hamburger on larger screens
            navUl.classList.remove('active'); // Ensure menu is visible
        } else {
            menuIcon.style.display = 'block'; // Show hamburger on smaller screens
        }
    }

    // Initial check on page load
    checkViewport();

    // Check viewport size on window resize
    window.addEventListener('resize', checkViewport);

    // Event listeners
    menuIcon.addEventListener('click', toggleMenu);

    createAccountLink.addEventListener('click', function () {
        accountSection.style.display = 'flex';
    });

    createAccountLinkFooter.addEventListener('click', function () {
        accountSection.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        accountSection.style.display = 'none';
    });

    // Optional: Close the form when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === accountSection) {
            accountSection.style.display = 'none';
        }
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        // Change the icon from moon to sun or vice versa
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.classList.remove('bx-moon');
            themeToggle.classList.add('bx-sun');
        } else {
            themeToggle.classList.remove('bx-sun');
            themeToggle.classList.add('bx-moon');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const signInLink = document.getElementById('sign-in-link');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('sign-up-form');
    const accountSection = document.getElementById('account');
    const closeBtn = document.getElementById('close-btn');

    // Show the form on page load
    accountSection.style.display = 'flex';

    // Toggling forms between Sign In and Sign Up
    signInLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        accountSection.style.display = 'none';
    });

    // Optional: Close the form when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === accountSection) {
            accountSection.style.display = 'none';
        }
    });
});
