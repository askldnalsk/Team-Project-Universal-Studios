(function(){
    'use strict'
    const $ticket__money=document.querySelectorAll('.ticket__money')
    const $content=document.querySelector('.content')
    const $btn=document.querySelectorAll('.content button')
    // $btn.forEach((foritem,index)=>{
        $content.addEventListener('click',e=>{
            console.log(e.target);
            if(e.target===$content){
                return
            }
            $btn.forEach((item1)=>{
                item1.classList.toggle('content__click',item1===e.target)
            })
            $ticket__money.forEach((item2)=>{
                item2.classList.toggle('none')
            })
        })
    // })
    console.log($ticket__money);
})()