
var numArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000]
var key = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "M"]
var roman = "";
function toRoman(num){
  for (var i=0; i < numArray.length; ++i){
    if(num < numArray[i] && num > 0){
      roman += key[i-1];
      num -= numArray[i-1];
      return toRoman(num)
    }else if (num === numArray[i] && num >0){
      num -= numArray[i];
      roman += key[i];
      return toRoman(num)
    }else if (num === 0){
      return roman;
    }
  };
};
 
//front end
$(document).ready(function(){
  $("#numInputForm").submit(function(event){
    event.preventDefault();
    var num = $("#numInput").val();
    //$("#romanNumeral").text(ifState(num));
    $("#romanNumeral").text(toRoman(num));
  });
});
