//back end
var numArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
var key = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]




//front end
$(document).ready(function(){
  $("#numInputForm").submit(function(event){
    event.preventDefault();
    var num = $("#numInput").val();
  });
});
