const list = document.getElementsByClassName("horizantal__sub__menu")[0];
const icon = document.getElementsByClassName("vertical__icon")[0];
const iconClose = document.getElementsByClassName("vertical__icon__close")[0];


function myNavDisplayOpen() {

    list.style.display = "block";
    icon.style.display = "none";
    iconClose.style.display = "block";
    slider.style.filter = "brightness(50%)";
}

function myNavDisplayClose() {
    list.style.display = "none";
    icon.style.display = "block";
    iconClose.style.display = "none";
    slider.style.filter = "brightness(100%)";

}

icon.addEventListener("click", myNavDisplayOpen);
iconClose.addEventListener("click", myNavDisplayClose);

const iconCategory = document.getElementsByClassName("icon__category")[0];
const listCategory = document.getElementsByClassName("horizantal__sub__list")[0];

function myListCategory() {

    listCategory.style.display = "block";

}

iconCategory.addEventListener("click", myListCategory);

function hideList() {

    listCategory.style.display = "none";

}

//Add to Cart

const cartIcon = document.getElementById("card__icon");
const card = document.querySelector(".card");
const closeCart = document.getElementById("close__card");
const wishlistCard = document.getElementById("card__icons");
const wishlistCardClose = document.getElementById("close__card__wishlist");
const wishlist = document.querySelector(".card__wishlist");


wishlistCard.addEventListener("click", () => {
    wishlist.classList.add("active");
});


wishlistCardClose.addEventListener("click", () => {
    wishlist.classList.remove("active");
});

cartIcon.addEventListener("click", () => {
    card.classList.add("active");
});


closeCart.addEventListener("click", () => {
    card.classList.remove("active");
});

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start)
} else {
    start();
}

function start() {


    addEvents();
}


function update() {


    addEvents();
    updateTotal();
}



function updateTotal() {
    let cartBoxes = document.querySelectorAll(".card_mini_details");
    const totalElement = card.querySelector(".subtotal_money");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".money");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".quantity").value;
        total += price * quantity;


    });
    total = total.toFixed(2);
    totalElement.innerHTML = "$" + total;
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();

}

function handle_removeCartItem() {
    this.parentElement.remove();

    itemsAdded = itemsAdded.filter(el => el.title != this.parentElement.querySelector(".product_name").innerHTML);
    update();
}


function handle_buyOrder() {
    if (itemsAdded.length <= 0) {
        alert("There is no order place yet! \n Please make an order first!");
        return;
    }

    const cartContent = card.querySelector(".card_mini");
    cartContent.innerHTML = "";
    alert("Your order is Placed Successfully :)");
    itemsAdded = []


    update();
}



function addEvents() {
    let cartRemove_btn = document.querySelectorAll(".close_item");
    cartRemove_btn.forEach(btn => {
        btn.addEventListener("click", handle_removeCartItem)
    });

    let cartQuantity_inputs = document.querySelectorAll(".quantity");
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity)
    });
    
    let addCart_btns = document.querySelectorAll(".btn__add");

    addCart_btns.forEach(btn => {
        btn.addEventListener("click", handle_addCardItem)
    });

    const buy_btn = document.querySelector(".check_btn");
    buy_btn.addEventListener("click", handle_buyOrder)

}



let itemsAdded = [];

function handle_addCardItem() {
    let product = this.parentElement;
    let title = product.querySelector(".name").innerHTML;
    let price = product.querySelector(".price_value").innerHTML;
    let imgSrc = product.querySelector(".content_image").src;
    console.log(title, price, imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    if (itemsAdded.find(el => el.title == newToAdd.title)) {
        alert("This Item already Exist!");
        return;
    } else {
        itemsAdded.push(newToAdd);
    }

    let cartBoxElement = CartBoxComponent(title, price, imgSrc);

    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = card.querySelector(".card_mini");
    cartContent.appendChild(newNode);

    update();

}


function CartBoxComponent(title, price, imgSrc) {
    return `
            <ul class="card_mini">
            <li class="card_mini_details">
                <img src=${imgSrc} alt="">
                <div class="product_item">
                    <div class="product_list">
                        <a href="#" class="product_name">${title}</a>
                    </div>
                    <div class="quantity_card">
                        <div class="info">
                            <span class="money">${price}</span>
                         </div>
                        <div class="group_quantity_card">
                            <input type="number" value="1" class="quantity">
                         </div>
                    </div>
                </div>
                <a href="#" class="close_item"><i class='bx bx-x'></i></a>
            </li>

        </ul>`
}





const btnLeft = document.getElementById("btn__left");
const btnRight = document.getElementById("btn__right");
const slider = document.querySelector(".slider");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const sales = document.querySelector(".sales");


let index = 0;

const images = ["slideimg1.webp", "slideimg2.webp", "slideimg3.webp"];
const heading = ["SALE 30% OFF", "Sport Editon", "SALE 20% OFF"];
const description = ["FUTURED FOOTBALL BOOTS", "BEST CHOICE OF THE YEAR", "SAMSUNG GALAXY BUDS"];
const caption = ["DISCOUNT 30% ON PRODUCTS & FREE SHIPPING", "DISCOUNT 20% ON PRODUCTS & FREE SHIPPING", "TOP QUALITY EARBUDS & ACCESSORIES"]


function slide(index) {
    slider.style.backgroundImage = `url(./img/${images[index]})`
    title.innerHTML = heading[index];
    subtitle.innerHTML = description[index];
    sales.innerHTML = caption[index];
}

btnLeft.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }

    slide(index);
})

