function toggleChildren(button) {
    const ul = button.nextElementSibling;
    if (ul) {
        ul.style.display = ul.style.display === 'none' || !ul.style.display ? 'block' : 'none';
    }
}

// Initialize all child lists to be hidden
document.querySelectorAll('.tree ul').forEach(ul => ul.style.display = 'none');
