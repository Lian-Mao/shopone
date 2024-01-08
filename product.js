

import { items } from './data.js';

function imgGallery(firstImg){
    const mainImg= document.querySelector(".details__img"),
    smallImg= document.querySelectorAll(".details__small-img");

    smallImg.forEach((img)=>{
        img.addEventListener('mouseover',function(){
            mainImg.src= this.src;
         
        })

        img.addEventListener('mouseout',function(){
            console.log('out');
            document.querySelector(".details__img").src=firstImg;
      
        })
    })
}
function discount(priceold,pricenew){
   const oldp= parseFloat(priceold.split("$")[1]);
    const newp=parseFloat(pricenew.split("$")[1]);
    const discountp=((oldp- newp) / oldp) * 100;

    return discountp.toFixed(2);
}

function createList(warranty,delivery,policy){
    const lists=[warranty+" warranty",delivery,policy];
    const icons=["crown","refresh","credit-card"];
    const mainList= document.querySelector(".product__list");
    let index=0;
    console.log(warranty);
    if(warranty=="-"){
index=1;
    }
    for ( index; index < lists.length; index++) {
        if(lists[index]!="-"){
            const icon=document.createElement("i");
            icon.classList.add("bx",`bx-${icons[index]}`);

            const title=document.createElement("li");
            title.appendChild(icon);
            title.classList.add("list__item","flex");
            
            title.innerHTML=(title.innerHTML)+lists[index];

            mainList.appendChild(title);
        }    
    }
}

function colors(colors){
const main= document.querySelector(".color__list");
    for (let index = 0; index < colors.length; index++) {
        const list=document.createElement("li");
        const a= document.createElement("a");
        a.classList.add("color__link");
        a.style.backgroundColor=colors[index];
        a.style.borderColor="rgb(0,0,0)";
        a.style.borderWidth="1px";
        a.style.borderStyle="solid";

        list.appendChild(a);
        main.appendChild(list);
     }  
}

function productSize(size){
if(size!="-"){
const sizeArr= size.split(";");
const main= document.querySelector(".size__list");
    for (let index = 0; index < sizeArr.length; index++) {
        const list=document.createElement("li");
        const a= document.createElement("a");
        if(index==0){
            a.classList.add("size__link","size-active");
        }
        else{
        a.classList.add("size__link");
        }

        a.innerHTML=sizeArr[index];
        list.appendChild(a);
        main.appendChild(list);
    }
  
    
  
}
else{
    document.querySelector(".details__size-title").innerHTML="";
}
}

function smallImgs(imglist) {
    const main= document.querySelector(".details__small-images");
    for (let index = 0; index < imglist.length; index++) {
        const img=document.createElement("img");
        img.src=imglist[index];
        img.classList.add("details__small-img");
        
        main.append(img);
    }


  }

function removeActiveClass() {
    (document.querySelectorAll('.size__link')).forEach(button => {
      button.classList.remove('size-active');
    });
  }



const searchParams = new URLSearchParams(window.location.search);
let productInfo = items[parseInt(searchParams.get("productId")) - 1];
document.querySelector(".productName").innerHTML=productInfo.itemName;
document.querySelector(".details__title").innerHTML=productInfo.itemName;
(document.querySelector(".details__brand")).querySelector("span").innerHTML=productInfo.brand; 
document.querySelector(".new__price").innerHTML=productInfo.itemPricenew;
document.querySelector(".old__price").innerHTML=productInfo.itemPriceOld;
document.querySelector(".save__price").innerHTML= discount(productInfo.itemPriceOld,productInfo.itemPricenew)+"% off";
document.querySelector(".short__description").innerHTML=productInfo.itemDesc;
document.querySelector(".details__action").style.visibility="visible";

document.querySelector(".details__img").src=productInfo.imgFront;
smallImgs(productInfo.imgBack);
imgGallery(document.querySelector(".details__img").src);

createList(productInfo.itemWarranty,productInfo.itemDelivery,productInfo.itemPolicy);
colors(productInfo.itemColor);
productSize(productInfo.itemSize);

(document.querySelectorAll('.size__link')).forEach(button => {
    button.addEventListener('click', function() {
      removeActiveClass();
      this.classList.add('size-active');
    });
  });

  document.querySelector(".SKU").innerHTML= document.querySelector(".SKU").innerHTML+productInfo.itemSKU;
  document.querySelector(".Tag").innerHTML= document.querySelector(".Tag").innerHTML+productInfo.category;
  document.querySelector(".Avail").innerHTML= document.querySelector(".Avail").innerHTML+productInfo.itemAvailability+" quantities in stock";

