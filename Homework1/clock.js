let myName = prompt("İsminizi giriniz:");
document.querySelector("#myName").innerHTML = myName;

function NumbertoString() {
  let today = new Date().getDay();
  if (today == 1) {
    today = "Pazartesi";
    console.log(today);
    return today;
  } else if (today == 2) {
    today = "Salı";
    console.log(today);
    return today;
  } else if (today == 3) {
    today = "Çarşamba";
    console.log(today);
    return today;
  } else if (today == 4) {
    today = "Perşembe";
    console.log(today);
    return today;
  } else if (today == 5) {
    today = "Cuma";
    console.log(today);
    return today;
  } else if (today == 6) {
    today = "Cumartesi";
    console.log(today);
    return today;
  } else if (today == 7) {
    today = "Pazar";
    console.log(today);
    return today;
  }
}

var span = document.getElementById("myClock");

function showTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2) +
    " " +
    NumbertoString();
}

setInterval(showTime, 1000);

document.querySelector("#darkButton").addEventListener("click", darkMode);
function darkMode() {
  document.querySelector("body").style.backgroundColor = "black";
}
document.querySelector("#whiteButton").addEventListener("click", whiteMode);
function whiteMode() {
  document.querySelector("body").style.backgroundColor = "white";
}
