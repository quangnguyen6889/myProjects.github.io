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
    if (a == b) {
      document.write(a + ' = ' + b);
    }
  }
}


// BÀI 2
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


// BÀI 3
function mang_so(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i]%2==0){
    newArr.push(arr[i]);
    }
  }
  console.log(newArr.sort(function(a, b){return b - a}));
}


// BÀI 4
function checking(obj) {
  if (obj.username != '' && obj.username.length <= 20) {
    if (obj.password.length >= 6 && obj.password.length <= 32) {
      if (obj.confirm === obj.password) {
        alert('"Pass"');
      } else alert('"Fail"');
    } else alert('"Fail"');
  } else alert('"Fail"');
}









// ĐIỀU KIỆN, RẼ NHÁNH PHẦN 2.

// BÀI 1
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



// BÀI 2
function cut(str) {
  if (typeof str == 'number') {
    str = str.toString();
  }
  if (str.length < 10) {
    document.write(str);
  }
  if (str.length > 10) {
    document.write(str.substr(0, 10) + '...');
  }
}



// BÀI 3
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



// BÀI 4 
function translate(str) {
  switch (str) {
    case 'FRA':
        return 'Bonjour';
        break;
    case 'SPA':
        return 'Hola';
        break;
    case 'RUS':
        return 'Привет';
        break;
    case 'ARA':
        return 'مرحبا';
        break;
    case 'CHI':
        return '你好';
        break;
    default:
        return 'xin chao'
        break;
  }
}



// BÀI 5
var arr = ['false', 'false', 'false', 'true', 'false', 'true', 'false', 'true'];
for (i=0; i<arr.length; i++) {
  document.write(i + '. ' + arr[i] + '<br>')
  if (arr[i] == 'true') {
    break;
  }
}