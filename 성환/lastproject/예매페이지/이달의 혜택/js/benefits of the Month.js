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
const makeCalendar = (date) => {
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

  function test_1(date){
    if(calendarList[date]){
      return(calendarList[date][1]);
    }
    return ''
  }

  function test_2(date){
    if(calendarList[date]){
      return(calendarList[date][0]);
    }
    return ''
  }

  for (let i = 1; i <= lastDay; i++) {
    const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`
    // console.log(date);
    // console.log(`${currentMonth.pad()} // ${i.pad()}`);
    
    htmlDummy += `
      <div class="${test_2(date)||'number'}">
        ${i}
        <p class="nomouse">
          ${test_1(date)}
        </p>
      </div>
    `;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor nomouse"></div>`;
  }
  
  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;

  const $Month=document.querySelectorAll('.grid2 div')
  const $click__day=document.querySelector('.click__day')

  $click__day.innerHTML=`
      <div>
      ${year}년 ${month}월 ${day}일
      </div>
    `

  $Month.forEach(itme=>{
    itme.addEventListener('click',e=>{
    $click__day.innerHTML=`
      <div>
      ${currentYear}년 ${currentMonth}월 ${functionDay(e)}일
      </div>
    `
  })
})
function functionDay(item){
  if((item.target.innerText+"").length === 5){
      return item.target.innerText.substr(0,1);    
  }
  if((item.target.innerText+"").length > 3){
    return item.target.innerText.substr(0,2);    
}
  return item.target.innerText
}
}


const $plusBtn = document.querySelectorAll('.plusBtn')
const $minusBtn = document.querySelectorAll('.minusBtn')
const $num1 = document.querySelector('.num1')
const $num2 = document.querySelector('.num2')
const $num3 = document.querySelector('.num3')

$plusBtn.forEach((item2,index)=>{
  item2.addEventListener('click',e=>{
    if(index===0){
      $num1.innerText++
      $num1.classList.add('fontColer214FF2')
    }
    if(index===1){
      $num2.innerText++
      $num2.classList.add('fontColer214FF2')
    }
    if(index===2){
      $num3.innerText++
      $num3.classList.add('fontColer214FF2')
    }
  })
})

$minusBtn.forEach((item2,index)=>{
  item2.addEventListener('click',e=>{
    if(index===0){
      if($num1.innerText==='0'){return}
      if($num1.innerText==='1'){$num1.classList.remove('fontColer214FF2')}
      $num1.innerText--
    }
    if(index===1){
      if($num2.innerText==='0'){return}
      if($num2.innerText==='1'){$num2.classList.remove('fontColer214FF2')}
      $num2.innerText--
    }
    if(index===2){
      if($num3.innerText==='0'){return}
      if($num3.innerText==='1'){$num3.classList.remove('fontColer214FF2')}
      $num3.innerText--
    }
  })
})

const date = new Date();

makeCalendar(date);


// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}