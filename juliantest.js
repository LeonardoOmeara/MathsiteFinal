function dateToJulianNumber0(d) {
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var a = Math.floor((14 - month) / 12);
  var y = Math.floor(year + 4800 - a);
  var m = month + 12 * a - 3;
  var JDN =
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;
  return JDN;
}

function julianIntToDate0(JD) {
  var y = 4716;
  var v = 3;
  var j = 1401;
  var u = 5;
  var m = 2;
  var s = 153;
  var n = 12;
  var w = 2;
  var r = 4;
  var B = 274277;
  var p = 1461;
  var C = -38;
  var f = JD + j + Math.floor((Math.floor((4 * JD + B) / 146097) * 3) / 4) + C;
  var e = r * f + v;
  var g = Math.floor((e % p) / r);
  var h = u * g + w;
  var D = Math.floor((h % s) / u) + 1;
  var M = ((Math.floor(h / s) + m) % n) + 1;
  var Y = Math.floor(e / p) - y + Math.floor((n + m - M) / n);
  return new Date(Y, M - 1, D);
}

//Testing
//  let birthjul=dateToJulianNumber0(new Date(1999,08,29)); //Month is 0-based for javascript
//  let birthdate=julianIntToDate0(birthjul);
//  let todaydate=julianIntToDate0(todayjul);

//  console.log(birthjul);
//  console.log(birthdate.toString());
//  console.log(todayjul);
//  console.log(today.toString());
//  console.log(todayjul-birthjul)


const dateInput = document.querySelector("#date-input");
const subButton = document.querySelector("#submit-button");
const showDataCont = document.querySelector("#show-data");
const todaybox = document.querySelector("#today-box");
const birthdatebox = document.querySelector("#birthdate-box");
const ageindaysbox = document.querySelector("#ageindays-box");
const mathbirthdaybox = document.querySelector("#mathbirthday-box");
const todaytext = document.querySelector("#todaytext");
const birthtext = document.querySelector("#birthtext");
const agetext = document.querySelector("#agetext");

let today = new Date();
let todayjul = dateToJulianNumber0(today);

let birthdate;
let birthjul;
let birthdatefinal;
let ageindays;

let daysleft = 0;


let limit = 0;
let i = 0;
let nextmathbirthdate;

// console.log({
//    dateInput,
//    subButton,
//    showDataCont,
//  });

subButton.addEventListener("click", submit);

function submit() {
  if (dateInput.value == "") {
    alert("Can't put empty date:(");
  } else {
    // if(todaytext.textContent && birthtext.textContent && agetext.textContent){
    //   mathbirthdaybox.innerHTML = "";
    //   todaytext.textContent = "";
    //   birthtext.textContent = "";
    //   ageindaagetext.textContent = "";

    // }
    if( todaytext && birthtext && agetext ){
      todaytext.textContent = "";
      birthtext.textContent = "";
      agetext.textContent = "";
      mathbirthdaybox.textContent = "";
    }

    birthdate = dateInput.valueAsDate;

    birthjul = dateToJulianNumber0(birthdate);

    birthdatefinal = birthdate.toUTCString();
    todayfinal = today.toUTCString();

    ageindays = todayjul - birthjul;

    todaytext.innerHTML += `<p class="animate__animated animate__bounceIn">${todayfinal}</p>`
    birthtext.innerHTML += `<p class="animate__animated animate__bounceIn">${birthdatefinal}</p>`
    agetext.innerHTML += `<p class="animate__animated animate__bounceIn">${ageindays}</p>`


    evaluate(ageindays);
    mathbirthdaybox.innerHTML += `<p class="animate__animated animate__bounceIn">Your next math birthday is your: ${limit}-day-old birthday on ${nextmathbirthdate} date</p>`
    // showDataCont.innerHTML += `<p>Your Birthday is: \n ${birthdatefinal}</p>`;

    // console.log(birthdatefinal);
    // console.log(birthjul);
    // console.log(todayfinal);
    // console.log(todayjul);
    // console.log(todayjul-birthjul)

      // dateInput.value = "";  
  }
}

function evaluate(ageindays) {

  for (i; ageindays > 10 ** i; i++) {
    console.log(i);
  }

  limit = 10 ** i;
  //   console.log(birthjul, "esto es birthjul");
  daysleft = limit - ageindays;
  nextmathbirthdate = julianIntToDate0(todayjul + daysleft);

  //   console.log(nextmathbirthdate);
    console.log("Quedan:", daysleft, "dias", "para tu:", i, "Mathbirthday");
    console.log("Your next math birthday is your",limit,"-day-old birthday on",nextmathbirthdate," date");
   //  ageindays = 0;
    
  return nextmathbirthdate, limit, i, daysleft;
}

console.log(i, limit)
