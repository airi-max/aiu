'use strict'

$(document).ready(function() {

  // $('button').click(function() {
  //   let randomNumber = Math.floor(Math.random() * 6);
  //   let random = $('#random');
  //   if (randomNumber === 0) {
  //     random.text("大吉");
  //   } else if (randomNumber === 1) {
  //     random.text("中吉");
  //   } else if (randomNumber === 2) {
  //     random.text("小吉");
  //   } else if (randomNumber === 3) {
  //     random.text("末吉");
  //   } else if (randomNumber === 4) {
  //     random.text("凶");
  //   } else {
  //     random.text("大凶");
  //   }
  // });



  
  // $('button').click(function() {
  //   let abc = Math.floor(Math.random()*random_items.length);
  //   $('#random').text(random_items[abc]);
  // });

  // let random_items = ["大吉", "中吉", "小吉", "凶"];
  // let btn = document.getElementById("btn");
  // let random_id = document.getElementById("random");
  // btn.addEventListener("click", function() {
  //   let efg = Math.floor(Math.random()*(random_items.length));
  //   random_id.innerHTML = random_items[efg];
  // });
  



  let btn = document.getElementById("btn");
  let random_a = document.getElementById("random");
  btn.addEventListener("click", function() {
    let abcde = Math.floor(Math.random() * 5);
    if (abcde === 1) {
      random_a.innerHTML = "大吉";
    } else if (abcde === 2) {
      random.innerHTML = "中吉";
    } else if (abcde === 3) {
      random.innerHTML = "小吉";
    } else {
      random.innerHTML = "末吉";
    } 
  });
const foo = 100,
      foo1 = 200,
      foo2 = 300;

alert(foo2);












});
