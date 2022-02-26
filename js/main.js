let elopen1 = document.getElementById('openBtn');

let elshowcontent1 = document.getElementById('modallefthome');

let elclose1 = document.getElementById('closemodalbtn');

elopen1.addEventListener('click', function(){
  elshowcontent1.classList.add('display');
})

elclose1.addEventListener('click', function(){
  elshowcontent1.classList.remove('display');
})


let elopen2 = document.getElementById('openBtn2');

let elshowcontent2 = document.getElementById('modalleftshop');

let elclose2 = document.getElementById('closemodalbtnshop');

elopen2.addEventListener('click', function(){
  elshowcontent2.classList.add('display2');
})

elclose2.addEventListener('click', function(){
  elshowcontent2.classList.remove('display2');
})



let elopen3 = document.getElementById('openBtn3');

let elshowcontent3 = document.getElementById('modalleftpages');

let elclose3 = document.getElementById('closemodalbtnpages');

elopen3.addEventListener('click', function(){
  elshowcontent3.classList.add('display3');
})

elclose3.addEventListener('click', function(){
  elshowcontent3.classList.remove('display3');
})
