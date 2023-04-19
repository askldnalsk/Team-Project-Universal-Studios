var now = new Date();   //현재시간
var year = now.getFullYear();   //현재 연도
var month = now.getMonth()+1;   //현재 달 
if((month+"").length < 2){
    month="0"+month;
}
var day = now.getDate();      //현재 날짜.
if((day+"").length < 2){
    day="0"+day;      
}
var hour = now.getHours();   //현재 시간.
if((hour+"").length < 2){
hour="0"+hour;      
}
var minutes=now.getMinutes(); //현재 분
if((minutes+"").length < 2){
    minutes="0"+minutes;
}
//오늘 날짜 완성.
var today = year + "" + month + "" + day;
document.querySelector('.btnCal').innerHTML=`${year}.${month}.${day}`
const test1 = `${year}-${month}-${day}`
const test=[
  {date: test1, content: 'today', text: '오늘'},
  {date: '2023-01-01', content: 'newYearSDay', text: '신정'},
  {date: '2023-01-22', content: 'seollal', text: '설날'},
  {date: '2023-03-01', content: 'samiljeol', text: '삼일절'},
  {date: '2023-05-05', content: 'childrenSDay', text: '어린이날'},
  {date: '2023-05-27', content: 'buddhaSBirthday', text: '석가탄신일'},
  {date: '2023-06-06', content: 'memorialDay', text: '현충일'},
  {date: '2023-08-15', content: 'nationalLiberationDay', text: '광복절'},
  {date: '2023-08-28', content: 'chuseok', text: '추석'},
  {date: '2023-10-03', content: 'theNationalFoundationDayOfKorea', text: '개천절'},
  {date: '2023-10-09', content: 'hangulProclamationDay', text: '한글날'},
  {date: '2023-12-25', content: 'christmas', text: '크리스마스'}
]
// { date: '2022-10-15', content: '테스트1' }


// 데이터 가공
const calendarList = test.reduce(
  (acc, v) => 
    ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content, v.text] })
  , {}
);
// console.log(calendarList['2023-01-01'][0]);


// pad method
Number.prototype.pad = function() {
  return this > 9 ? this : '0' + this;
}

// 달력 생성
let Ttrue = false
let Dclick = `${year}-${month}-${day}`
const makeCalendar = (date) => {
  // let Dclick = `${year}-${month}-${day}`

  // 현재의 년도와 월 받아오기
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;
  // 한달전의 마지막 요일
  const firstDay = new Date(date.setDate(1)).getDay();
  // 현재 월의 마지막 날 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor nomouse"></div>`;
  }

  // 이번달 날짜 표시하기
  // console.log(calendarList);



  function click(date){
    if(`${Dclick}`===date){
      return ''
    }
    if(`${Dclick}`>date){
      return ''
    }
  }

  function today(date){
    if(`${year}-${month}-${day}`===date){
      return 'today'
    }
    if(`${year}-${month}-${day}`>date){
      return 'todayBefore'
    }
  }
  function click2(date){
    if(`${Dclick}`===date){
      return `clickDay`
    }
    if(`${Dclick}`>date){
      return ``
      // `style="
      // display: none;"`
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`
    // console.log(date);
    // console.log(`${currentMonth.pad()} // ${i.pad()}`);

    htmlDummy += `
      <div class="${click(date)||'number'} ${today(date)||''}">
        <div class="${click2(date)||''}">
          ${i}
          <p class="nomouse dsNone">
            ${currentMonth.pad()}
          </p>
        </div>
      </div>
    `;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor nomouse"></div>`;
  }
  
  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;


  const $dateBoard = document.querySelector('.dateBoard')
  const $dateMonth = document.querySelector('.dsNone')
  let TTnem = 0
  if(Ttrue){return} else{Ttrue=false}
  $dateBoard.addEventListener('click',e=>{
    console.log(`${currentMonth}`);
    console.log(`${e.target.innerText}`);
    var $month = currentMonth
      if((`${currentMonth}`).length < 2){
          $month="0"+`${currentMonth}`;
      }
    var $day = e.target.innerText
      if((`${e.target.innerText}`).length < 2){
          $day="0"+`${e.target.innerText}`;      
      }


      Dclick = `${currentYear}-${$month}-${$day}`
      console.log(Dclick);
    //오늘 날자 표시
    document.querySelector('.btnCal').innerHTML=`${currentYear}.${$month}.${$day}`
    Ttrue=true
    TTnem++
    console.log(TTnem);
    makeCalendar(date)
  })
}




const date = new Date();
// console.log(date);
makeCalendar(date);


// 이전달 이동
document.querySelector(`.prevDay`).addEventListener('click',e=>{
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}) 

// 다음달 이동
document.querySelector(`.nextDay`).addEventListener('click',e=>{
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));

})
const onlyPass=[
  {
    "won" : '111,600',
    "day" : '1일',
    "age" : '어린이'
  },
  {
    "won" : '141,000',
    "day" : '1일',
    "age" : '어른'
  },
  {
    "won" : '126,400',
    "day" : '1.5일',
    "age" : '어린이'
  },
  {
    "won" : '151,500',
    "day" : '1.5일',
    "age" : '어른'
  },
  {
    "won" : '133,000',
    "day" : '2일',
    "age" : '어린이'
  },
  {
    "won" : '163,400',
    "day" : '2일',
    "age" : '어른'
  }
]

