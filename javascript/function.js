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