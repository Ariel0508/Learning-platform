const classswiper = new Swiper(".class_swiper", {
  // 左右箭頭
  navigation: {
    nextEl: ".class-swiper-button-next",
    prevEl: ".class-swiper-button-prev",
  },
  slidesPerView: "auto",
  breakpoints: {
    1200: { slidesPerView: "auto" },
  },
});

const courseswiper = new Swiper(".course_swiper", {
  // 左右箭頭
  navigation: {
    nextEl: ".course-swiper-button-next",
    prevEl: ".course-swiper-button-prev",
  },
  slidesPerView: 1.5,
  spaceBetween: "10px",
  breakpoints: {
    1200: { slidesPerView: 4 },
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
  spaceBetween: "10px",
  breakpoints: {
    1200: { slidesPerView: 6 },
  },
});
