var blocAdd = document.querySelector('.blocTotal');

window.addEventListener('scroll', animate);  // Appel de la fonction 1

// document.querySelector('body').onscroll = animate; // Appel de la fonction 2

function animate(){
    if (window.scrollY > 600) { // Valeur de la hauteur en px
        blocAdd.classList.add('blocAppear');     // 1ère façon de faire
    }
    else {
        blocAdd.classList.remove('blocAppear');
    }
}