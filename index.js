function getContactColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("contact-link").style.borderColor = color;
}

function getFaqColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("faq-link").style.borderColor = color;
}

function getAboutColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("about-link").style.borderColor = color;
}

function resetColor() {
    document.getElementById("contact-link").style.borderColor = "white";
    document.getElementById("faq-link").style.borderColor = "white";
    document.getElementById("about-link").style.borderColor = "white";
}