const passPusPass=[
    {
      "won" : '121,400',
      "day" : '1일',
      "age" : '어린이(12세 이하)'
    },
    {
      "won" : '150,800',
      "day" : '1일',
      "age" : '어른(12세 이상)'
    },
    {
      "won" : '150,400',
      "day" : '1.5일',
      "age" : '어린이(12세 이하)'
    },
    {
      "won" : '186,500',
      "day" : '1.5일',
      "age" : '어른(12세 이상)'
    },
    {
      "won" : '170,400',
      "day" : '2일',
      "age" : '어린이(12세 이하)'
    },
    {
      "won" : '226,300',
      "day" : '2일',
      "age" : '어른(12세 이상)'
    }
  ]

const $txt=document.querySelector('.txt')

// onlyPass.forEach(onlypass=>{
//   console.log(onlypass);
// })
// passPusPass.forEach(passPusPass=>{
//   console.log(passPusPass);
// })

$txt.innerHTML=`
  <span class="passDay">스튜디오 패스(1일권)
    </br>
  ${onlyPass[0].age}</span>
    </br>
  <span class = "won" style="display : none">${onlyPass[0].won}</span>
`
let $won = document.querySelector('.won').innerText.replace(',', '')

console.log($won);

const $base_prod_list=document.querySelector('#base_prod_list')
const $number=document.querySelector('.number')
const $down=document.querySelector('.down')
const $up=document.querySelector('.up')
const $total_sum=document.querySelector('#total_sum')



const $tab = document.querySelector('.tab')
const $tabLi = $tab.querySelectorAll('li')
const $viewRelate =document.querySelectorAll('.viewRelate')
console.log($tabLi);
$tabLi.forEach((item,inx) =>{
  item.addEventListener('click',e=>{
    $tabLi.forEach((item2,inx2)=>{
      item2.classList.toggle('on',inx2===inx)
    })
    $viewRelate.forEach((item3,inx3)=>{
      item3.classList.toggle('open',inx3===inx)
    })
  })
})

const $layerPopup =document.querySelector('.layerPopup')
const $layerMask = document.querySelector('.layerMask')
const $passDay = document.querySelector('.passDay')
const $day = document.querySelector('.day')
$layerMask.classList.toggle('layerMask')

const $btnBox = document.querySelector('.btnBox')
console.log($btnBox);
$btn_cartInsert2=document.querySelector('#btnCalCancel')
$btn_cartInsert1=document.querySelector('#btnCalConfirm')

$btn_cartInsert2.addEventListener('click',e=>{
  $layerMask.classList.toggle('layerMask')
  $layerPopup.classList.toggle('D-none')
})
$btn_cartInsert1.addEventListener('click',e=>{
  $layerMask.classList.toggle('layerMask')
  $layerPopup.classList.toggle('D-none')
})

const $opt5 = document.querySelector('#base_prod_tit')
$opt5.addEventListener('click',e=>{
  $layerMask.classList.toggle('layerMask')
  $layerPopup.classList.toggle('D-none')
})

const $dayText2 = document.querySelectorAll('.dayText2 ')
$dayText2.forEach((item,inx)=>{
  item.addEventListener('click',e=>{
    $layerMask.classList.toggle('layerMask')
    $layerPopup.classList.toggle('D-none')
    $dayText2.forEach((item2,inx2)=>{
      $passDay.innerHTML=`
      <span class="passDay">${item.textContent}(1일권)
    </br>
      ${onlyPass[0].age}</span>
    </br>
     <span class = "won" style="display : none">126,400</span>
      `
      $total_sum.innerHTML =`
      ${(($base_prod_list.querySelector('input').value)*126400).toLocaleString('ko-KR')}원
    ` 
      item2.classList.toggle('able',inx!==inx2)
      item2.classList.toggle('disabled',inx===inx2)
      $day.innerText='스튜디오 패스(1.5일권)'
    })
  })
})


// 클릭시 숫자 올라가는거
function NumBtn(){
  $won = document.querySelector('.won').innerText.replace(',', '')
  $down.addEventListener('click',e=>{
    if($base_prod_list.querySelector('input').value>'1'){
      $base_prod_list.querySelector('input').value--
      $total_sum.innerHTML =`
      ${(($base_prod_list.querySelector('input').value)*$won).toLocaleString('ko-KR')}원
    ` 
      
    }
  })
  
  $up.addEventListener('click',e=>{
    $base_prod_list.querySelector('input').value++
    $total_sum.innerHTML =`
    ${(($base_prod_list.querySelector('input').value)*$won).toLocaleString('ko-KR')}원
  ` 
  })

  $total_sum.innerHTML =`
    ${(($base_prod_list.querySelector('input').value)*$won).toLocaleString('ko-KR')}원
  ` 

  
}

NumBtn()
