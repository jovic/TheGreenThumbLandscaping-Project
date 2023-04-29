let rate1 = document.getElementById("rate1");
let rate2 = document.getElementById("rate2");
let rate3 = document.getElementById("rate3");
let rate4 = document.getElementById("rate4");
let rate5 = document.getElementById("rate5");
let rate6 = document.getElementById("rate6");
let rate7 = document.getElementById("rate7");
let rate8 = document.getElementById("rate8");
let rate9 = document.getElementById("rate9");
let rate10 = document.getElementById("rate10");
let rate11 = document.getElementById("rate11");
let rate12 = document.getElementById("rate12");

let rate1T = document.getElementById("rate1-T");
let rate2T = document.getElementById("rate2-T");
let rate3T = document.getElementById("rate3-T");
let rate4T = document.getElementById("rate4-T");
let rate5T = document.getElementById("rate5-T");
let rate6T = document.getElementById("rate6-T");
let rate7T = document.getElementById("rate7-T");
let rate8T = document.getElementById("rate8-T");
let rate9T = document.getElementById("rate9-T");
let rate10T = document.getElementById("rate10-T");
let rate11T = document.getElementById("rate11-T");
let rate12T = document.getElementById("rate12-T");

let GT = document.getElementById("GT");

function updateText(e) {

    let r1 = rate1.value * 10.00;
    let r2 = rate2.value * 0.003;
    let r3 = rate3.value * 0.004;
    let r4 = rate4.value * 0.004;
    let r5 = rate5.value * 0.00;
    let r6 = rate6.value * 0.007;
    let r7 = rate7.value * 0.003;
    let r8 = rate8.value * 5.00;
    let r9 = rate9.value * 10;
    let r10 = rate10.value * 10.00;
    let r11 = rate11.value * 10.00;
    let r12 = rate12.value * 80.00;


    rate1T.value = r1;
    rate2T.value = r2;
    rate3T.value = r3;
    rate4T.value = r4;
    rate5T.value = r5;
    rate6T.value = r6;
    rate7T.value = r7;
    rate8T.value = r8;
    rate9T.value = r9;
    rate10T.value = r10;
    rate11T.value = r11;
    rate12T.value = r12;

    let gt = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10 + r11 + r12;
    GT.innerHTML = "$" + gt;
}