// I want to create a function that generates a header and a footer for every webpage. 

function generateHeadContent() {
    console.log("Test - Head Content")
}

function generateHeaderFooter() {
    console.log("Test - Header/Footer")
    homePage = document.body.appendChild(document.createElement("a"));
    homePage.href = "https://gertyboy.github.io/showcase/brew_engine/web/";
    homePage.innerHTML = "<div id='home_page' class='header'><h4>Home</h4></div>";
    brewPage = document.body.appendChild(document.createElement("a"));
    brewPage.href = "https://gertyboy.github.io/showcase/brew_engine/web/brew";
    brewPage.innerHTML = "<div id='brew_page' class='header'><h4>Brew</h4></div>";
    brewHistoryPage = document.body.appendChild(document.createElement("a"));
    brewHistoryPage.href = "https://gertyboy.github.io/showcase/brew_engine/web/brew_history";
    brewHistoryPage.innerHTML = "<div id='brew_history_page' class='header'><h4>Brew History</h4></div>";
    learnPage = document.body.appendChild(document.createElement("a"));
    learnPage.href = "https://gertyboy.github.io/showcase/brew_engine/web/learn";
    learnPage.innerHTML = "<div id='learn_page' class='header'><h4>Learn</h4></div>";
    contactPage = document.body.appendChild(document.createElement("a"));
    contactPage.href = "https://gertyboy.github.io/showcase/brew_engine/web/contact";
    contactPage.innerHTML = "<div id='contact_page' class='header'><h4>Contact</h4></div>";
    footer = document.body.appendChild(document.createElement("footer"));
    footer.innerHTML = "<p>© 2026s Brew Engine. MIT Copyright License</p>";
    console.log("Test - Header/Footer - Header and Footer - Check to see if header is on top adn footer is on bottom")
}

document.addEventListener("DOMContentLoaded", function () {
    generateHeadContent();
    generateHeaderFooter();
});

// This will help for DRY rules