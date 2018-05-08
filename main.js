var numberOfSqures = 6;
var colors = generateRandomColors(numberOfSqures);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSqures = 3;
    colors = generateRandomColors(numberOfSqures);
    pickedColor = pickColor();
    console.log(pickedColor);
    console.log(colors);
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSqures = 6;
    colors = generateRandomColors(numberOfSqures);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});


var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numberOfSqures);
    //pick a random color from arry
    pickedColor = pickColor();
    //change all colors of squres
    colorDisplay.textContent = pickedColor;
    for ( var i=0;i<squares.length;i++ ) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;


for ( var i=0;i<squares.length;i++ ) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click event to squares

    squares[i].addEventListener("click", function() {
        //catch the color of clicked squares
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            
            resetButton.textContent = "Play again";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            var mes = "Try again";
            messageDisplay.textContent = mes;
        }
        
    });
}

function changeColor(color) {
    //loop throug all squres
    for( var i=0; i<squares.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}


//Random selection of final color
 function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
 }

 function generateRandomColors(number) {
     //make an arry depending on arry
     var arr = [];
     //add num random colors to arry
     for (var i=0; i<number;i++) {
         //get a random color and push into a arry
        arr.push(randomColor());
     }
     return arr;
     //return the arry with colors
     
 }

 function randomColor() {
     //pick a "red" from 0-255
     var r = Math.floor(Math.random() *256);
     //pick a "green" from 0-255
     var g = Math.floor(Math.random() *256);
     //pick a "blue" from 0-255
     var b = Math.floor(Math.random() *256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
 }