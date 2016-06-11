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
var productSumArray = [];
var dStrings = ["length","width", "height", "weight"];

function calculate(length, width, height, weight) {
	if(length>0 && width>0 && height>0 && weight>0) {
		productArray = []
		var i;

		Object.keys(obj.products).forEach(function(key) {
			if (length <= obj.products[key].length) {
				productArray.push(obj.products[key]);
	        }
		});

		removeProduct(width, productArray, i, dStrings[1]);
		removeProduct(height, productArray, i, dStrings[2]);
		removeProduct(weight, productArray, i, dStrings[3]);

		if(productArray.length) {
			if(productArray.length >= 1) {
				var a = parseInt(productArray[0].length)+parseInt(productArray[0].width)+parseInt(productArray[0].height)+parseInt(productArray[0].weight);
				var index = 0;
				productSumArray = [];

				for(i=0; i <= productArray.length - 1; i++) {
						var s = parseInt(productArray[i].length)+parseInt(productArray[i].width)+parseInt(productArray[i].height)+parseInt(productArray[i].weight);
						productSumArray.push(s);
						if (s<a) {
							a=s;
							index=i;
						}
			    }
			} else {
				document.getElementById("answer").style.visibility = "visible";
				document.getElementById("answer").innerHTML = 'use this ' + productArray[index].name;
				document.getElementById("answer").className = "animateclass";
				document.getElementById("body-answer").innerHTML = 'use this ' + productArray[index].name;

			}

			console.log(a);
			console.log(productArray[index].name);
			document.getElementById("answer").style.visibility = "visible";
			document.getElementById("answer").innerHTML = 'use this ' + productArray[index].name;
			document.getElementById("answer").className = "animateclass";
			document.getElementById("body-answer").innerHTML = 'use this ' + productArray[index].name;

		} else {
			document.getElementById("error").style.visibility = "visible";
			document.getElementById("error").innerHTML = "Whoa!! We don't have any poducts that can carry that, try some other mesurements.";
		}
	} else {
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "Whoa!! all values must be greater than 0";
	}	

}

function calculateProduct() {
	if(document.getElementById('length-input').value && document.getElementById('width-input').value && document.getElementById('height-input').value && document.getElementById('weight-input').value) {
		document.getElementById("error").style.visibility = "hidden";
		document.getElementById("answer").style.visibility = "hidden";
		document.getElementById("answer").className = "";
		document.getElementById("body-answer").style.visibility = "hidden";
		document.getElementById("body-answer").className = "";

		var dimensions = [];
		var lengthValue = document.getElementById('length-input').value;
		var widthValue = document.getElementById('width-input').value;
		var heightValue = document.getElementById('height-input').value;
		var weightValue = document.getElementById('weight-input').value;
		dimensions.push(lengthValue, widthValue, heightValue, weightValue);

		calculate(dimensions[0], dimensions[1], dimensions[2], dimensions[3]);
		console.log(productArray);

	} else {
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "All fields are required";
	}

	setTimeout(function() { closeModal(); }, 5000);

}

function removeProduct(measurement, products, i, element) {
	i = productArray.length;
	if(i) {
		while(i--) {
			if (measurement > products[i][element]) {
				productArray.splice(i, 1);
	        }
		}
	} else {
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "Whoa!! We don't have any poducts that can carry that, try some other mesurements.";
	}
}

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("launch-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	document.getElementById('length-input').value = '';
	document.getElementById('width-input').value = '';
	document.getElementById('height-input').value = '';
	document.getElementById('weight-input').value = '';
	document.getElementById("error").style.visibility = "hidden";
	document.getElementById("answer").style.visibility = "hidden";
	document.getElementById("answer").className = "";
	document.getElementById("body-answer").style.visibility = "hidden";
	document.getElementById("body-answer").className = "";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
	modal.style.display = "none";
	if(document.getElementById("answer").style.visibility == "visible") {
			document.getElementById("body-answer").style.visibility = "visible";
			document.getElementById("body-answer").className = "animateclass";
	}
}


// function removeUnwanted(measurement, element) {
// 	var i = productArray.length;
// 	console.log("array length = " + i);

// 	while(i--) {
// 		console.log("i is at " + i);
// 		if (measurement > parseInt(productArray[i].width)) {
// 			productArray.splice(i, 1);
//         }
// 	}
// }

	// i = productArray.length;
	// console.log("array length = " + i);

	// while(i--) {
	// 	console.log("i is at " + i);
	// 	if (height > productArray[i].height) {
	// 		productArray.splice(i, 1);
 //        }
	// }

	// i = productArray.length;
	// console.log("array length = " + i);

	// while(i--) {
	// 	console.log("i is at " + i);
	// 	if (weight > productArray[i].weight) {
	// 		productArray.splice(i, 1);
 //        }
	// }