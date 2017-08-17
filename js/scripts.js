//back end
var numArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
var key = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]

//input is a number and string and will return a string
// function howManyTimesToAdd(howManyTimes, StringToAdd){
//     if(howManyTimes>0){
//       roman = StringToAdd + roman;
//       //alert(string);
//       howManyTimes -= 1;
//       //alert(howManyTimes);
//       return howManyTimesToAdd(howManyTimes, StringToAdd);
//     }else{
//     	//alert("this is the final string " + string)
//     	return roman;
//     }
// }
//
//
// function toRoman(num){
//   var roman = "";
//   var numAtIndex;
//   var remainder;
//   var finalString;
//   for (var i=0; i<numArray.length; ++i){
//     if(num < numArray[i]){
//       numAtIndex = numArray[i-1];
//       remainder = num % numAtIndex;
//       if(remainder > 0){
//         roman = roman + key[i -1];
//         num -= remainder;
//         return toRoman(num);
//       }else if(remainder === 0){
//         dividedNum = num/numAtIndex;
//         numeralsToAdd = key[i-1];
//         finalString = howManyTimesToAdd(dividedNum/numeralsToAdd);
//       }
//     }
//   }
// }


// function ifState(num){
//   for (var i=0; i<numArray.length; ++i){
//     if(num > numArray[i]){
//       alert("inside the if");
//       num -= numArray[i];
//       alert(num);
//       roman = roman + key[i];
//       alert(roman);
//     }else{
//       alert("it returned")
//       return 0;
//     }
//   }
// }
var roman = "";

function toRoman(num){
  for (var i=0; i < numArray.length; ++i){
    if(num < numArray[i] && num > 0){
      num -= numArray[i-1];
      roman += key[i-1];
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
