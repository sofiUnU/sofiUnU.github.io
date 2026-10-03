const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musicaNoMeEnojo = new Audio('Ya no me enojo.mp3');
const musicaMeGustasTu = new Audio('Me gustas tu.mp3');

// Si acepta: 
btnSi.addEventListener('click', ()=>{
    randomPic.src = '0.jpg';
    question.innerText = ' Te amo sofi !!! :3 ';
    question.classList.add('question-style');

    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musicaMeGustasTu.play();
});

// Lógica: 
let contador = 0;

btnNo.addEventListener('click', ()=>{
    switch (contador) {
        case 0:
            btnNo.innerText = 'Segura?';
            btnSi.classList.add('estilo-1');
            randomPic.src = '2.jpg'
            break;
        case 1:
            btnNo.innerText = 'Segurísima?';
            btnSi.classList.add('estilo-2');
            randomPic.src = '3.jpg'
            break;
        case 2:
            btnNo.innerText = 'Apoco si :( ?';
            btnSi.classList.add('estilo-3');
            randomPic.src = '4.jpg'
            break;
        case 3:
            btnNo.innerText = 'Ni modo...';
            btnSi.classList.add('estilo-4');
            randomPic.src = '5.jpg'
            break;
        case 4:
            btnNo.innerText = 'Duren... ';
            btnSi.classList.add('estilo-5');
            randomPic.src = '6.jpg'
            // Agregar reproducción de la canción
            if (randomPic.src.includes('6.jpg')) {
                musicaNoMeEnojo.play();
            }
            break;
    }
    contador++;
});

