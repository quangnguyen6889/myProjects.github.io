// BÀI 1
function duplicate(str) {
  var newStr = ''
  for (i=1; i<=9; i++) {
    newStr += (str + '-')
  }
  console.log(newStr + str);
}



// BÀI 2
function giaiThua(x){
  var n = 1;
  for(i=x; i>=1; i--){
    n*=i
  }
  console.log(n)
}



// BÀI 3
function dao(str){
  var text = ''
  for (i = str.length-1; i >=0; i--) {
    text += str[i];
  }
  console.log(text);
}



// BÀI 4
function arrName(arr) {
  var newArr = arr.sort();
  for (i=0; i<arr.length; i++) {
    document.write((i+1) + '. ' + (newArr[i]+'<br>'))
  }
}



// BÀI 5
function so_du(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++) {
    newArr.push(arr[i]%2);
  }
  console.log(newArr);
}



// BÀI 6
function sprint() {
	for(i=1; i<=100; i+=2) {
		document.write('<p style="color:red">' + i + '</p>');
		document.write('<p style="color:blue">' + (i+1) + '</p>');
	}
}