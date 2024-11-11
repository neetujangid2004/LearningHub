function toggleChildren(button) {
    var ul = button.nextElementSibling;
    if (ul.style.display === "none" || ul.style.display === "") {
        ul.style.display = "block";
    } else {
        ul.style.display = "none";
    }
}
