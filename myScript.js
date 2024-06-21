  document.addEventListener('DOMContentLoaded', function() {    
    //여기서부터는 imageslide 부분

// let nowIndex = 1;


// const imageSlider = document.querySelector('#imageSlider');

// const bottomBtn01 = document.querySelector('#imgTo1');
// const bottomBtn02 = document.querySelector('#imgTo2');
// const bottomBtn03 = document.querySelector('#imgTo3');

// const leftArrow = document.querySelector('#leftArrow');
// const rightArrow = document.querySelector('#rightArrow');

// bottomBtn01.addEventListener('click', moveA);
// bottomBtn02.addEventListener('click', moveB);
// bottomBtn03.addEventListener('click', moveC);

// leftArrow.addEventListener('click', moveLeft);
// rightArrow.addEventListener('click', moveRight);

// //move first image
// function moveA()
// {
//     imageSlider.style.transform = 'translate(0px)';
//     nowIndex = 1;
//     btncolor(nowIndex);
 
// }
// //두번째 이미지로 
// function moveB()
// {
//     imageSlider.style.transform = 'translate(-1420px)';
//     nowIndex = 2;
//     btncolor(nowIndex);

// }
// //세번째 이미지로 
// function moveC()
// {
//     imageSlider.style.transform = 'translate(-2840px)';
//     nowIndex = 3;
//     btncolor(nowIndex);

// }

// function btncolor(index) {  //moveslider 참고해서 
//     // 원래대로..
//     bottomBtn01.style.backgroundColor = ''; // color가 backgroundColor밖에 없어서 그걸로 했는데 맞으려나요..
//     bottomBtn02.style.backgroundColor = '';
//     bottomBtn03.style.backgroundColor = '';
    
//     // 버튼 색깔
//     switch (index) {
//         case 1:
//             bottomBtn01.style.backgroundColor = 'hotpink';
//         break;
//         case 2:
//             bottomBtn02.style.backgroundColor = 'hotpink';
//         break;
//         case 3:
//             bottomBtn03.style.backgroundColor = 'hotpink';
//         break;
//     }
// }




// function moveLeft()
// {
//     if(nowIndex ==1)
//     {
//         nowIndex ==1;
//     }
//     else
//     {
//         nowIndex --;  //(--;도 가능)
//     }

//     moveSlider(nowIndex);  //아래로 내려갔다가 다시 위로...

//     /*
//      // 왼쪽 화살표 숨기기... 근데 안 숨겨짐
//     if (nowIndex == 1) 
//     {
//         leftArrow.style.display = 'none'; // 숨김
//     } 
//     else 
//     {
//         rightArrow.style.display = ''; // 원래대로?
//     }
//     */
    
// }

// function moveRight()
// {
//     if(nowIndex ==3)
//     {
//         nowIndex==3;
//     }
//     else{
//         nowIndex ++;
//     }

//     moveSlider(nowIndex);

//     /*
//     // 오른쪽 화살표 숨기기... 근데 안 숨겨짐
//     if (nowIndex == 3) 
//     {
//         rightArrow.style.display= 'none'; // 숨김
//     } 
//     else 
//     {
//         leftArrow.style.display = ''; // 원래대로
//     }
//     */
    
// }



// function moveSlider (index) // 양사이드 위한 거 > 아래 거 눌렀을 때 인덱스 바뀌는 건 다른 거임(=function의 nowindex)
// {
//     switch(index)
//     {
//         case 1:
//             moveA();
//         break;
//         case 2:
//             moveB();
//         break;
//         case 3:
//             moveC();
//         break;
//     }
// }





//썸네일
let imgData = [
    "about.png","risk.png", "actions.png"
];

let imgName = [
    "Category",
    "Nintendo Switch Oled",
    "Nintendo Switch",
    "Nintendo Switch lite"
];

let thumbnailBox = document.querySelectorAll(".thumbnail");

let imgTags = document.querySelectorAll(".imageTag");
let thembText =document.querySelectorAll(".textField");

for(let i=0; i<thumbnailBox.length; i++)
{
    imgTags[i].src = "img/" + imgData[i];
    // thembText[i].textContent = imgName[i];

    thumbnailBox[i].addEventListener("mouseover", overFn);
    thumbnailBox[i].addEventListener("mouseout", outFn);
}

function overFn(e)
{
    //console.log(e.composedPath()[1].querySelector(".imageTag"));
    e.composedPath()[1].querySelector(".imageTag").classList.add("on");
    e.composedPath()[0].classList.add("on");

}

function outFn(e)
{
    e.composedPath()[1].querySelector(".imageTag").classList.remove("on");
    e.composedPath()[0].classList.remove("on");
    
}

const swiper = new Swiper('.swiper.main-slide', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    // 슬라이드 밑 ...
    pagination: {
      el: '.swiper-pagination',
    },

    // prev next btn
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    
  });
  });