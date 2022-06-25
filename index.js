const btn1 = document.querySelector('.btn6')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')

console.log(btn1,btn2,btn3,btn4,btn5)


btn1.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }, false);


  btn2.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }, false);

  btn3.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "red";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }, false);

  btn4.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "grey";
    }, 1000);
  }, false);

  btn5.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 3000);
  }, false);