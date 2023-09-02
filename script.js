document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    const links = document.querySelectorAll("nav ul li a, .botoes a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            loader.style.display = "flex";

            setTimeout(function() {
                window.location.href = link.href;
            }, 500); 
        });
    });
});


document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1);
});

document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1);
});

function changeFontSize(step) {
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
}