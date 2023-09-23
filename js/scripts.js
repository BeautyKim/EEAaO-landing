const res = "안녕";
const data = [
  {
    "name": "스마트폰 모델 X",
    "imgSrc": "https://example.com/images/product-x.jpg",
    "link": "https://example.com/products/product-x"
  },
  {
    "name": "노트북 모델 Y",
    "imgSrc": "https://example.com/images/laptop-y.jpg",
    "link": "https://example.com/products/laptop-y"
  },
  {
    "name": "헤드폰 모델 Z",
    "imgSrc": "https://example.com/images/headphones-z.jpg",
    "link": "https://example.com/products/headphones-z"
  },
  {
    "name": "카메라 모델 A",
    "imgSrc": "https://example.com/images/camera-a.jpg",
    "link": "https://example.com/products/camera-a"
  },
  {
    "name": "스마트워치 모델 B",
    "imgSrc": "https://example.com/images/smartwatch-b.jpg",
    "link": "https://example.com/products/smartwatch-b"
  }
]

// movie carousel

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const carouselLength = document.querySelectorAll('iframe').length;

const IMAGE_WIDTH = 1280;
let index = 1;

prevButton.addEventListener('click', () => {
  if (index === 1) {
    index = carouselLength;
  } else {
    index--;
  }
  carousel.style.transform = `translateX(-${IMAGE_WIDTH * (index - 1)}px)`;
});

nextButton.addEventListener('click', () => {
  if (index >= carouselLength) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`;
  index++;
});
