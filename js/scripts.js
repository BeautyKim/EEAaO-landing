const data = [
  {
    name: "Song Reader",
    imgSrc:
      "https://cld.accentuate.io/6772027260977/1677610919623/ASW23015-eeaao-reader-gray-1x1-shot-2.jpg?v=1677610919623&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/products/ASW23015-eeaao-reader-gray-tight-shot-12_1550x.jpg?v=1677610324",
    link: "https://shop.a24films.com/products/everything-everywhere-all-at-once-song-reader?_pos=1&_sid=4fe418ce5&_ss=r",
    price: "$45",
  },
  {
    name: "Original Motion Picture Soundtrack",
    imgSrc:
      "https://cld.accentuate.io/6705037836337/1656991131943/ASW22035-1x1-gray-shot-7_edit.jpg?v=0&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/products/ASW22035-1x1-gray-shot-12_1550x.jpg?v=1656991029",
    link: "https://shop.a24films.com/products/everything-everywhere-all-at-once-original-motion-picture-soundtrack?_pos=3&_sid=4fe418ce5&_ss=r",
    price: "$40",
  },
  {
    name: "Collector's Edition",
    imgSrc:
      "https://cld.accentuate.io/6792591310897/1689277214928/HERO_20230705_A24_EverythingEverywhereAllAtOnce_Blu-Ray_1039-tight-gray.jpg?v=1689277214928&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/files/DETAIL1_20230705_A24_EverythingEverywhereAllAtOnce_Blu-Ray_1056-tight-gray_1550x.jpg?v=1689277030",
    link: "https://shop.a24films.com/products/everything-everywhere-all-at-once-collectors-edition?variant=39988893188145",
    price: "$45",
  },
  {
    name: "에브리씽 에브리웨어 올 앳 원스 (1Disc)",
    imgSrc: "https://image.yes24.com/goods/118087834/XL",
    hoverImgSrc: "https://image.yes24.com/goods/118087834/XL",
    link: "https://www.yes24.com/Product/Goods/118087834",
    price: "22,700원",
  },
  {
    name: "Laughing Rocks Multiverse Poster",
    imgSrc:
      "https://cld.accentuate.io/6698871062577/1650468271979/A24_EverythingEverywhereAllAtOnce_1x1-(1).jpg?v=0&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/products/A24_EverythingEverywhereAllAtOnce_1x1_1_1550x.jpg?v=1650468368",
    link: "https://shop.a24films.com/products/laughing-rocks-multiverse-poster?_pos=5&_sid=4fe418ce5&_ss=r",
    price: "FREE",
  },
  {
    name: "White Googly Eye Puff Print Logo Tee",
    imgSrc:
      "https://cld.accentuate.io/6696033910833/1649739972500/20220319_A24_Shirts_10670-tight-gray.jpg?v=0&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/products/20220319_A24_Shirts_106621x1gray_1550x.jpg?v=1649739929",
    link: "https://shop.a24films.com/products/googly-eye-logo-tee?variant=39629269237809",
    price: "$40",
  },
  {
    name: "Hot Dog Finger Gloves",
    imgSrc:
      "https://cld.accentuate.io/6696033976369/1649779705983/ASW22024-front-and-back-gray-tight_2.jpg?v=0&options=w_1150",
    hoverImgSrc:
      "https://shop.a24films.com/cdn/shop/products/20220330_A24_HotDogFingers_16293x2gray_1550x.jpg?v=1649780161",
    link: "https://shop.a24films.com/products/hot-dog-hands?_pos=19&_sid=fe0258e9d&_ss=r",
    price: "$36",
  },
];

// froduct
function createProductHTML(product) {
  return `
    <div class="item">
      <div class="img-box">
        <a href="${product.link}" target="_blank">
          <img src="${product.imgSrc}" class="item-img" />
          <img src="${product.hoverImgSrc}" class="hover-item-img" />
        </a>
      </div>
      <div class="item-text">
        <h1>${product.name}</h1>
        <p>${product.price}</p>
      </div>
    </div>
  `;
}

function addProductsToPage() {
  const container = document.querySelector(".item-content");

  data.forEach((product) => {
    const productHTML = createProductHTML(product);
    container.innerHTML += productHTML;
  });
}

window.addEventListener("load", addProductsToPage);
window.addEventListener("scroll", function () {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  console.log(scrollTop);
});

// dialog scroll
const scrollDialog = document.querySelector(".dialog");
// const scrollDialogContent = document.querySelector(".dialog-content");

scrollDialog.addEventListener("scroll", (event) => {
  event.preventDefault();
  console.log(event);
  console.log(`dialog태그에서 시작:    ${scrollDialog.scrollTop}`);
  // console.log(
  //   `dialog-content태그에서 시작:    ${scrollDialogContent.scrollTop}`
  // );
});

// froduct scroll
const scrollContainer = document.querySelector(".item-content");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

// movie carousel
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carousel = document.querySelector(".carousel");
const carouselLength = document.querySelectorAll("iframe").length;

const IMAGE_WIDTH = 1280;
let index = 1;

prevButton.addEventListener("click", () => {
  if (index === 1) {
    index = carouselLength;
  } else {
    index--;
  }
  carousel.style.transform = `translateX(-${IMAGE_WIDTH * (index - 1)}px)`;
});

nextButton.addEventListener("click", () => {
  if (index >= carouselLength) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`;
  index++;
});
