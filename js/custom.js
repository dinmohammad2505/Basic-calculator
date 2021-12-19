function addShow() {
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var num3 = Number(document.getElementById('num3').value);
	var num4 = Number(document.getElementById('num4').value);
	var num5 = Number(document.getElementById('num5').value);
	var add = num1 + num2 + num3 + num4 + num5;
	document.getElementById('add-result').innerHTML = add;
}

function subShow() {
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var num3 = Number(document.getElementById('num3').value);
	var num4 = Number(document.getElementById('num4').value);
	var num5 = Number(document.getElementById('num5').value);
	var sub = num1 - num2 - num3 - num4 - num5;
	document.getElementById('sub-result').innerHTML = sub;
}

function mulShow() {
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var num3 = Number(document.getElementById('num3').value);
	var num4 = Number(document.getElementById('num4').value);
	var num5 = Number(document.getElementById('num5').value);
	var mul = num1 * num2 * num3 * num4 * num5;
	document.getElementById('mul-result').innerHTML = mul;
}

function divShow() {
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var num3 = Number(document.getElementById('num3').value);
	var num4 = Number(document.getElementById('num4').value);
	var num5 = Number(document.getElementById('num5').value);
	var div = num1 / num2 / num3 / num4 / num5;
	document.getElementById('div-result').innerHTML = div;
}

function avgShow() {
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var num3 = Number(document.getElementById('num3').value);
	var num4 = Number(document.getElementById('num4').value);
	var num5 = Number(document.getElementById('num5').value);
	var avg = (num1 + num2 + num3 + num4 + num5) / 5;
	document.getElementById('avg-result').innerHTML = avg;
}
