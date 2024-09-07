const classswiper = new Swiper(".class_swiper", {
  // 左右箭頭
  navigation: {
    nextEl: ".class-swiper-button-next",
    prevEl: ".class-swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 8,
  breakpoints: {
    1200: { slidesPerView: "auto" },
  },
});

const trendingSwiper = new Swiper(".trending_swiper", {
  // 左右箭頭
  navigation: {
    nextEl: ".trending-swiper-button-next",
    prevEl: ".trending-swiper-button-prev",
  },
  slidesPerView: 1.5,
  spaceBetween: 16,
  breakpoints: {
    768: { 
      slidesPerView: 2,
    },
    992: { 
      slidesPerView: 3,
    },
    1200: { 
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const populartopicsswiper = new Swiper(".popular-topics-swiper", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".popular-topics-pagination",
  },
  // 左右箭頭
  navigation: {
    nextEl: ".popular-topics-swiper-button-next",
    prevEl: ".popular-topics-swiper-button-prev",
  },
  slidesPerView: 1.7,
  spaceBetween: 24,
  breakpoints: {
    768: { 
      slidesPerView: 3,
    },
    992: { 
      slidesPerView: 4,
    },
    1200: { 
      slidesPerView: 6 
    },
  },
});
