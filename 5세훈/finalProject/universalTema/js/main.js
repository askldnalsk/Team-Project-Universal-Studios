'use strict';
const temaImageCircle = document.querySelector('.tema__img_Circle');
// 스크롤 이벤트
window.addEventListener('scroll',e=>{ 
    if(scrollY > 800){ 
        temaImageCircle.classList.add('animate__animated');
        temaImageCircle.classList.add('animate__zoomInLeft');
    }
    else{ 
        temaImageCircle.classList.remove('animate__animated');
        temaImageCircle.classList.remove('animate__zoomInLeft');
    }
})