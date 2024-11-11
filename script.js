function toggleChildren(element) {
    const treeChild = element.nextElementSibling;
    const icon = element.querySelector('i');

    if (treeChild.style.display === "block") {
        treeChild.style.display = "none";
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        treeChild.style.display = "block";
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
}

function scrollLeft() {
    const scrollContainer = document.querySelector('.scroll-topics');
    scrollContainer.scrollBy({
        left: -100,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const scrollContainer = document.querySelector('.scroll-topics');
    scrollContainer.scrollBy({
        left: 100,
        behavior: 'smooth'
    });
}

// target 
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('.scroll-topics a');
    externalLinks.forEach(link => {
        link.setAttribute('target', '');
    });
});

// search bar 
function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('searchList');
    const li = ul.getElementsByClassName('topic');

    for (let i = 0; i < li.length; i++) {
        const textValue = li[i].textContent || li[i].innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// go to top
function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
}