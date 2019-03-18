// BÀI 1
var sum = 1;
for (i=1; i<=5; i++) {
  sum = sum * i;
}
console.log(sum);



// BÀI 2 ( cach 1)
var str = 'hello'
var text = ''
for (i = str.length-1; i >=0; i--) {
  text += str[i];
}
console.log(text);



// Bai 3
var str_Number = '123';
var str = '';
function duplicate() {
  for (i = 1; i <=9; i++) {
    str += (str_Number + '-');
  }
  console.log(str + str_Number);
}



// Bai 4
function sap_xep (arr) {
	var newArr = arr.sort();
  for (i = 0; i < arr.length; i++) {
    newArr = i + '. ' + newArr[i];
  }
  document.write(newArr);
}



// Bai 5
var arr_Number = [5, 33, 57, 89, 61]
function so_du () {
	var newArr = [];
	for (i=0; i<arr_Number.length; i++) {
		newArr = arr_Number[i] % 2;
	}
	console.log(newArr);
}



// Bai 6
function sprint () {
	for(i=1; i<=100; i++) {
		document.write('<p style="color:red">' + i + '</p>');
		document.write('<p style="color:blue">' + (i+1) + '</p>');
	}
}