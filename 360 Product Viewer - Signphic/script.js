function formating(n){
    return n > 9 ? "" + n: "0" + n;
}

function updateTextInput(val) {
  formated = formating(val);  document.getElementById("image").src = "https://cdn.youtooz.com/360/mrbeast/v1/"+formated+".jpg";
}