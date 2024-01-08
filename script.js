import { items } from './data.js';


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

var swiper = new Swiper('.categories__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },

    }
})

var swiperArr = new Swiper('.new__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },

    }
})

//PRODUCTS

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContent.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });
        target.classList.add("active-tab");

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

        tab.classList.add("active-tab");
    })

})




function getUniqueCategories(items) {
    const categories = new Set();
    items.forEach((item) => {
        categories.add(item.category);
    });
    return Array.from(categories);
}

// Function to get imgFront for the first item in each category
function getImgFrontByCategory(items, category) {
    const item = items.find((item) => item.category === category);
    return item ? item.imgFront : null;
}

function createCategory(catTitle, catImg) {

    let item = document.createElement("a");
    item.classList.add("category__item", "swiper-slide");
    item.href = "#";

    let image = document.createElement("img");
    image.classList.add("category__img");
    image.src = catImg;

    let title = document.createElement("h3");
    title.classList.add("category__title");
    title.innerHTML = catTitle;


    item.appendChild(image);
    item.appendChild(title);


    return item

}

function createItems(item, isSlide) {
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("product__item");
    if (isSlide) {
        itemContainer.classList.add("swiper-slide");
    }

    
    let bannerContainer = document.createElement("div");
    bannerContainer.classList.add("product__banner");

    let imgContainer = document.createElement("a");
    imgContainer.classList.add("product__images");
    imgContainer.href = `./product.html?productId=${item.itemId}`;

    let Front = document.createElement("img");
    Front.classList.add("product__img", "default");
    Front.src = item.imgFront;

    let Back = document.createElement("img");
    Back.classList.add("product__img", "hover");
    Back.src = item.imgBack[0];

    if(isSlide){
        // Front.classList.remove("product__img");
        // Front.classList.add("arr__img");

        // Back.classList.remove("product__img");
        // Back.classList.add("arr__img");

        Front.style.width="200px";
        Back.style.width="200px";
        Front.style.height="200px";
        Back.style.height="200px";
    }

    imgContainer.appendChild(Front);
    imgContainer.appendChild(Back);

    let actions = document.createElement("div");
    actions.classList.add("product__actions");



    //Action btns start
    let actions1 = document.createElement("a");
    actions1.classList.add("action__btn");
    actions1.href = "#";
    actions1.setAttribute('aria-label', 'Quick View');

    let i1 = document.createElement("i");
    i1.classList.add("bx", "bx-happy-heart-eyes");

    actions1.appendChild(i1);

    let actions2 = document.createElement("a");
    actions2.classList.add("action__btn");
    actions2.href = "#";
    actions2.setAttribute('aria-label', 'Like');

    let i2 = document.createElement("i");
    i2.classList.add("bx", "bx-like");

    actions2.appendChild(i2);

    let actions3 = document.createElement("a");
    actions3.classList.add("action__btn");
    actions3.href = "#";
    actions3.setAttribute('aria-label', 'Compare');

    let i3 = document.createElement("i");
    i3.classList.add("bx", "bx-shuffle");

    actions3.appendChild(i3);

    actions.appendChild(actions1);
    actions.appendChild(actions2);
    actions.appendChild(actions3);
    //action btns end

    let badge = document.createElement("div");

    badge.classList.add("product__badge", ((item.itemSalestate).split(";")[0]));

    badge.innerHTML = ((item.itemSalestate).split(";")[1]);

    let content = document.createElement("div");
    content.classList.add("product__content");

    let cat = document.createElement("span");
    cat.classList.add("product__category");
    cat.innerHTML = item.category;

    let title = document.createElement("a");
    title.href = "#";

    let title2 = document.createElement("h3");
    title2.classList.add("product__title");
    title2.innerHTML = item.itemName;

    title.appendChild(title2);


    let rating = document.createElement("div");
    rating.classList.add("product__rating");

    for (let index = 0; index < item.itemRating; index++) {
        let star = document.createElement("i");
        star.classList.add("bx", "bxs-heart");
        rating.appendChild(star);
    }

    let price = document.createElement("div");
    price.classList.add("product__price", "flex");

    let newPrice = document.createElement("span");
    newPrice.classList.add("new__price");
    newPrice.innerHTML = item.itemPricenew;

    let oldPrice = document.createElement("span");
    oldPrice.classList.add("old__price");
    oldPrice.innerHTML = item.itemPriceOld;

    price.appendChild(newPrice);
    price.appendChild(oldPrice);


    let cart = document.createElement("a");
    cart.classList.add("action__btn", "cart__btn");
    cart.setAttribute('aria-label', 'Add to cart');

    let cartimg = document.createElement("i");
    cartimg.classList.add("bx", "bx-cart-alt");

    cart.appendChild(cartimg);

    content.appendChild(cat);
    content.appendChild(title);
    content.appendChild(rating);
    content.appendChild(price);
    content.appendChild(cart);

    bannerContainer.appendChild(imgContainer);
    bannerContainer.appendChild(actions);
    bannerContainer.appendChild(badge);


    itemContainer.appendChild(bannerContainer);
    itemContainer.appendChild(content);

    return itemContainer
}

