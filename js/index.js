document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("search-active");
    });
});






