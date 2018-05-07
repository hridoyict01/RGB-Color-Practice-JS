var colors = ["rgb(255, 0, 0)",
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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


//Random selection of Resulting color
 function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
 }