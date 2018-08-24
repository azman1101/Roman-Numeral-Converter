function convertToRoman() {
  
  var x = document.getElementById("inputNum").value;
  
  var n = x, ans = "";
  
  if (x == "")
    document.getElementById("demo").innerHTML = "XLII";
  else if (isNaN(n))
    document.getElementById("demo").innerHTML = "Numbers only";
  else if (n > 3999)
    document.getElementById("demo").innerHTML = "Number is too big";
  else {
  
  // - - - THOUSANDTH - - - //
  while (n/1000 >= 1){
    n -= 1000;
    ans += "M";
  }
  
  // - - - HUNDREDTH - - - //
  if (n/900 >= 1){
    n -= 900;
    ans += "CM";
  }
  if (n/500 >= 1){
    n -= 500;
    ans += "D";
  }
  if (n/400 >= 1){
    n -= 400;
    ans += "CD";
  }
  while (n/100 >= 1){
    n -= 100;
    ans += "C";
  }
  
  // - - - TENTH - - - //
  if (n/90 >= 1){
    n -= 90;
    ans += "XC";
  }
  if (n/50 >= 1){
    n -= 50;
    ans += "L";
  }
  if (n/40 >= 1){
    n -= 40;
    ans += "XL";
  }
  while (n/10 > 1){
    n -= 10;
    ans += "X";
  }
  
  // - - - ONETH - - - //
  if (n/9 >= 1){
    n -= 9;
    ans += "IX";
  }
  if (n/5 >= 1){
    n -= 5;
    ans += "V";
  }
  if (n/4 >= 1){
    n -= 4;
    ans += "IV";
  }
  while (n/1 > 0){
    n -= 1;
    ans += "I";
  }
  
    document.getElementById("demo").innerHTML = ans;
  }

}