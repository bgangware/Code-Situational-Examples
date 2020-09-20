window.setTimeout(function() {
alert("Hello Brand");
//$("h1").text("jQuery is Working"); 

var rowCount = 3;
var rowText = "Row " + rowCount;
console.log(rowText);


$("button").click(function() {
    alert("button clicked");
    rowCount = rowCount + 1;
    rowText = "Row " + rowCount;
    console.log(rowText); 
    $( "ul" ).append( "<li> Row Z</li>" );
  });

$("ul").on("click","li",function() {
    $(this).css("background","pink");
    varDisplayText =  $(this).text();
    console.log("You Clicked " + varDisplayText);
    }); 


}, 500);