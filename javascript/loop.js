/* BÀI 1
Cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số lên 10 lần, 
ngăn cách nhau bởi ký tự "-". 
Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".
*/

function duplicate(str) {
  var newStr = ''
  for (i=1; i<=9; i++) {
    newStr += (str + '-')
  }
  console.log(newStr + str);
}



/* BÀI 2 
Cho 1 số nguyên n. Viết hàm tính n giai thừa (n!). 
Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
*/

function giaiThua(x){
  var n = 1;
  for(i=x; i>=1; i--){
    n*=i
  }
  console.log(n)
}



/*BÀI 3 
Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". 
Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.
*/

function dao(str){
  var text = ''
  for (i = str.length-1; i >=0; i--) {
    text += str[i];
  }
  console.log(text);
}



/*BÀI 4. 
Cho 1 mảng tên của n học viên. 
Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái 
và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
*/

function arrName(arr) {
  var newArr = arr.sort();
  for (i=0; i<arr.length; i++) {
    document.write((i+1) + '. ' + (newArr[i]+'<br>'))
  }
}



/* BÀI 5
Cho 1 mảng các số. 
Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số 
trong mảng cũ cho 2. 
Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. 
Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
*/

function so_du(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++) {
    newArr.push(arr[i]%2);
  }
  console.log(newArr);
}



/* BÀI 6
Viết function in ra màn hình các số từ 1 đến 100. 
Sao cho những giá trị là chẵn sẽ có màu xanh, 
những giá trị là lẻ có màu đỏ.
*/

function sprint() {
	for(i=1; i<=100; i+=2) {
		document.write('<p style="color:red">' + i + '</p>');
		document.write('<p style="color:blue">' + (i+1) + '</p>');
	}
}