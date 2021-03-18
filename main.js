// mainSlide
var mainSwiper = new Swiper('.mainSwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// goodsSwiper
var goodsSwiper = new Swiper('.goodsSwiper', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,
    navigation: {
      nextEl: '.goodsRightBtn',
      prevEl: '.goodsLeftBtn',
    },
});

// dailySaleTime
countTimer('04/01/2021 00:00 AM');
const countDown = document.getElementById("countDown");

function countTimer(dt, id){
  var end = new Date(dt);

  var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  var timer;

  function remainTimer(){
    var now = new Date();
    var diff = end - now;
  
    var hours = Math.floor((diff % day) / hour);
    var minutes = Math.floor ((diff % hour) / minute);
    var seconds = Math.floor((diff % minute) /second);
  
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : secondss;
    
    countDown.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  timer = setInterval(remainTimer, 1000);
}

// saleGoods
var goodsSwiper = new Swiper('.saleGoods', {
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.goodsRightBtn',
    prevEl: '.goodsLeftBtn',
  },
});

// insta
var goodsSwiper = new Swiper('.insta', {
  slidesPerView: 6,
  spaceBetween: 0,
  slidesPerGroup: 6,
  navigation: {
    nextEl: '.goodsRightBtn',
    prevEl: '.goodsLeftBtn',
  },
});
