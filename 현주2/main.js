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


const $full2 = document.querySelector('.full2');
const full2TopY = $full2.offsetTop;

console.log(full2TopY);

const $body = document.querySelector("body")

//이용권티켓 스크롤하기
const box= document.querySelector('.box111');


let deltaY = 0
window.addEventListener("wheel", function(e){
  if(!deltaY){
      wheelTimer = setTimeout(function() {
        deltaY ++
        $body.classList.remove("stop-scrolling")
        // console.log(deltaY);
        return
    }, 50);
  }
  // console.log(Num);
  // console.log(e.clientX, e.clientY);
  let XX = 0
  let YY = -380
  box.style.transform = 'translate(' +XX + 'px,' + YY + 'px)';
});


const interval = setInterval(function() {
  var now = new Date();   //현재시간
  var year = now.getFullYear();   //현재 연도
  var month = now.getMonth()+1;   //현재 달 
  if((month+"").length < 2){
      month="0"+month;
  }
  var date = now.getDate();      //현재 날짜.
  if((date+"").length < 2){
      date="0"+date;      
  }
  var hour = now.getHours();   //현재 시간.
  if((hour+"").length < 2){
  hour="0"+hour;      
  }
  var minutes=now.getMinutes(); //현재 분
  if((minutes+"").length < 2){
      minutes="0"+minutes;
  }
  var seconds=now.getSeconds(); //현재 초
  if((seconds+"").length < 2){
      seconds="0"+seconds;
  }
  const week = ['일', '월', '화', '수', '목', '금', '토']
  var day = week[now.getDay()]; //현재 요일
  

  //오늘 날짜 완성.
  document.getElementById("parade_now_date").innerHTML = year + '.' + month + '.' + date + ' ' + hour + ':' + minutes + ':' + seconds;
  document.getElementById("ticket_now_time").innerHTML = year + '-' + month + '-' + date + '(' + day + ')';
}, 1000);


//어트랙션 호버 - 이미지 변경
const $att_s=document.querySelectorAll('.att_s')
const $att_title = document.querySelectorAll('.att_title')
const test_title1 =[]
const test_title2 = []
$att_title.forEach(item=>{
test_title1.push(item.childNodes[1].textContent)
test_title2.push(item.childNodes[3].textContent)
})

function test(num,aa){
if(aa===3){
return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]} Big.png')`
}
if(aa){
return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]} 블러.png')`
} else {
return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]}.png')`
}
}

const att_b1 = document.querySelector('.att_b1')
const $att_mouse_account = document.querySelector('.att_mouse_account')
$att_s.forEach((item,index)=>{

const att_box = item.querySelector('.att_box');
item.addEventListener('mouseover', e => {
  item.style.backgroundImage =test(index,1);
  att_box.classList.remove('d-none');
  att_b1.style.backgroundImage = test(index,3)
  $att_mouse_account.classList.add('d-none')
});

item.addEventListener('mouseout', e => {
  item.style.backgroundImage =test(index,0);
  att_box.classList.add('d-none');
  att_b1.style.backgroundImage = 'none'
  $att_mouse_account.classList.remove('d-none')
})
})

// 이용권 티켓 컨텐츠 클릭했을때 레이어 나오게
function ticketChoice(){
let choiceNone = document.getElementById("choice_none");
if(choiceNone.style.display=='none'){
choiceNone.style.display='block';
}else{
choiceNone.style.display='none';
}
}
box.addEventListener('transitionend', function(e){
  box.classList.add('end');
})

const $main_side_bar = document.querySelector('#main_side_bar')
const $guide_map_icon = document.querySelector('.guide_map_icon')
const $menuToggle = document.querySelectorAll('#menuToggle span')

let scrollTimer = null;
$guide_map_icon.style.display='none'
window.addEventListener('scroll', (e) => {
  // console.log(scrollY);
    if(!scrollTimer) {
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        $menu_bar.forEach(item=>{
          // 검정
          if (window.scrollY>=full2TopY){
            $menuToggle.forEach(item=>{
              //console.log(item);
              item.style.backgroundColor='#000'
            })
            $guide_map_icon.style.display='inline-block'
            item.classList.add('csh__black')
            $search_icon_gray.style.display='inline-block'
            $search_icon_white.style.display='none'
            $ticket_icon_gray.style.display='inline-block'
            $ticket_icon_white.style.display='none'
            $user_icon_gray.style.display='inline-block'
            $user_icon_white.style.display='none'
            $logo_gray.style.display='inline-block'
            $logo_white.style.display='none'
          } else {   // 흰색
            $menuToggle.forEach(item=>{
              item.style.backgroundColor='#fff'
            })
            $guide_map_icon.style.display='none'
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
      }, 500);
    }
    // -2860
    if(window.scrollY>=2916){
        $guide_map_icon.style.position='absolute'
        $guide_map_icon.style.bottom = '-2780px'
        // console.log('고정');
    }
    else {
      $guide_map_icon.style.position='fixed'
      $guide_map_icon.style.bottom = '60px'
      // console.log('움직임');
    }
  });

  const $swiperWrapper = document.querySelector('.swiper.mySwiper > div.swiper-wrapper');
  const $swiperSlide = $swiperWrapper.querySelectorAll('div.full4 div.swiper-slide');

  $swiperWrapper.addEventListener('mouseleave', e => {
   
      $swiperSlide.forEach(subItem => {
        const subBack = subItem.querySelector('.back');
        const paradeText = subItem.querySelector('div.parade_text_box');

        subBack.classList.remove('blur')
        paradeText.classList.add('d-none');
      });
   
  })

  $swiperSlide.forEach(item => {
    const back = item.querySelector('.back');

    back.addEventListener('mouseenter', e => {
      $swiperSlide.forEach(subItem => {
        const subBack = subItem.querySelector('.back');
        const paradeText = subItem.querySelector('div.parade_text_box');

        subBack.classList.toggle('blur', item === subItem)
        paradeText.classList.toggle('d-none', item !== subItem);
      });
    });
  });
