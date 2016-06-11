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

   var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var data = '{ "products": [' +
    '{"name": "Small Package", "type": "Golf", "length": 48, "width": 14, "height": 12, "weight": 42},' +
    '{"name": "Large Package", "type": "Golf", "length": 52, "width": 16, "height": 14, "weight": 56},' +
    '{"name": "Extra Large Package", "type": "Golf", "length": 56, "width": 18, "height": 16, "weight": 70},' +
    '{"name": "Carry On", "type": "Luggage", "length": 25, "width": 15, "height": 7, "weight": 25},' +
    '{"name": "Checked Bag", "type": "Luggage", "length": 26, "width": 16, "height": 22, "weight": 50},' +
    '{"name": "Oversized Bag", "type": "Luggage", "length": 41, "width": 11, "height": 24, "weight": 72},' +
    '{"name": "Ski Bag", "type": "Ski", "length": 72, "width": 8, "height": 10, "weight": 25},' +
    '{"name": "Snowboard Bag", "type": "Ski", "length": 62, "width": 14, "height": 8, "weight": 25},' +
    '{"name": "Double Ski Bag", "type": "Ski", "length": 80, "width": 10, "height": 12, "weight": 40},' +
    '{"name": "Double Snowboard Bag", "type": "Ski", "length": 70, "width": 14, "height": 12, "weight": 40},' +
    '{"name": "Snowboot Bag", "type": "Ski", "length": 25, "width": 15, "height": 7, "weight": 25} ]}';

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "products.json", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     // innerText does not let the attacker inject HTML elements.
//     var my_JSON_object = JSON.parse(xhr.responseText);
//     console.log(my_JSON_object);
//     console.log(my_JSON_object.products[0].name);
//   }
// }
// xhr.send();

var obj = JSON.parse(data);
// console.log(obj.products);
var productArray = [];
var productLengthArray = [];
var productWidthArray = [];
var productHeightArray = [];
var productWeightArray = [];

function calculate(length, width) {
	productArray = []

	Object.keys(obj.products).forEach(function(key) {
		if (length <= obj.products[key].length) {
			productArray.push(obj.products[key]);
        }
	});

	var i = productArray.length;
	console.log("array length = " + i);

	while(i--) {
		console.log("i is at " + i);
		if (width > parseInt(productArray[i].width)) {
			productArray.splice(i, 1);
        }
	}

	// Object.keys(productArray).forEach(function(key) {
		
	// 	while(i--)
	// 	if (width > parseInt(productArray[i].width)) {
	// 		console.log(productArray[i].width);
 //        }
	// });
}

function calculateProduct() {
	var dimensions = [];
	var lengthValue = document.getElementById('length-input').value;
	var widthValue = document.getElementById('width-input').value;
	var heightValue = document.getElementById('height-input').value;
	var weightValue = document.getElementById('weight-input').value;
	dimensions.push(lengthValue, widthValue, heightValue, weightValue);
	// console.log(dimensions);
	document.getElementById('user-length-text').innerHTML = lengthValue;
	document.getElementById('user-width-text').innerHTML = widthValue;
	document.getElementById('user-height-text').innerHTML = heightValue;
	document.getElementById('user-weight-text').innerHTML = weightValue;

	calculate(dimensions[0], dimensions[1]);
	console.log(productArray);
}

function spliceit() {
	productArray.splice(2,1);
	console.log(productArray);
}

