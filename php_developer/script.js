function toggleChildren(button) {
    const ul = button.nextElementSibling;
    if (ul) {
        ul.style.display = ul.style.display === 'none' || !ul.style.display ? 'block' : 'none';
    }
}

// Initialize all child lists to be hidden
document.querySelectorAll('.tree ul').forEach(ul => ul.style.display = 'none');

// copy button in the code container
function copyCode() {
    var code = document.getElementById("code-block").innerText;
    navigator.clipboard.writeText(code).then(() => {
        
    }).catch(err => {
        console.error("Error copying code: ", err);
    });
}