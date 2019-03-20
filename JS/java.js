// FUNCTION
// BÀI 1
function binhphuong(x) {
  return x*x
}


// BÀI 2
function binhphuong_bai2(a, b, c) {
  return binhphuong(3*a + 2*b -c)
}


// BÀI 3
function cut(str) {
  var newStr = str.substr(0, 10);
  return newStr + '...'
}


// BÀI 4
function vietHoa(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


// BÀI 5
function sapXep(arr){
  var newArr = arr.sort(function(a,b){return a-b});
  return newArr[0]
}


// BÀI 6
function name(arr){
  var newArr = arr.sort();
  document.write(newArr[0] + '<br>');
  document.write(newArr[1] + '<br>');
  document.write(newArr[2] + '<br>');
  document.write(newArr[3] + '<br>');
  document.write(newArr[4] + '<br>');
}










// VÒNG LẶP
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









// ĐIỀU KIỆN, RẼ NHÁNH (PHẦN 1)
// BÀI 1
function check(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    if (a > b) {
      document.write(a);
    }
    if (b > a) {
      document.write(b);
    }
  }
}


// BÀI 2
function giaiThua(x){
  if (x > 0){
    var n = 1;
    for(i=x; i>=1; i--){
      n*=i
    }
    console.log(n)
  }
}


// BÀI 3
function mang_so(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++){
    if (arr[i]%2==0){
    newArr.push(arr[i]);
    }
  }
  console.log(newArr.sort(function(a, b){return b - a}));
}


// BÀI 4
function checking(name) {
  if (name != '' && name<=name.length)
}