function createShowcaseItem(item) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('showcase__item');

    const imgBox = document.createElement('a');
    imgBox.href = '#';
    imgBox.classList.add('showcase__img-box');

    const img = document.createElement('img');
    img.src = item.imgFront;
    img.alt = '';
    img.classList.add('showcase__img');
    imgBox.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('showcase__content');

    const titleLink = document.createElement('a');
    titleLink.href = '#';

    const titleLabel = document.createElement('h4');
    titleLabel.classList.add('showcase__title');
    titleLabel.textContent = item.itemName;
    titleLink.appendChild(titleLabel);

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('showcase__price', 'flex');

    const newPriceSpan = document.createElement('span');
    newPriceSpan.classList.add('new__price');
    newPriceSpan.textContent = item.itemPricenew;

    const oldPriceSpan = document.createElement('span');
    oldPriceSpan.classList.add('old__price');
    oldPriceSpan.textContent = item.itemPriceOld;

    priceWrapper.appendChild(newPriceSpan);
    priceWrapper.appendChild(oldPriceSpan);

    content.appendChild(titleLink);
    content.appendChild(priceWrapper);

    wrapper.appendChild(imgBox);
    wrapper.appendChild(content);

    return wrapper;
}
function generateRandomCountdown() {
    const Days = Math.floor(Math.random() * 20); 
    const Hours = Math.floor(Math.random() * 24); 
    const Min = Math.floor(Math.random() * 60); 
    const Sec = Math.floor(Math.random() * 60); 

    return { Days, Hours, Min, Sec };
}
function createDealsItem(item, deals_brand,number) {
    const dealsItem = document.createElement('div');
    dealsItem.classList.add('deals__item');

    const dealsGroup1 = document.createElement('div');
    dealsGroup1.classList.add('deals__group');

    const dealsBrand = document.createElement('h3');
    dealsBrand.classList.add('deals__brand');
    dealsBrand.textContent = deals_brand;

    const dealsCategory = document.createElement('span');
    dealsCategory.classList.add('deals__category');
    dealsCategory.textContent = item.category;

    dealsGroup1.appendChild(dealsBrand);
    dealsGroup1.appendChild(dealsCategory);

    const dealsTitle = document.createElement('h4');
    dealsTitle.classList.add('deals__title');
    dealsTitle.textContent = item.itemName;

    const dealsPrice = document.createElement('div');
    dealsPrice.classList.add('deals__price', 'flex');

    const newPriceSpan = document.createElement('span');
    newPriceSpan.classList.add('new__price');
    newPriceSpan.textContent = item.itemPricenew;

    const oldPriceSpan = document.createElement('span');
    oldPriceSpan.classList.add('old__price');
    oldPriceSpan.textContent = item.itemPriceOld;

    dealsPrice.appendChild(newPriceSpan);
    dealsPrice.appendChild(oldPriceSpan);

    const dealsGroup2 = document.createElement('div');
    dealsGroup2.classList.add('deals__group');

    const dealsCountdownText = document.createElement('p');
    dealsCountdownText.classList.add('deals__countdown-text');
    dealsCountdownText.textContent = 'Hurry up! offer ends in:';

    const countdown = document.createElement('div');
    countdown.classList.add('countdown');

    let arr = ["Days", "Hours", "Min", "Sec"];

    for (let index = 0; index < 4; index++) {
        const countdownAmount = document.createElement('div');
        countdownAmount.classList.add('countdown__amount');

        const countdownPeriod = document.createElement('p');
        countdownPeriod.classList.add('countdown__period');

        countdownPeriod.id=arr[index]+number;
        switch (arr[index]) {
            case "Days":
                countdownPeriod.textContent = generateRandomCountdown().Days;
                break;

            case "Hours":
                countdownPeriod.textContent = generateRandomCountdown().Hours;
                break

            case "Min":
                countdownPeriod.textContent = generateRandomCountdown().Min;
                break

            case "Sec":
                countdownPeriod.textContent = generateRandomCountdown().Sec;
                break

        }


        const unit = document.createElement('span');
        unit.classList.add('unit');
        unit.textContent = arr[index];

        countdownAmount.appendChild(countdownPeriod);
        countdownAmount.appendChild(unit);

        countdown.appendChild(countdownAmount);

    }



    dealsGroup2.appendChild(dealsCountdownText);
    dealsGroup2.appendChild(countdown);

    const dealsBtn = document.createElement('div');
    dealsBtn.classList.add('deals__btn');

    const shopNowLink = document.createElement('a');
    shopNowLink.href = '#';
    shopNowLink.classList.add('btn', 'btn--md');
    shopNowLink.textContent = 'Shop now';

    dealsBtn.appendChild(shopNowLink);

    dealsItem.appendChild(dealsGroup1);
    dealsItem.appendChild(dealsTitle);
    dealsItem.appendChild(dealsPrice);
    dealsItem.appendChild(dealsGroup2);
    dealsItem.appendChild(dealsBtn);

    return dealsItem;
}

