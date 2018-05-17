'user strict';
//GLOBAL VARBIABLES//
var allProducts = [];
var votes = [];
var productName = [];


var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

var liEl1 = document.getElementById('product1-text');
var liEl2 = document.getElementById('product2-text');
var liEl3 = document.getElementById('product3-text');

var product1Index = 0;
var product2Index = 1;
var product3Index = 2;

var globalClicked = 0;
var fieldsetEl = document.getElementById('eventcounter');
var resultTb = document.getElementById('result');

var chartDrawn = false;

//constructor allproducts//
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



//Event listener//
fieldsetEl.addEventListener('click', fieldCallback);

function fieldCallback(Event) {
    checkGlobalClicked();
    console.log(event);
    if (event.target.id) {
        globalClicked++;
        // allProducts[event.target.id].name++;
        
        //local storage //
        runLocalStorage();
        //reroll new products//
        chooseNewProducts();
    } else { alert('Click on THE IMAGE!'); }
}




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
    // globalClicked++;
    product1Index = Math.floor(Math.random() * allProducts.length);
    product2Index = Math.floor(Math.random() * allProducts.length);
    product3Index = Math.floor(Math.random() * allProducts.length);

    while (product1Index === product2Index || product1Index === product3Index || product2Index === product3Index) {
        // console.log('show duplicate');
        // if (product1Index === product3Index || product2Index === product3Index) {

        product1Index = Math.floor(Math.random() * allProducts.length);
        product2Index = Math.floor(Math.random() * allProducts.length);
        product3Index = Math.floor(Math.random() * allProducts.length);
    }

    imgEl1.src = allProducts[product1Index].url;
    imgEl2.src = allProducts[product2Index].url;
    imgEl3.src = allProducts[product3Index].url;
}
// productVotes();


function renderResults() {
    for (var i in allProducts) {
        var newliTd = document.createElement('td');
        newliTd.textContent = allProducts[i].name + ' clicked: ' + allProducts[i].clicked + ' times.';
        resultTb.appendChild(newliTd);
    }

}


function checkGlobalClicked() {
    if (globalClicked === 24) {
        renderResults();
        // console.log(globalClicked);

        fieldsetEl.removeEventListener('click', fieldCallback);

        productVotes();

        // retrieveStorage();
    }
}
chooseNewProducts();


/////set data to array///////

function productVotes() {
    for (i = 0; i < allProducts.length; i++) {
        votes[i] = allProducts[i].clicked;
        productName[i] = allProducts[i].name;

    }

    /////////////////// Draw chart///////////////////////


    function drawChart() {
        var ctx = document.getElementById('chart').getContext('2d');
        voteChart = new Chart(ctx, {
            type: 'polarArea',
            data: data,
            options: {
            }
        })
        chartDrawn = true;
    }
    //DATA FROM ARRAY//
    var data = {
        labels: productName,
        datasets: [
            {
                data: votes,
            }]
    }


    var data = {
        labels: productName, // titles array we declared earlier
        datasets: [{
            data: votes, // votes array we declared earlier
            backgroundColor: [
                'bisque',
                'darkgray',
                'burlywood',
                'lightblue',
                'navy',
                'peach',
                'orange',
                'amber',
                'yellow',
                'olive',
                'black',
                'cyan',
                'azure',
                'indigo',
                'teal',
                'lime',
                'red',
                'sky blue',
                'gold',
                'silver',
                'blue'
            ],
            hoverBackgroundColor: [
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple',
                'purple'
            ]
        }]
    };

    drawChart();
}
//////////LOCAL STORAGE////////////////

function runLocalStorage() {
     
    localStorage.setItem('allProducts', JSON.stringify(allProducts));

}

function retrieveStorage() {
    localStorage.getItem('allProducts');
    console.log('retrieveStorage', JSON.parse(retrieveStorage));
}