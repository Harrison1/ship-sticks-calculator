// var userHasScrolled = false;
// var divtop = document.getElementById('unscrolled-menu-wrapper');

// document.getElementById("unscrolled-menu-wrapper").style.visibility = "visible";
// document.getElementById("navbar-menu").style.visibility = "hidden";
// var scrollPosition = document.body.scrollTop;  

// window.onscroll = function (e)
// {
//     userHasScrolled = true;
//     scrollPosition = document.body.scrollTop;  
//     if (scrollPosition >= 0 && scrollPosition <= 20) { 
//     	navControl();
//     }
// }

   // var request = new XMLHttpRequest();
   // request.open("GET", "products.json", false);
   // request.send(null);
   // var my_JSON_object = JSON.parse(request.responseText);
   // console.log(my_JSON_object);

 var xhr = new XMLHttpRequest();
xhr.open("GET", "products.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    var my_JSON_object = JSON.parse(xhr.responseText);
    console.log(my_JSON_object);
    console.log(my_JSON_object.products[0].name);
  }
}
xhr.send();

function calculateProduct() {
	console.log("yoooooo");
	var dimensions = [];
	var lengthValue = document.getElementById('length-input').value;
	var widthValue = document.getElementById('width-input').value;
	var heightValue = document.getElementById('height-input').value;
	var weightValue = document.getElementById('weight-input').value;
	dimensions.push(lengthValue, widthValue, heightValue, weightValue);
	console.log(dimensions);
	document.getElementById('user-length-text').innerHTML = lengthValue;
	document.getElementById('user-width-text').innerHTML = widthValue;
	document.getElementById('user-height-text').innerHTML = heightValue;
	document.getElementById('user-weight-text').innerHTML = weightValue;
}

