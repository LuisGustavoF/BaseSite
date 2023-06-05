document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.querySelector(".login-btn");
    var signupBtn = document.querySelector(".signup-btn");
    var sidebar = document.querySelector(".sidebar");
    var closeBtn = document.querySelector(".close-btn");

    loginBtn.addEventListener("click", function() {
        sidebar.classList.add("open");
    });

    signupBtn.addEventListener("click", function() {
        sidebar.classList.add("open");
    });

    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("open");
    });
});