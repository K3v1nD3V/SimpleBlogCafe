const arrow = document.querySelector('#arrow');
const nav = document.querySelector('#nav_list');
let state = 0
arrow.addEventListener('click', () => {
    if (state) {
        arrow.style.transform = 'translateY(-100px) rotate(-45deg)';
        nav.style.transform = 'translateY(-100px)'
        state++
    }else{
        arrow.style.transform = 'translateY(0) rotate(135deg)';
        nav.style.transform = 'translateY(0)'
        state--
    }                                       
})

