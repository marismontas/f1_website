/* TOGGLE BETWEEN PAGES */
function openLoginPage() {
    window.location.href = "login.html";
}

function openHomePage() {
    window.location.href = "home.html";
}
/* ----------------------------------------------------------------- */

/*  FUCTION TO SWITCH BETWEEN LOG IN AND REGISTER */
function register() {
    document.getElementById('login').style.left = '-520px';
    document.getElementById('register').style.left = '4px';
}


function login() {
    document.getElementById('login').style.left = '4px';
    document.getElementById('register').style.left = '-520px';
}
/* ----------------------------------------------------------------- */
