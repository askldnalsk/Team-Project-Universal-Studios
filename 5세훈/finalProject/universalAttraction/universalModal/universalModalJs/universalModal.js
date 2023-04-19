
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector("button");
const md_content = modal.querySelector('.md_content');
const $body = document.querySelector('body');



modal.addEventListener('click',e =>{ 
    if(e.target === overlay){ 
        modal.classList.add('hidden');
    }
})

//동작함수

const closeModal = (e) => {
    modal.classList.add("hidden");
   
}
//클릭 이벤트
closeButton.addEventListener("click", closeModal);








const $detailBox = document.querySelector('.detail_commentbox');
const $aboutBox = document.querySelector('.aboutbox');
const $detailBtn = document.querySelector('.toggle_header');
const $aboutBtn = document.querySelector('.toggle_header2');

//detail about 버튼
$aboutBtn.addEventListener('click',e=> { 
    $detailBox.style.display = 'none';
    $aboutBox.style.display = 'block';
    $detailBtn.style.color = '#ccc';
    $aboutBtn.style.color = '#000';
});

$detailBtn.addEventListener('click',e=> { 
    $detailBox.style.display = 'block';
    $aboutBox.style.display = 'none';

    $detailBtn.style.color = '#2f2f2f';
    $aboutBtn.style.color = '#ccc';
});


