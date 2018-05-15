'user strict';
//GLOBAL VARBIABLES//
var allProducts = [];
var votes = [];
var names = [];
var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

var liEl1 = document.getElementById('product1-text');
var liEl2 = document.getElementById('product2-text');
var liEl3 = document.getElementById('product3-text');

var product1Index = 0;
var product2Index = 1;
var product3Index = 2;

var globalClicked = -1;
var result = document.getElementById('result');




function Products(src, name) {
    this.url = src;
    this.name = name;

    this.clicked = 0
    allProducts.push(this);

}
var bag = new Products('img/bag.jpg', 'bag');
var banana = new Products('img/banana.jpg', 'banana');
var bathroom = new Products('img/bathroom.jpg', 'bathroom');
var boots = new Products('img/boots.jpg', 'boots');
var breakfast = new Products('img/breakfast.jpg', 'breakfast');
var bubblegum = new Products('img/bubblegum.jpg', 'bubblegum');
var chair = new Products('img/chair.jpg', 'chair');
var cthulhu = new Products('img/cthulhu.jpg', 'cthulhu');
var dogDuck = new Products('img/dog-duck.jpg', 'dog-duck');
var dragon = new Products('img/dragon.jpg', 'dragon');
var pen = new Products('img/pen.jpg', 'pen');
var petSweep = new Products('img/pet-sweep.jpg', 'pet-sweep');
var scissors = new Products('img/scissors.jpg', 'scissors');
var shark = new Products('img/shark.jpg', 'shark');
var sweep = new Products('img/sweep.png', 'sweep');
var tauntaun = new Products('img/tauntaun.jpg', 'tauntaun');
var unicorn = new Products('img/unicorn.jpg', 'unicorn');
var usb = new Products('img/usb.gif', 'usb');
var waterCan = new Products('img/water-can.jpg', 'water-can');
var wineGlass = new Products('img/wine-glass.jpg', 'wine-glass');


imgEl1.addEventListener('click', function () {
    allProducts[product1Index].clicked++;
    chooseNewProducts();
})


imgEl2.addEventListener('click', function () {
    allProducts[product2Index].clicked++;
    chooseNewProducts();
})


imgEl3.addEventListener('click', function () {
    allProducts[product3Index].clicked++;

    chooseNewProducts();

})


function chooseNewProducts() {
    globalClicked++;
    product1Index = Math.floor(Math.random() * allProducts.length);
    product2Index = Math.floor(Math.random() * allProducts.length);
    product3Index = Math.floor(Math.random() * allProducts.length);

    while (product1Index === product2Index || product1Index === product3Index || product2Index === product3Index) {

        // if (product1Index === product3Index || product2Index === product3Index) {

        product1Index = Math.floor(Math.random() * allProducts.length);
        product2Index = Math.floor(Math.random() * allProducts.length);
        product3Index = Math.floor(Math.random() * allProducts.length);
    }

    imgEl1.src = allProducts[product1Index].url;
    imgEl2.src = allProducts[product2Index].url;
    imgEl3.src = allProducts[product3Index].url;

    productVotes();
}



chooseNewProducts();




function productVotes() {
    for (i = 0; i < 25; i++) {
        votes[i] = Products.allProducts.clicked;
        name[i] = Products.allProducts.name;

    }



}