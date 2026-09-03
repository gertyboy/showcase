// I want to create a function that generates a header and a footer for every webpage. 

function generateHeaderFooter() {
    console.log("Test - Header/Footer")
    homePage = document.body.appendChild(document.createElement("a"));
    homePage.href = "../index.html";
    homePage.innerHTML = "<div id='home_page' class='header'><h4>Home</h4></div>";
    console.log("Test - Header/Footer - Home Page")
}

document.addEventListener("DOMContentLoaded", function () {
    generateHeaderFooter();
});

// This will help for DRY rules