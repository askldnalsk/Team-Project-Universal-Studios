const $header = document.querySelector('header')
const $menu_bar =document.querySelectorAll('.menu_bar')
const $search_icon_gray=document.querySelector('.search_icon_gray')
const $search_icon_white=document.querySelector('.search_icon_white')
const $ticket_icon_white=document.querySelector('.ticket_icon_white')
const $ticket_icon_gray=document.querySelector('.ticket_icon_gray')
const $user_icon_white=document.querySelector('.user_icon_white')
const $user_icon_gray=document.querySelector('.user_icon_gray')
const $logo_white=document.querySelector('.logo_white')
const $logo_gray=document.querySelector('.logo_gray')
const $ticket__img=document.querySelector('.ticket__img')

window.addEventListener('scroll', (e) => { 
    // console.log(window.scrollY);
    $menu_bar.forEach(item=>{
      if(window.screenY<50){
        $ticket__img.style.display='flex'
      }
      // 검정
      if (window.scrollY>890) {
        item.classList.add('csh__black')
        $search_icon_gray.style.display='inline-block'
        $search_icon_white.style.display='none'
        $ticket_icon_gray.style.display='inline-block'
        $ticket_icon_white.style.display='none'
        $user_icon_gray.style.display='inline-block'
        $user_icon_white.style.display='none'
        $logo_gray.style.display='inline-block'
        $logo_white.style.display='none'
      }
      // 흰색
      if (window.scrollY<890) {
        item.classList.remove('csh__black')
        $search_icon_gray.style.display='none'
        $search_icon_white.style.display='inline-block'
        $ticket_icon_gray.style.display='none'
        $ticket_icon_white.style.display='inline-block'
        $user_icon_gray.style.display='none'
        $user_icon_white.style.display='inline-block'
        $logo_gray.style.display='none'
        $logo_white.style.display='inline-block'
      }
    })
  });