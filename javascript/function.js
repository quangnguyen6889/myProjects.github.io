/* BÀI 1
Viết 1 function tính bình phương của 1 số.
- Tham số truyền vào là 1 số.
- Kết quả là bình phương của số đó.
*/

function binhPhuong(x) {
    return x * x
}


/* BÀI 2
Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
Tham số truyền vào là 1 số nguyên dương.
Kết quả là thế kỷ của năm. Ví dụ 2019 => Kết quả là 21.
*/

function tinhTheKy(x) {
    function chiaNam() {
        return x / 100
    }
    return Math.ceil(chiaNam());
}


/* BÀI 3
Cho 1 chuỗi dài hơn 30 ký tự. Viết 1 function cắt chuỗi, 
lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
Tham số truyền vào là 1 chuỗi dài hơn 30 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, 
cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.
*/

function cut(str) {
    var newStr = str.substr(0, 10);
    return newStr + '...'
}


/* BÀI 4
Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. 
Ví dụ "welcome to Techmaster" sẽ được convert thành "Welcome to techmaster".
*/

function vietHoa(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


/* BÀI 5
Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
Tham số truyền vào là 1 mảng các số.
Kết quả là số nhỏ nhất trong mảng.
Gợi ý: có thể dùng phương thức sort() hoặc object Math, 
chú ý khi sort số khác với chữ.
*/

function sapXep(arr) {
    var newArr = arr.sort(function (a, b) { return a - b });
    return newArr[0]
}


/* BÀI 6
Cho 1 mảng gồm tên của 5 học viên. 
Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái 
và in ra màn hình danh sách học viên.
Tham số truyền vào là 1 mảng gồm tên của 5 người.
Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh), 
mỗi người trên 1 dòng.
Gợi ý: dùng phương thức join() để biến 1 mảng thành 1 chuỗi 
và chèn thêm ký tự <br> để hiển thị xuống dòng trong HTML.
*/

function name(arr) {
    var newArr = arr.sort();
    document.write(newArr[0] + '<br>');
    document.write(newArr[1] + '<br>');
    document.write(newArr[2] + '<br>');
    document.write(newArr[3] + '<br>');
    document.write(newArr[4] + '<br>');
}