btnRight.addEventListener("click", () => {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }

    slide(index);
})










const products = [
    {
        id: 0,
        img: "./img/1.webp",
        name: "Anker Soundcore Life Q20 Hybrid",
        price: 57.77,
        isSold: 85,
        inStock: 15,
        oldPrice: 80.38
    },
    {
        id: 1,
        img: "./img/2.webp",
        name: "Bluetooth Headphones Over Ear",
        price: 80.38,
        isSold: 85,
        inStock: 15,
        oldPrice: 102.99
    },
    {
        id: 2,
        img: "./img/3.webp",
        name: "New iPad Air 128 GB Storage Black 2022",
        price: 40.23,
        isSold: 85,
        inStock: 15,
        oldPrice: 109.95
    },
    {
        id: 3,
        img: "./img/4.webp",
        name: "Blue G9 2020 Battery Unlocked",
        price: 41.03,
        isSold: 85,
        inStock: 15,
        oldPrice: 57.77
    },
    {
        id: 4,
        img: "./img/5.webp",
        name: "Somic G951 pink Gaming Headset",
        price: 195.93,
        isSold: 85,
        inStock: 15,
        oldPrice: 209.33
    },
    {
        id: 5,
        img: "./img/6.webp",
        name: "Apobob Black Shark 3 Gaming Phone",
        price: 80.38,
        isSold: 85,
        inStock: 15,
        oldPrice: 0

    },
    {
        id: 6,
        img: "./img/7.webp",
        name: "Bluetooth Headphones Over Ear",
        price: 133.13,
        isSold: 85,
        inStock: 15,
    },
    {
        id: 7,
        img: "./img/8.webp",
        name: "Smart watch Space Aluminum",
        price: 175.84,
        isSold: 85,
        inStock: 15,
        oldPrice: 184.21
    },
    {
        id: 8,
        img: "./img/9.jpg",
        name: "New Ipad Air 128 GB Storage Black 2022",
        price: 37.68,
        isSold: 85,
        inStock: 15,

    }

]

const container = document.querySelectorAll(".products");

products.map((item) => {

    const content = `
    <div class="products">
            <div class="product">
                <div class="card">
                    <div class="card__content">
                        <div class="image">
                            <img src=${item.img} alt="" class="content_image">
                        </div>
                        <div class="icons">
                            <div class="sales__icon">
                                <h6 class="value">-22<span class="percent">%</span></h6>
                            </div>
                            <div class="follow__icons">
                                <ul class="follow__icons__info">
                                    <li class="list">
                                        <a href="#"><i class="fa-sharp fa-solid fa-eye"></i></a>
                                    </li>
                                    <li class="list">
                                        <a href="#"><i class="fa-solid fa-layer-group"></i></a>
                                    </li>
                                    <li class="list">
                                        <a href="#"><i class="fa-regular fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="container">
                            <div class="product__name">
                                <h2 class="name">${item.name}</h2>
                            </div>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <div class="prices">
                                <h6 class="price"><span class="price_value">${item.price}</span></h6>
                                <h6 class="old-price">$<span class="old-priceValue">${item.oldPrice}</span></h6>
                            </div>
                        </div>

                        <div class="product__stock">
                            <div class="product__stock__sold">
                                <span class="label">Sold:</span>
                                <span class="value">${item.isSold}</span>
                            </div>
                            <div class="product__stock__available">
                                <span class="label">Available:</span>
                                <span class="value">${item.inStock}</span>
                            </div>
                        </div>

                        <button class="btn__add">Add to card</button>

                    </div>
                </div>
            </div>
        </div>`;

    // container.innerHTML += content;
    container.forEach((product)=>{
        product.innerHTML+=content;
    })
});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const search = () => {
    const searchbox = document.querySelector(".inpt").value.toUpperCase();
    const storeItems = document.querySelector(".products");
    const product = document.querySelectorAll(".card__content");
    const pname = storeItems.getElementsByTagName("h2");


    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";

            }
        }
    }
}




window.onscroll = function () { myFunction() };

var header = document.querySelector(".header__bottem");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};


const countDownDate = new Date("february 12, 2023 21:00:00").getTime();
const result = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(result);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }

}, 1000);

