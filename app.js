function myfunction(evt, menu) {
    let moon = document.querySelectorAll('.moon')
    let i;
    for(i = 0; i < moon.length; i++) {
        moon[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = 'flex';
    evt.currentTarget.className += ' active';
}

function myfunct(evt, menu) {
    let crew = document.querySelectorAll('.crew')
    let i;
    for(i = 0; i < crew.length; i++) {
        crew[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = 'block';
    evt.currentTarget.className += ' active';
}
function myfunc(evt, menu) {
    let made = document.querySelectorAll('.made')
    let i;
    for(i = 0; i < made.length; i++) {
        made[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = 'flex';
    evt.currentTarget.className += ' active';
}
function closeNav() {
    document.getElementById('myNav').style.width= '0%'
}
function openNav() {
    document.getElementById('myNav').style.width= '70%'
}