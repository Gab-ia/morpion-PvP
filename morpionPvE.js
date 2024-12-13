const carres = document.querySelectorAll('.carre');
const rejouer = document.getElementById('rejouer');
const titre = document.getElementById('titre');

function verif(caseJouees) {
    const cells = {};
    ['a', 'b', 'c'].forEach(row => {
        for (let col = 1; col <= 3; col++) {
            cells[`${row}${col}`] = document.getElementById(`${row}${col}`);
        }
    });
    if (Number(a1.dataset.click) === Number(a2.dataset.click) && Number(a2.dataset.click) === Number(a3.dataset.click) && Number(a3.dataset.click) === 0 ||
        Number(b1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(b3.dataset.click) && Number(b3.dataset.click) === 0 ||
        Number(c1.dataset.click) === Number(c2.dataset.click) && Number(c2.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 0 ||
        Number(a1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 0 ||
        Number(c1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(a3.dataset.click) && Number(a3.dataset.click) === 0 ||
        Number(a1.dataset.click) === Number(b1.dataset.click) && Number(b1.dataset.click) === Number(c1.dataset.click) && Number(c1.dataset.click) === 0 ||
        Number(a2.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c2.dataset.click) && Number(c2.dataset.click) === 0 ||
        Number(a3.dataset.click) === Number(b3.dataset.click) && Number(b3.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 0) {

        setTimeout(() => {
            titre.textContent = 'Victoire !';
            animation = lottie.loadAnimation({
                container: document.getElementById('animation'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'victory.json'
            });
        }, 500);
        carres.forEach(carre => {
            carre.style.pointerEvents = 'none';
        })

    } else if (Number(a1.dataset.click) === Number(a2.dataset.click) && Number(a2.dataset.click) === Number(a3.dataset.click) && Number(a3.dataset.click) === 1 ||
        Number(b1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(b3.dataset.click) && Number(b3.dataset.click) === 1 ||
        Number(c1.dataset.click) === Number(c2.dataset.click) && Number(c2.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 1 ||
        Number(a1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 1 ||
        Number(c1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(a3.dataset.click) && Number(a3.dataset.click) === 1 ||
        Number(a1.dataset.click) === Number(b1.dataset.click) && Number(b1.dataset.click) === Number(c1.dataset.click) && Number(c1.dataset.click) === 1 ||
        Number(a2.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c2.dataset.click) && Number(c2.dataset.click) === 1 ||
        Number(a3.dataset.click) === Number(b3.dataset.click) && Number(b3.dataset.click) === Number(c3.dataset.click) && Number(c3.dataset.click) === 1) {

        setTimeout(() => {
            titre.textContent = 'Défaite ...';
        }, 500);

        carres.forEach(carre => {
            carre.style.pointerEvents = 'none';
        })

    } else if (caseJouees.length === 8) {
        titre.textContent = 'Égalité !';
    }
}
function ordinateur() {
    if (Number(a1.dataset.click) === Number(a2.dataset.click) && Number(a2.dataset.click) === Number(a3.dataset.click) ||
        Number(b1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(b3.dataset.click) ||
        Number(c1.dataset.click) === Number(c2.dataset.click) && Number(c2.dataset.click) === Number(c3.dataset.click) ||
        Number(a1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c3.dataset.click) ||
        Number(c1.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(a3.dataset.click) ||
        Number(a1.dataset.click) === Number(b1.dataset.click) && Number(b1.dataset.click) === Number(c1.dataset.click) ||
        Number(a2.dataset.click) === Number(b2.dataset.click) && Number(b2.dataset.click) === Number(c2.dataset.click) ||
        Number(a3.dataset.click) === Number(b3.dataset.click) && Number(b3.dataset.click) === Number(c3.dataset.click)) { } else {
        const carreLibre = document.querySelectorAll(".carre:not([data-click])");
        const choice = Math.floor(Math.random() * carreLibre.length);
        const carreChoisi = carreLibre[choice];
        carreChoisi.style.backgroundPosition = 'right';
        carreChoisi.dataset.click = 1;
        carreChoisi.style.pointerEvents = "none";
    }
}
carres.forEach(carre => {
    carre.addEventListener('click', () => {
        const caseJouees = document.querySelectorAll("[data-click]");
        carre.style.backgroundPosition = 'center';
        carre.dataset.click = 0;
        carre.style.pointerEvents = "none";
        setTimeout(() => {
            ordinateur()
        }, 500);
        setTimeout(() => {
            verif(caseJouees);
        }, 500);
    })
});
rejouer.addEventListener('click', () => {
    titre.textContent = 'Super Morpion Solo';
    carres.forEach(carre => {
        carre.style.backgroundPosition = 'left';
        delete carre.dataset.click;
        carre.style.pointerEvents = 'auto';
    });

    if (animation) {
        animation.stop();
        animation.destroy();
        animation = null;
    }
});