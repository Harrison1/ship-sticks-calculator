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

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'products.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===2000)) {
		var items = JSON.parse(request.response.responseText);
		console.log(items + "hello world");
	}
}

request.send();

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

