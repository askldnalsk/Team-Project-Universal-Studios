const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector("button");


//동작함수
const openModal = () => {
    modal.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add("hidden");
}
//클릭 이벤트
openButton.addEventListener("click", openModal);
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

    $detailBtn.style.color = '#000';
    $aboutBtn.style.color = '#ccc';
});

const $btnimgChoice = document.querySelector('.md_container_left');
const $btn1 = $btnimgChoice.querySelector('.btn_img1');
const $btn2 = $btnimgChoice.querySelector('.btn_img2');
const $btn3 = $btnimgChoice.querySelector('.btn_img3');

$btn1.addEventListener('click',e=> { 
    $btnimgChoice.style.backgroundImage = "url('./image/modalLeftImage.png')"
    $btn1.style.backgroundColor = '#fff';
    $btn2.style.backgroundColor = 'rgb(82, 88, 86)';
    $btn3.style.backgroundColor = 'rgb(82, 88, 86)';

    
})
$btn2.addEventListener('click',e=> { 
    $btnimgChoice.style.backgroundImage = "url('./image/modalLeftImage2.png')"
    $btn2.style.backgroundColor = '#fff';
    $btn3.style.backgroundColor = 'rgb(82, 88, 86)';
    $btn1.style.backgroundColor = 'rgb(82, 88, 86)';
    
})
$btn3.addEventListener('click',e=> { 
    $btnimgChoice.style.backgroundImage = "url('./image/modalLeftImage3.png')"
    $btn3.style.backgroundColor = '#fff';
    $btn1.style.backgroundColor = 'rgb(82, 88, 86)';
    $btn2.style.backgroundColor = 'rgb(82, 88, 86)';
})
