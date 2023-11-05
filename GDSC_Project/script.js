var xlogo = document.querySelector('#X-logo');
var instalogo = document.querySelector('#instalogo');

function xlogohover() {
    xlogo.addEventListener('mouseover', function () {
        xlogo.src = 'Xlogo-hover.png'
        xlogo.style.cursor = 'pointer'
    })
    xlogo.addEventListener('mouseout', function () {
        xlogo.src = 'X-logo.png';
    })
}

xlogohover();

function instalogohover() {
    instalogo.addEventListener('mouseover', function () {
        instalogo.src = 'instalogo-hover.png'
        instalogo.style.cursor = 'pointer'
    })
    instalogo.addEventListener('mouseout', function () {
        instalogo.src = 'insta-logo.png'
    })
}

instalogohover();

var tagline = document.querySelector('#tagline');
var alttagline = document.querySelector('#alttagline');
var getclubhouse2 = document.getElementById('getclubhouse2');

window.onscroll = function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 450) {
            tagline.style.opacity = '0';
            tagline.style.top = '-100px';
            setTimeout(function () {
                alttagline.style.opacity = '1';
                alttagline.style.top = '0';
                getclubhouse2.style.opacity = '1';
            }, 2000);
            getclubhouse2.style.backgroundColor = 'white';
            getclubhouse2.style.color = 'black';
        }
        else {
            getclubhouse2.style.backgroundColor = 'black';
            getclubhouse2.style.color = 'white';
        }

        getclubhouse2.addEventListener('mouseover', function () {
            if (scrollY > 300) {
                getclubhouse2.style.backgroundColor = 'black';
                getclubhouse2.style.color = 'white';
            }
            else {
                getclubhouse2.style.backgroundColor = 'white';
                getclubhouse2.style.color = 'black';
            }
        })

        getclubhouse2.addEventListener('mouseout', function () {
            if (scrollY > 300) {
                getclubhouse2.style.backgroundColor = 'white'
                getclubhouse2.style.color = 'black'
            }
            else{
                getclubhouse2.style.backgroundColor = 'black';
                getclubhouse2.style.color = 'white';
            }
        })
    })
}