function updateCountdown(number) {
    const daysElement = document.getElementById('Days'+number);
    const hoursElement = document.getElementById('Hours'+number);
    const minutesElement = document.getElementById('Min'+number);
    const secondsElement = document.getElementById('Sec'+number);
  
    let days = parseInt(daysElement.textContent);
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
  
    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);
        return;
      }
  
      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) {
              days--;
            }
          }
        }
      }
  
      daysElement.textContent = days < 10 ? `0${days}` : days;
      hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
      minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000); 
  }
  

let shopItems = shuffleArray(items);

const uniqueCategories = getUniqueCategories(shopItems);


const categoriesWithImgFront = {};
uniqueCategories.forEach((category) => {
    const imgFront = getImgFrontByCategory(items, category);
    categoriesWithImgFront[category] = imgFront;
});

let catContainer = document.querySelector("#cat_container");
for (let index = 0; index < 7; index++) {
    let x = createCategory(Object.keys(categoriesWithImgFront)[index], Object.values(categoriesWithImgFront)[index]);
    catContainer.appendChild(x);
}

let featuredItems = shuffleArray(items);
let itemsContainer = document.querySelector("#featuredItems");

for (let index = 0; index < 8; index++) {
    let x = createItems(featuredItems[index], false);
    itemsContainer.appendChild(x)

}

let popularItems = shuffleArray(items);
let itemsContainer2 = document.querySelector("#popularItems");

for (let index = 0; index < 8; index++) {
    let x = createItems(popularItems[index], false);
    itemsContainer2.appendChild(x)

}

let newItems = shuffleArray(items);
let itemsContainer3 = document.querySelector("#newItems");

for (let index = 0; index < 8; index++) {
    let x = createItems(newItems[index], false);
    itemsContainer3.appendChild(x)

}

let newArritems = shuffleArray(items);
let newArr = document.querySelector("#newArrivals");
for (let index = 0; index < 10; index++) {
    let x = createItems(newArritems[index], true);
    newArr.appendChild(x);

}


let showcaseid = ["Hot", "special", "top", "trending"];
let showcaseTitle = ["Hot releases", "Special deals", "Top selling", "Trending"];
for (let index = 0; index < 4; index++) {
    let x = document.getElementById(showcaseid[index]);
    let showcaseItems = shuffleArray(items);
    const title = document.createElement('h3');
    title.classList.add("section__title");
    title.innerHTML = showcaseTitle[index];
    x.appendChild(title);
    for (let y = 0; y < 6; y++) {
        let stuff = createShowcaseItem(showcaseItems[y])
        x.appendChild(stuff);
    }

}

let deals = document.querySelector(".deals__container");
let dealitems = shuffleArray(items);
let dealTitle = ["Hot sale", "Get it now!"]
for (let index = 0; index < 2; index++) {
    let x = createDealsItem(dealitems[index], dealTitle[index],index+1);
    deals.appendChild(x);

}

updateCountdown(1);
updateCountdown(2);











