const cartIcon = document.querySelector("#cart__icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click",() => {
    cart.classList.add("active");
})

closeCart.addEventListener("click",() => {
    cart.classList.remove("active");
})

if(document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded",start);
}else{
    start();
}

function start(){
addEvents()

}

function update(){
addEvents();
updateTotaL();
    
}


function addEvents(){

    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click",handleRemoveItem);
    });

    let cartQuantityInputs = document.querySelectorAll(".cart-quantity");
    cartQuantityInputs.forEach(input => {
        input.addEventListener("change",handleChangeQuantity)
    })

    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach(btn => {
        btn.addEventListener("click",handdleAddCartItem)
    })

    const buyBtn= document.querySelector(".btn-buy");
    buyBtn.addEventListener("click",handleBuyOrder);
}

function handleBuyOrder(){
    if(itemsAdded.length<=0){
        alert("Please make an order");
        return;
    }

    const cartContent = document.querySelector(".cart-content")
    cartContent.innerHTML = "";
    alert("Successfully:)");
    itemsAdded = [];

    update();
}

let itemsAdded = [];

function handdleAddCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title,price,imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc
    }

if(itemsAdded.find(el => el.title == newToAdd.title)){
    alert("This item already exist!");
    return;
}else{
    itemsAdded.push(newToAdd);
}


    let cartBoxElement = CartBoxElement(title,price,imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    let cartContent = cart.querySelector(".cart-content")
    cartContent.appendChild(newNode);

    update();
}

function CartBoxElement(title,price,imgSrc){
    return `
    <div class="cart-box">
                        <img src="${imgSrc}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- REMOVE CART -->
                        <i class='bx bxs-trash-alt cart-remove'></i>
                    </div>`
}



function handleRemoveItem(){
    this.parentElement.remove();

   itemsAdded = itemsAdded.filter(el => el.title !=  this.parentElement.querySelector(".cart-product-title").innerHTML);
    update();
}

function handleChangeQuantity(){
    if(isNaN(this.value) || this.value<1){
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

function updateTotaL(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

total = total.toFixed(2);
    totalElement.innerHTML = "$" + total;
}

