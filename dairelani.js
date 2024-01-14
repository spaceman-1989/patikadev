let yaricap = prompt("lütfen dairenin yarıçapını giriniz");
let pi = 3.14

let alan = pi*yaricap;

let metin = `yariçapı ${yaricap} olan bir dairenin alani:  ${alan}`;
console.log(metin);

document.getElementById("alansonuc").innerHTML= metin;
