let carres = document.querySelectorAll('.carre');
let rejouer = document.getElementById('rejouer');
let titre = document.getElementById('titre');
let animation = null;

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
            titre.textContent = 'Les croix ont gagnées';
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
            titre.textContent = 'Les ronds ont gagnées';
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

    } else if (caseJouees.length === 8) {
        titre.textContent = 'Égalité';
    }
}

carres.forEach(carre => {
    carre.addEventListener('click', () => {

        let caseJouees = document.querySelectorAll("[data-click]");

        if (caseJouees.length % 2 === 0) {
            carre.style.backgroundPosition = 'center';
            carre.dataset.click = 0;
            carre.style.pointerEvents = "none";
        }
        else {
            carre.style.backgroundPosition = 'right';
            carre.dataset.click = 1;
            carre.style.pointerEvents = "none";
        }

        verif(caseJouees);
    })
});

rejouer.addEventListener('click', () => {
    titre.textContent = 'Super Morpion';
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