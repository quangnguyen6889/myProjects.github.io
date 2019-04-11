// ĐIỀU KIỆN, RẼ NHÁNH (PHẦN 1)
/* Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, 
kiểm tra xem 2 tham số có phải là number không 
và tìm ra số lớn nhất trong 2 số đó.
*/

function check(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    if (a > b) {
      document.write(a);
    }
    if (b > a) {
      document.write(b);
    }
    if (a == b) {
      document.write(a + ' = ' + b);
    }
  }
}


/* BÀI 2
Viết 1 hàm dùng để tính giai thừa của 1 số. 
Kiểm tra tham số đầu vào phải là 1 số nguyên dương (số Integer > 0), 
sau đó tính giai thừa và in ra kết quả.
*/

function giaiThua(x) {
  if (x > 0 && parseInt(x) == x) {
    var n = 1;
    for(i=x; i>=1; i--){
      n*=i;
      console.log(n);
    } else {
      return x + ' không phải là số nguyên dương.'
    }
  }
}


/* BÀI 3
Cho 1 mảng các số bất kỳ. 
Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên 
và sắp xếp theo thứ tự giảm dần.
*/

function mang_so(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i]%2==0){
    newArr.push(arr[i]);
    }
  }
  console.log(newArr.sort(function(a, b){return b - a}));
}


/* BÀI 4
Một trang web cho phép người dùng tạo tài khoản. 
Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. 
Nếu hợp lệ thông báo "Pass", nếu không hợp lệ thông báo "Fail".

Giả sử tham số đầu vào là 1 object có dạng như sau 
(giá trị của thuộc tính là do người dùng nhập và đều là chuỗi): 
user = {
  username: "username",
  password: "secret",
  confirm: "secret"
}
Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, 
password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.
*/

function checking(obj) {
  if (obj.username != '' && obj.username.length <= 20 
      && obj.password.length >= 6 && obj.password.length <= 32 
      && obj.confirm === obj.password) {
        alert('"Pass"');
      } else alert('"Fail"');
}









// ĐIỀU KIỆN, RẼ NHÁNH PHẦN 2.

/* BÀI 1
In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. 
Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:

  var now = new Date();   // Lấy thời gian hiện tại
  var date = now.getDate();   // Lấy ngày từ thời gian hiện tại
  var month = now.getMonth() + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
  var year = now.getFullYear();   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại

Tham khảo các phương thức của đối tượng Date tại đây: 
http://www.w3schools.com/js/js_date_methods.asp
*/

function time() {
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var TIME = date + '/' + month + '/' + year;
  if (month <= 3) {
    document.write(TIME + '. ' + 'spring');
  }
  if (month > 3 && month <= 6) {
    document.write(TIME + '. ' + 'summer');
  }
  if (month > 6 && month <= 9) {
    document.write(TIME + '. ' + 'the fall');
  }
  if (month > 9 && month <= 12) {
    document.write(TIME + '. ' + 'winter');
  }
}



/* BÀI 2
Viết hàm cắt chuỗi với tham số là 1 chuỗi bất kỳ. 
Kiểm tra xem tham số nhập vào có phải là chuỗi không, nếu là số thì convert sang chuỗi. 
Sau đó lại kiểm tra nếu chuỗi có độ dài nhỏ hơn 10 ký tự thì hiển thị toàn bộ chuỗi, 
nếu chuỗi có độ dài lớn hơn 10 ký tự thì hiển thị 10 ký tự đầu tiên kèm theo dấu "...".
*/

function cut(str) {
  if (typeof str == 'number') {
    str = str.toString();
  }
  if (str.length < 10) {
    document.write(str);
  } else document.write(str.substr(0, 10) + '...');
}



/* BÀI 3
Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). 
Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

Từ 0 đến 3.9: Điểm F
Từ 4 đến 5.4: Điểm D
Từ 5.5 đến 6.9: Điểm C
Từ 7 đến 8.4: Điểm B
Từ 8.5 đến 10: Điểm A
*/

function point(x) {
  if (x >= 0 && x <= 3.9) {
    return 'Điểm F'
  }
  if (x >= 4 && x <= 5.4) {
    return 'Điểm D'
  }
  if (x >= 5.5 && x <= 6.9) {
    return 'Điểm C'
  }
  if (x >= 7 && x <= 8.4) {
    return 'Điểm B'
  }
  if (x >= 8.5 && x <= 10) {
    return 'Điểm A'
  }
}



/* BÀI 4 
Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn), 
với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
*/

function translate(str) {
  switch (str) {
    case 'FRA':
        console.log('Bonjour');
        break;
    case 'SPA':
        console.log('Hola');
        break;
    case 'RUS':
        console.log('Привет');
        break;
    case 'ARA':
        console.log('مرحبا');
        break;
    case 'CHI':
        console.log('你好');
        break;
    default:
        console.log('xin chao');
        break;
  }
}



/* BÀI 5
Cho 1 mảng gồm các giá trị true và false, 
ví dụ: [false, false, false, true, false, true, false, true]. 
Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
*/

function test(arr) {
  for (i=0; i<arr.length; i++) {
    document.write(i + '. ' + arr[i] + '<br>')
    if (arr[i] == 'true') {
      break;
    }
  }
}