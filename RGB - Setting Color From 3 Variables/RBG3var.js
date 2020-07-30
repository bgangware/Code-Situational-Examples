window.setTimeout(function() {
alert("Hello");

// Load a value into each of the RGB color numbers
// a is red, b is green and c is blue
var a = 20;
var b = 20;
var c = 200;

//var test1 = "rgb(20, 20, 200)"

// Load the RBG color numbers into a field that becomes the RGB color setting
var rgbSettings = 'rgb(' + a + ',' + b + ',' + c + ')'
console.log(rgbSettings);

// Load the text value whose color you will change
var textNum1 = 555;
var textNum2 = 999;

// Load the text and the color into the HTML
var H1var = document.querySelectorAll("span");
H1var[0].style.color = "pink";
H1var[0].innerHTML = textNum1;


//H1var[1].style.color = "rgb(200, 200, 200)";
//H1var[1].style.color = "rgb(a, b, c)";

// Load the text and the color into the HTML using the field containing the RGB color numbers
H1var[1].style.color = rgbSettings;
H1var[1].innerHTML = textNum2; 

//var testqa = document.querySelectorAll(".selall");
//testqa.style.backgroudColor = "blue";




}, 500);