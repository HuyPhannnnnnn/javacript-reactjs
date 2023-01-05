1.
// alert('hi')


2.
// var fullName = 'Phan Phụng Huy';
// var age = 24;
// alert(fullName);
// alert(age);

3.
// confirm('xác nhận bạn đủ tuổi')

4.
// setTimeout(function() {
//     alert('thongbao')
// },1000);
// thực thi 1 lần


5.
// setInterval(function() {
//     console.log('đây là bug')
// },1000); 
// thực thi nhiều lần


// ======Toán tử=======
1.
//Toán +
// var age = 20
// var nextAge = age + 1
// console.log(nextAge)
// = 21

2.
//toán tử gán
//  var a = 2
//  a = a + 2 thì kq = 4
//  thì có thể viết
//  a +=2  kq cũng = 4
// console.log(a)
// tương tự các phép khác cũng vậy

3.
// toán tử ++
//   3.1  var number = 1
//     number++
//     number++
//     console.log(number)

//     3.2 console.log('--- Hậu tố ---');

//     var number1 = 1;
    
//     console.log(number1++); // 1
//     console.log(number1); // 2
    
//     console.log(number1++); // 2
//     console.log(number1); // 3
    
//     console.log('--- Tiền tố ---');
    
//     var number2 = 1;
    
//     console.log(++number2); // 2
//     console.log(number2); // 2
    
//     console.log(++number2); // 3
//     console.log(number2); // 3

4.
//Toán tử chuỗi
//4.1
// var lastName = 'Bui';
// var firstName = 'Long';
// var fullName = firstName + lastName;
// console.log(fullName) = LongBui //ko có khoản trắng nên ko cách ra

//4.2
// var firstName = 'Kiều';
// var lastName = 'Trang';
// var fullName = firstName + ' ' + lastName = Kiều Trang


5.
//toán chuối so sánh
// var a = 1
// var b = -1
// var c = 0
// var d = 0
// if(a>=c) {
//     console.log('điều kiện đúng')
// } else {
//     console.log('điều kiện sai')
// }


6.
//kiểu dữ liệu Boolean (trả về true hoặc False)
    // var a = 1
    // var b = 2
    // // var ab = a > b ==>false
    // var ab = a < b ==>True
    // console.log(ab)


7.
//if elese
//  var number = 13
//  var remain = number % 2 
//  var a = remain === 1
//  console.log(a)

8.
//toán tử logic
    // && - And
    // || - Or
    // ! -Not


   
9.
//Các kiểu dữ liệu 
//Number,String,Boolean,underfile,Null,funtion,Object(Object và Array )

//9.1 Number
// var number = 1;
// console.log(typeof number)

//9.2 String
// var fullName = 'Huy Phan';
// console.log(typeof fullName)

//9.3 Boolean
// var isSucces = true;
// console.log(isSucces)

//9.4 underfile
// var a;
// console.log(a)

//9.5 Null
// var isNull = null //ko có gì
// console.log(isNull)

//9.6 function
// var a = function() {
//     alert('xinchao');
// }
// a();
// console.log(typeof a)

//9.7 Object :có 2 kiểu là object và array

//9.7.1 Object
// var hello = {
//     name : 'Huy',
//     age : 24,
//     mail: 'congachoi6@gmail.com'
// }
// console.log(hello)

//9.7.2 Array
// var myArray = [
//     'php',
//     'ruby',
//     'python',
//     'javascript'
// ]
// console.log(myArray)

//ví dụ
// var b = 1
// console.log(typeof b):number
// var e = typeof b
// console.log(typeof e):string


10.
//Toán tử so sánh phần 2
// == so sánh value
//  === so sánh value và kiểu dữ liệu
//vd
// var a = 1
// var b = '1'
// console.log(a == b) ra true //tại vì value(1=1) bằng nhau nên bằng true
// console.log(a === b) ra false //tại vì kiểu dữ liệu khác nhau a là number 2 b là string nên là false 


11.
//truthy và falsy
// trulthy là những kiểu giá trị trong js khi chuyển qua boolean mà có gí trị true 
// vd :
// var a = ['bww']
// console.log(a)
// var b = (!!['bww'])
// console.log(b)

// falsy là những kiểu giá trị trong js khi chuyển qua boolean mà có gí trị false 
//Những kiểu đó thườn là
// 1.false
// 2.Null
// 3.underfile
// 4.'' or " " chuỗi rỗng
// 5.NaN
// 6.0 "số 0"

//Ngoài những giá trị trên là falsy thì tất cả còn lại là truthy
//1.'0' (một chuỗi chứa số không)
//2.' ' (một chuỗi chứa dấu cách)
//3.'false' (một chuỗi chứa từ khóa false)
//4.[] (một array trống)
//5.{} (một object trống)
//6.function(){} (một hàm “trống”)

// document.all chuyển sang boolean sẽ là false
// document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
// Khi typeof document.all sẽ trả về "undefined"


12.
//toán tử logical

// 1.false
// 2.Null
// 3.underfile
// 4.'' or " " chuỗi rỗng
// 5.NaN
// 6.0 "số 0"

// var result = 'A' && 'B' && 'C' && 'D' 
// console.log(result) sẽ nhận D vì chạy đến cuối cùng và khác những giá trị trên

// var result = NaN && 'B' && 'C' && 'D'
// console.log(result) sẽ nhận NAN vì NaN giống với các giá trị trên

// var result = 'A' || 'B' || 'C' || 'D'
// console.log(result) sẽ nhận 'A' vì đọc thấy khác những giá trị trên sẽ nhân luôn ngược lại vơi &&

//  var result = null || 'B' || 'C' || 'D'
//  console.log(result) sẽ nhận 'B' NẾU null nằm ở 'C' thì nó sẽ nhận A

//--Hàm--//
1.
//Tạo hàm đầu tiên
//1.1
// function showMessage(message) {
//     console.log(message);
// }

// showMessage("Hi anh em F8!");
//message là ký hiệu thuộc phần ĐỊNH NGHĨA hàm showMessage nên message là tham số
// Còn "Hi anh em F8!" là ký hiệu thuộc phần ĐƯỢC CUNG CẤP cho hàm showMessage nên "Hi anh em F8!" là đối số

//1.2 tạo hàm
// function sum() {
    
// }

2.
//Tham số
// function write() {
//   console.log(arguments)
//   var mystring = ''
//   for ( var param of arguments){
//     mystring += `${param} -`
//   }
//   console.log(mystring)
// }
// write('log1', 'log2', 'log3'); // nỗi chuỗi 

//tạo hàm sum với 2 tham số a và b
// function sum(a,b) {
//     console.log(a)
//     console.log(b)
//    }
   
//    sum('a', 'b')

3.
//return
// var result = cong(1,2)
// function cong(a,b) {
//     return a + b;//= 3 
//     // return a.toString() + b.toString()//biến thành chuỗi 
// }

// console.log(result)

//thực hành tạo hàm có tham sô a và b và trả về tổng của ham tham số
// function sum (a,b) {
//     return a + b 
//  }

//thực hành tạo hàm tripple có tham số x và trả về gấp 3 lần giá trị x
// function triple(x) {
//     return x * 3
// }
//var result = triple(10)
//console.log(result)

4.
//Các loại hàm
//Có 2 loại hàm
//4.1 declaration function
// function declarationFunction() {

// }

//4.2 expression function
// var expressionFunction = function() {
    
// }


//---Chuỗi--//
1.
//Tạo chuỗi//
// var fullName = 'Phan Phụng Huy' // đây là một chuỗi
// console.log(fullName)

2.
//Làm việc với chuỗi 
//  var mystring = 'Học js tại F8 js'

//2.1 length
//  console.log(mystring.length) // kiểm tra có bao nhiêu kí tự


//2.2 find index
// console.log(mystring.indexOf('js')) //tìm vị trí của kí tự chuỗi

//2.3 cut string 
// console.log(mystring.slice(3 , 6)) // => 'js' cắt tự vị trí 3 và kết thúc ở 6

//2.4 replace 
// console.log(mystring.replace('js','jacacript')) //thay thế chữ js bằng chữ javacript : chỉ thay chữ đầu tiên
// console.log(mystring.replace(/js/g,'javacript')) // nó sẽ thay thế hết các chữ js bằng chứ javacript

//2.5 covert to upper case
// console.log(mystring.toLocaleUpperCase()) // mọi chữ sẽ chuyển sang chữ hoa

//2.6 cover to lowal case
// console.log(mystring.toLocaleLowerCase()) // mọi chữ sẽ chuyển về chữ thường

//2.7 trim
// console.log(mystring.trim()) // loại bỏ khoản trống khi nhập thừa


//2.8 split
// console.log(mystring.split('')) // biến chuỗi thành array 
//ví dụ
// var long = 'Phan, Phụng, Huy'
// console.log(long.split(', ')) // điển  chung là dấu , và cách : phải có điểm chung

//2.9 get a charecter by index
// const fullName = 'Phan Huy'
// console.log(fullName.charAt(0)) //lấy chữ ra khoải chuỗi
// //cách khác
// console.log(fullName[0])

//ví dự lớn 1

// Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ,.
// Bạn hãy viết hàm stringToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// function strToArray(str) {
//     return str.split(', ')
// }
// console.log(strToArray(coursesStr)) 

//ví dụ lớn 2

//Để vượt qua thử thách này, bạn hãy hoàn thành hàm getContentLength
//Hàm này sẽ trả về độ dài của tham số content.

// function getContentLength(content) {
//     return content.length
// }

// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));


//---Làm việc với số---//
1.
// var million = 1e6;
// console.log(million) // = 1000000

// Phương thức	Vai trò
// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

2.
//Làm việc với number

//1.1 To string
//  var million = 10
//  var string = million.toString() // đổi kiểu number thành kiểu string
//  console.log(typeOf string)

//2.2 To Fixed
//  var pi = 3.14
//  var string = pi.toFixed() // làm tròn số và chuyển sang string
//  console.log(string)

//hoặc có thế biến số dài thành số ngăn như mình mong muốn
// var pi = 3000.2121212
// var string = pi.toFixed(2) //=> nó sẽ thành 3000.21 rút gọn chỉ còn 2 số sau
// console.log(string)

//ví dụ
// function isNumber(value) {
//     return Number.isFinite(value)
// }
//     console.log(isNumber(999)); // true
//     console.log(isNumber('abc')); // false
//     console.log(isNumber('100')); // false
    
//     console.log(isNumber(NaN)); // false
//     console.log(isNumber(100 / 'abc')); // false
//trả về kiểu boolean nếu là kiểu số thì là true còn ngược lại là false kể cả NaN

//---Mãng Array---//
1.
//Tạo mãng
// var languages = [
//     'Javascript',
//     'php',
//     'Ruby',
//     'python',
//     12,
//     20,
//     Null,
//     undefined   
// ]
// // console.log(languages) //là một mảng array
// console.log(typeof languages) // kiểm trả phải array hay ko nhưng ra object vì array thuộc object
// console.log(Array.isArray(languages))//thay vì kiểm tra bằng cách trên ta có thể kiểm tra bằng cách này để xác thực, trả về true thì chính xác là aray
// console.log(languages.length) // kiểm tra aray có mấy phần tử và ở trên là 4
// console.log(languages[0]) // muốn lấy 1 phần tử nào ra cũng dc

2.
//Làm việc với mãng
// var languages = [
//     'Javascript',
//     'Ruby',
//     'Python',
// ]

//2.1 String
// console.log(languages.toString()) // biển mảng thánh string

//2.2 Join
// console.log(languages.join('-'))  // có thể thay đổi dấu phẩy (''): dính liền ('-'):thay dấu phẩy bằng gạch ngang

//2.3 pop
// console.log(languages.pop()) // Xóa phần tử cuối mảng và trả về phần tử đã xóa

//2.4 Push
// console.log(languages.push('PHP')) // Thêm 1 hoặc nhiều phần tử vào mảng ở cuối mảng

//2.5 shift
// console.log(languages.shift()) //xóa đi phần tử đầu mảng và trả về chính nó

//2.6 Unshift
// console.log(languages.unshift('php','dark')) //Thêm 1 hoặc nhiều phần tử vào mảng ở đầu mảng

//2.7 splicing
// languages.splice(1,1,'dark','php') // thêm hoặc xóa ở ví trí bất kì 1:bắt đầu ở đâu, 2: xóa từ điểm bắt đầu , 3: là thêm từ điểm bất đầu
// console.log(languages.splice(2,2,'dark','php'))
//2.8 concat
// var languages2 = [
//     'PHP',
//     'Dark'
// ]
// console.log(languages.concat(languages2)) // dùng dể nối array từ một array khác

//2.9 slicing
// console.log(languages.slice(1,3)) // cắt màng 1: ví trí bắt đầu 3:vị trí kết thúc


//ví dụ
1.
// Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, 
// hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả
//  của việc nối từng phần tử của mảng với charactor.

    // function joinWithCharacter(array, charactor) {
    //     return array.join(charactor)
    // }

2.
// Hãy tạo hàm getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
//  hàm này sẽ trả về phần tử cuối cùng trong mảng.

    // function getLastElement(array) {
    //     return array.slice(-1)
    // }

3.
// Hãy tạo hàm getFirstElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
//  hàm này sẽ trả về phần tử đầu tiên trong mảng

    // function getLastElement(array) {
    //     return array[0]
    // }
4.
    // var array = ['php','ruby','javacript']
    // var charactor = '+'
    // function joinWithCharacter(array, charactor) {
    //     return array.join(charactor)
    // }
    // console.log(array.join(charactor))


//---Object---//
1.
//Tạo một object
// var Myinfo = {
//     name:'Phụng Huy',
//     age:24,
//     adress:'Da Nang'
// }
//trước dấu 2 chấm gọi là Key , sau dấu 2 chấm gọi là value


2.
//Thêm một key
// Myinfo.email = 'phanphunghuy1998@gmail.com' //thêm một key vào object
// Myinfo['my-email'] = 'phanphunghuy1998@gmail.com' // thêm một key nhưng chứa kí tự đặc biết như dấu gạch ngang

3.
//lấy một key ra ngoài
// console.log(Myinfo.name) // kq ra Phụng Huy // đây là lấy 1 key ra ngoài

4.
//Trong trường hợp chúng ta lấy key ra ko được thì có cách khác
// var mykey = 'adress'        //gắn cho nó cái key cần tìm bên trên
// console.log(Myinfo[mykey]) // kq sẽ là Đn

5.
//Thêm vào object bằng 1 biến
// var emailkey = 'email'
// var Myinfo = {
//     name:'Phụng Huy',
//     age:24,
//     adress:'Da Nang',
//     [emailkey]:'phanphunghuy1998@gmail.com'
// }

6.
//Xóa đi một cặp key-value
// delete Myinfo.age; // xóa đi phần tuổi

7.
//viết function trong object
// var Myinfo = {
//     name:'Phụng Huy',
//     age:24,
//     adress:'Da Nang',
//     getname:function() {
//         return this.name; //this ở đây chính là Myinfo
//     }
// }
// console.log(Myinfo.getname()) // trả về tên và đây là cách kta function

8.
//cách gọi tên sao cho đúng
//--function--> : được gọi là phương thức // method 
//--other(ngoài function) --> gọi là thuộc tính // property

// console.log(Myinfo)

9.
//object constructor //định nghĩa là tìm điểm chung của 1 bản thiết tránh khai báo nhiều objject

//ví dụ 1 trang có rất nhiều đối tượng user cho nhiều khu khác nhau thì chúng ta cần khai báo objject constructor
// function user(lastName,firstName,Avartar) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.Avartar = Avartar;
// }
// //đây là một object contructor

// var author = new user('Phan Phụng','Huy','Avatar'); // khu 1
// var user1 = new user('Nguyễn Thị','Xuyến','Avatar'); // khu 2

// author.email = 'congachoi6.com'; // thêm vào điểm khác ngoài những điểm chung trên objcet constructor
// user1.comment = 'Tôi thấy cuộc sống bế tắc'; // thêm vào điểm khác ngoài những điểm chung trên objcet constructor
// console.log(author)
// console.log(user1)

// // ví dụ 2 : tạo thêm phương thức
// // lấy lại ví dụ trên

// function user(lastName,firstName,Avartar) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.Avartar = Avartar;
     
//     this.getname = function() {
//         return `${this.lastName} ${this.firstName}`;  // this ở đây khác với this ở trên mà là this gọi từ biến var
//     }
// }

// var author = new user('Phan Phụng','Huy','Avatar');
// var user1 = new user('Nguyễn Thị','Xuyến','Avatar');

// console.log(author.getname()) // this ở đây là author
// console.log(user1.getname())  //this ở đây là user1


10.
//objecet prototype // thêm thuộc tính hoặc phương thức ở bên ngoài vào

//lấy lại ví dụ cũ
// function user(lastName,firstName,Avartar) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.Avartar = Avartar;
//     this.getname = function() {
//         return `${this.lastName} ${this.firstName}`;  // this ở đây khác với this ở trên mà là this gọi từ biến var
//     }
// }

// user.prototype.email = 'congachoi6@gmail.com' // thêm thuộc tính từ bên ngoài vào object constructor bằng prototype
// user.prototype.getemail = function() {        // thêm phương thức từ bên ngoài vào object constructor bằng prototype
//     return this.email;
// }
// //sẽ được thêm vào múc prototype và vẫn gọi ra được bình thường

// var author = new user('Phan Phụng','Huy','Avatar');
// var user1 = new user('Nguyễn Thị','Xuyến','Avatar');

// console.log(author.email)
// console.log(user1.getemail())

// console.log(author)
// console.log(user1)


11.
//đối tượng Date

// var date = new Date() 

// console.log(date)

//lấy các đối tượng ra ngoài

// var year = date.getFullYear(); //năm
// var month = date.getMonth()+1; //tháng
// var day = date.getDate(); //ngày
// var housrs = date.getHours(); // giờ
// var minutes = date.getMinutes(); // phút
// var seconds = date.getSeconds(); // giây

// console.log(`${day}/${month}/${year}`)

//ví dụ 1: lấy ra năm tiếp theo tromg function getNextYear
//Cách 1:
// function getNextYear() {
//     var date = new Date();
//     console.log(date)
//     return date.getFullYear()+1;
// }
// console.log(getNextYear(date.getFullYear()+1));

// //Cách 2:
// function getNextYear() {
//     return new Date().getFullYear()+1;
// }

// console.log(getNextYear(new Date().getFullYear()+1))

12.
//Match Object

// console.log(Math.PI) //=>> trả về số pi // khi nào cần hãy nhớ tới
// console.log(Math.round(1.4)) // =>> làm tròn số hơn 5 trả tới dưới 5 trả luôi
// console.log(Math.abs(-4)) //=>>trả về giá trị tuyệt đối nói cách khác là trả âm về dương
// console.log(Math.ceil(4.1)) //=>>Làm tròn trên  khác với round phải lớn hơn 5 mới làm tròn trên thì ở đây bao nhiêu cũng làm tròn trên
// console.log(Math.floor(4.1)) //=>> làm tròn dưới
// console.log(Math.random()) //=>> số ngẫu nhiên
// console.log(Math.min(-100,50,80,100,-200)) // => tìm ra số nhỏ nhất
// console.log(Math.max(-100,50,80,100,-200)) // tìm ra số lớn nhất

13.
//Nối 2 object

// Object.assign(js,edu)  //dùng để nối 2 objet với nhau


//ví dụ về random
//ví dụ 1
// var random = Math.floor(Math.random()*5) //=>>làm tròn dưới marth radom nhân với 5 tức là từ 1 đến 5
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// // mảng tươn ứng với các giá trị random
// console.log(bonus[random])
//ví dụ 2
// var random = Math.floor(Math.random()*100) //=>tỉ lệ từ 1 đên 100
// if(random<=50) {
//     console.log('cường hóa thành công')  
// }

//ví dụ 3
//chọn ngẫu nhiên 1 phần tử trong mảng
// var array = [1,2,3,4,5];
// function getRandomItem(array){
//    return array[Math.floor(Math.random() * array.length)]
// }

// console.log(array[Math.floor(Math.random() * array.length)]) //=>length là tổng số phần tử của mảng của mảng

//===Lệnh rẽ nhánh, toán tử 3 ngôi==//

1.
// câu lệnh rẽ nhánh  if - elese
// var date = 10
// if(date === 2) {
//     console.log('Hôm nay là thứ 2')
// }else {
//     console.log('Ko biết')
// }

// ví dụ
// function run(a) {
//     // 
//     if(a % 3 == 0 && a % 5 !== 0  ){
//         return 1;
//     }
//     else if(a % 3 !== 0 && a % 5 == 0 ){
//         return 2;
//     }else if(a % 3 == 0 && a % 5 == 0 ){
//         return 3;
//     }
// }

// console.log(run(3))
// console.log(run(5)) 
// console.log(run(15))

2.
//lệnh rẽ nhánh switch
// var date = 2
// switch(date) {
//     case 2:
//         console.log('hôm nay là thứ 2');
//         break;
//     case 3:
//         console.log('hôm nay là thứ 3');
//         break;
//     case 4:
//         console.log('hôm nay là thứ 4');
//         break; 
//     case 4:
//         console.log('hôm nay là thứ 5');
//         break;
//     default:
//         console.log('ko biết')  // default luôn dùng cuối cùng để kết thúc
// }

// khi nào dùng if - elese : khi so sáng > < = !==
//khi nào dùng switch : khi có giá trị cho trước và số case phải lớn hơn 3

//ví dụ 1

// function run(fruits) {
//     var result;

//     switch (fruits) {
//         case"Banana":
//             result = "This is a Banana";
//             break;
//         case"Apple":
//             result = "This is an Apple";
//             break;
//          default:
//             result = "No fruits";
//     }

//     return result;
// }

// console.log(run())

3.
//Toán tử 3 ngôi
// var course = {
//     Name:'Javacript',
//     coin: 250
// }
// var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí'
// console.log(result)

//ví dụ

// function getCanVoteMessage(age) {
//     return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu'
// }

// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

//===Vòng lập===//
1.
//Vòng for
// for(i = 1; i <= 1000; i++) {
//     console.log(i)
// }

//ví dụ 1
//  Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
//   Hàm này sẽ trả về một mảng gồm length phần tử, 
//   các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

//ví dụ 1
// function getRandNumbers(min , max , length) {
//     var array = []
//     for( var i = 0 ; i < length; i++) {
//        array[i] = Math.random() * (max - min) + min
//     }
//     return array
//   }

// console.log(getRandNumbers(5,50,3)) // length ở đây là chiều dài mảng và là điều kiện bạn muốn random ra bao nhiêu số


//ví dụ 2 
// tính tổng phần tử của mảng
// function getTotal(arr) {
//     var total = 0
//     for(var i = 0 ; i < arr.length ; i++ ) {
//         total = total += arr[i]
//     }
//     return total
// }

// console.log(getTotal([1, 2, 3]))
// console.log(getTotal([4, 5, -3]))
// console.log(getTotal([4, 5, 3, 5]))
// // Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17


//ví dụ 3 
//lấy hết các giá trị trong mảng ra ngoài
// var languages = [
//     'javascript',
//     'php',
//     'Python',
//     'dark',
//     'Ruby'
// ]

// var languageslenght = languages.length
// for(var i = 0; i < languageslenght; i++) {
//     console.log(languages[i])
// }


//ví dụ 4
//tính tổng giá trị đơn hàng
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// var orderslength = orders.length
// function getTotal(orders) {
// var total = 0
// for(var i = 0; i < orderslength; i++) {
//     total = orders[i].price + total
// }
// return total
// }

// console.log(getTotal(orders))

2.
//Vòng lập for - in
//Với Object
// var info = {
//     name:'Huy Phan',
//     age:24,
//     adress:'Da Nang'
// }
// for(var key in info) {
//     // console.log(key) // lấy hết giá trị key 
//     // console.log(info[key]) // lấy hết giá trị value 
// }

// //Với Array
// var languages = [
//     'php',
//     'Java',
//     'Javascript',
//     'Ruby',
// ]

// for(var key in languages) {
//     console.log(key) //ra số tt vì đây là key
//     console.log(languages[key]) // ra hết giá trị value 
// }

// //Với chuỗi string
// var languages = 'javacript'
// for(var key in languages) {
//     console.log(key) // ra số thứ tự bao nhiêu số tương ứng bao nhiêu chữ
//     console.log(languages[key]) // ra giá trị value từng chữ cái
// }

//ví dụ
// function run(object) {
//     var arr = []
//     for(var key in object) {
//        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`) 
    
//     }
//     return arr
// }
// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]


3.
//Vòng lập for of
//Với array 
//     var languages = [
//         'php',
//         'Java',
//         'Javascript',
//         'Ruby',
//     ]
//     for(var key of languages) {
//         console.log(key) //ra danh sách các môn
//     }

// //với string
//     var languages = 'javascript'
//     for(var king of languages) {
//         console.log(king) // ra danh sách các chữ cái
//     }

// với object
    // var Myinfo = {
    //     name:'Huy Phan',
    //     age:24,
    //     adress:'Da Nang'
    // }
    // var key = Object.keys(Myinfo) // phải lấy ra được key khác for-in
    // for(var ling of key) {
    //     console.log(ling)
        
    // } // lấy ra các key
    
    // var value = Object.values(Myinfo)// lấy ra được value
    // for(var ning of value) {
    //     console.log(ning)
    // }

4.
//Vòng lập while
// var myArray = [
//     'php',
//     'java'
// ]

// var i = 0
// while (i < myArray.length) {
//     console.log(myArray[i])
//     i++
// }

5.
//Vòng lập do - while
// var i = 0
// do {
//     i++
//     console.log(i)
// }while(i < 10) //vòng lập này dù có điều kiện đúng hay sai nó vẫn chạy 1 lần

//ví dụ thực tế
// var i = 0
// var isSuccess = false
// do {
//     i++
//     console.log('Nạp thẻ lần' + i)
//     if(false) {
//         isSuccess = true
//     }
// }while(!isSuccess && i <= 3) //nếu nạp thẻ ko thành công nó sẽ chạy lại 3 lần


6.
//Break và continue
// for(var i = 0; i <= 10; i++) {   
//     if(i >= 5) {
//         break;
//     }
//     console.log(i)

// } // nêu i >=5 vòng lập sẽ kết thúc sử dụng break


// for(var i = 0; i <= 10; i++) {   
//    if(i % 2 !== 0) {
//     continue;
//    }
//   console.log(i)

// } // vòng lập sẽ bỏ qua những số lẻ và tiếp tục chạy

7.
//Vòng lập lông nhau

// myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// for(var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
//     for(var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

8.
//thêm ví dụ
//8.1 
// for(i = 100; i > 0; i--) {
//     console.log(i)
// } //chạy ngược từ 100 đến 0

//8.2
// for(i = 0; i < 100; i += 5) {
//     console.log(i)
// } // mỗi lần chạy tăng lên 5 lần

// vài ví dụ
8.1
// var aray = [1,2,3,1,2,3,1,2,3] // muốn trả về output [1,2,3]
// console.log(new Set([1,2,3,1,2,3,1,2,3])) // cho nó thuộc tính Set nó sẽ ruốc gọn thành [1,2,3]
// console.log([...new Set([1,2,3,1,2,3,1,2,3])]) //giải set ra đưa về array

// var arr = [2,7,3,4]
// var total = 9
// function king(arr,total) {
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i]
//         console.log(arr[i])
//         for(let j = 1; j < arr.length; j++) {
//              if(arr[i] + arr[j] === total) {
//                 return [i,j]
//              }
//         }   
//     }  
// }

// console.log(king(arr,total))

8.2
// myArray = [2,6,7,3]
// total = 9

// function languages(myArray,total) {
//     for(var i = 0; i < myArray.length; i++) {
//         const nums = myArray[i]
//         console.log(nums)
//         for(var j = 0; j < myArray.length; j++) {
//             const numss = myArray[j]
//             console.log(numss)
//             if(nums + numss === total) {
//                 return [i,j]
//             }
//         }
//     }
// }
// console.log(languages(myArray,total))

9.
//Đệ Quy
//xác nhận điểm dừng
//logic handle =>> tạo ra điểm dừng
// ví dụ 1
// function cowdown(nums) {
//     if(nums > 0) {
//         console.log(nums)
//        return cowdown(nums - 1);
//     }
//      return nums
     
// }

// cowdown(10)


//ví dụ 2
// function loop(start,end,cb) {
//     if(start <= end) {
//         cb(start);
//         return loop(start + 1,end,cb);
//     }
// }

// var array = ['javacript','php','Ruby'];

// loop(0, array.length, function(index) {
//     console.log(array[index])
// });


//ví dụ 3 // giai thừa
//3 * 2 * 1 = ? //giai thừa của 3

// giải bằng đệ quy
// function giaithua(number) {
//     if(number > 0) {
//         return number * giaithua(number - 1);
//     }
//     return 1
// }

// console.log(giaithua(3))

// //giải bằng vòng lập
// // giai thừa của 6

// function newgiaithua(nums) {
//     var total = 1
//     for(var i = 6; i > 0; i--) {
//         total = total * i
//     }
//     return total
// }

// console.log(newgiaithua(6))


//===làm việc với mảng ==// phần 2\

1.
// var courses = [
//     {   
//         id:1,
//         name:'html,Css',
//         coin:250
//     },
//     {   
//         id:2,
//         name:'javacript',
//         coin:0
//     },
//     {
//         id:3,
//         name:'Reactj',
//         coin:250
//     },
//     {   
//         id:4,
//         name:'javacript',
//         coin:0
//     },
// ]

//1.0 forEach dùng để duyệt qua mảng
// courses.forEach(function(course,index) {
//     console.log(index,course);
// })

//2.0 every kiểm tra có đúng ko trả về kiểu boolan
// var isfree = courses.every(function(course,index) {
//     return course.coin === 0  // kiểm tra xem có phải tất cả đêu miễn phí không và trả false
// })
// console.log(isfree)

// //3.0 some ngược lại với every
// var isfree = courses.some(function(course,index) {
//     return course.coin === 0  // 
// })
// console.log(isfree) // kiểm tra xem tất cả có miễn phí không và chỉ cần 1 phần tử đúng là trả về true


// //4.0 fine : tìm kiếm
// var namee =  courses.find(function(course,index) {
//     return course.name === 'javacript'
// })
// console.log(namee) // trả về phần tử có tên đó và chỉ trả 1 phần tử khi nó găp lần đầu

// //5.0 filter : tìm kiếm tất 
// var Listnamee =  courses.filter(function(course,index) {
//     return course.name === 'javacript'
// })
// console.log(Listnamee) // trả vê tất cả các phần tử có giá trị đúng


//ví dụ
//hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array).
// Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// var listsport = sports.filter(function(sport,index)
// {
//     return sport.like > 5
//  })
// function getMostFavoriteSport(){   
//   return listsport
// }

// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


//7.0 map() dùng rất nhiều

//ví dụ 1
    // function coursehandle(course,index) {
    //     return {
    //         id:course.id,
    //         name:`Khóa học : ${course.name}`,
    //         coin:250,
    //         cointext : `Gía : ${course.coin}`
    //     }
    // }
    // var newcourse = courses.map(coursehandle) // return cái gì thì nó sẽ trả về cái đó cho var newcourse
    // console.log(newcourse)

// ví dụ 2
// function coursehandle(course,index) {
//     return `<h2>${course.name}</h2>`
       
// }
// var newcourse = courses.map(coursehandle) // return cái gì thì nó sẽ trả về cái đó cho var newcourse
// console.log(newcourse.join('')) //in dữ liệu ra ngoài bằng cách chuyển string

8.
//reduce() method

// function coursehandle(accmulator,course) {
//     return accmulator + course.coin
// }
// var newcourse = courses.reduce(coursehandle,0) // 0 = accmulator

// console.log(newcourse)


//ví dụ1
// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// //viết dễ hiểu
// function sporthandle(accmulator,currentsport) {
//     return accmulator + currentsport.gold
// }
// var newsports = sports.reduce(sporthandle,0) 
// function getTotalGold() {
//     return newsports
// }

// //Viết nhanh
// function getTotalGold(arr) {
//     return arr.reduce(function(total , currentSport ) {
//         return total + currentSport.gold
//     },0)
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

//ví dụ 2
// Làm phẳng mảng
// var nums = [1,2,[3,4],5,6,[7,8,9]]
// var newnums = nums.reduce(function(array,num) {
//     return array.concat(num); //concat dùng để nối mảng bài trước
//  },[])
// console.log(newnums) 

// ví dụ 3
// var toppics = [
//     {
//         toppic : 'front-end',
//         courses :[
//          {
//             id:1,
//             title:'html,css'
//         },
//         {
//             id:2,
//             title:'Javacript'
//         }
//                 ]       
//     },
//     {
//         toppic : 'back-end',
//         courses :[
//          {
//             id:1,
//             title:'Php'
//         },
//         {
//             id:2,
//             title:'Ruby'
//         }
//                 ] 
//     }
// ]

// var newtopics = toppics.reduce(function(array,gettoppic) {
//     return array.concat(gettoppic.courses)
// },[])

// console.log(newtopics) // duyệt mảng

// var html = newtopics.map(function(course,index) {
//     return `
//         <div>
//             <span> Id là : ${course.id}</span>
//             <h2> Tên Khóa học là :${course.title}</h2>
//         <div>
//     `;
      
// })
// console.log(html) // in dũ liệu ra 



// // ví dụ lớn
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];

// function calculateRating(watchList) {
//     //Lấy ra list phim của Christopher Nolan
//     var listFilm = watchList.filter(function(wacth) {
//         return wacth.Director === 'Christopher Nolan';
//       });
//       //Tính tổng số điểm của các phim này
//     //Dùng Number() để chuyển điểm kiểu string sang number
//     var totalImdb  =  listFilm.reduce(function(total,movie) {
//              return total + Number(movie.imdbRating);
//     },0);
//     //Tính điểm trung bình
//     var countImdb = listFilm.length;
//     return totalImdb/countImdb;
// }
//       // Expected results
// console.log(calculateRating(watchList)); // Output: 8.67
          

// var courese = "20.21"
// console.log(typeof courese)
// console.log(typeof Number(courese))



//ví dụ
// var courses = [
//     {
//         name:'Phan Huy',
//         age:16,
//         gmail:'congachoi6@gmail.com'

//     }
// ]
// var newcourse = courses.map(function(course) {
//     return { name:`Tôi tên là ${course.name}`,
//             age: course.age,
//             gmail: course.gmail,
//             date:`04/05/1998`

//             }
// })

// console.log(newcourse)
// var html = newcourse.map(function(course) {
//     return `
//         <div>
//             <h2>${course.name}</h2>
//             <h3>${course.age}</h3>
//             <span>${course.gmail}<span>
//         </div>
//     `;
// })

// var htmljoin = html.join('')

// console.log(htmljoin)

// var getroot = document.getElementById('root')
// getroot.innerHTML = htmljoin


//++++===== biến array thành object======+++++
//cách 1
// function arrToObj(arr) {
//     var results = arr.reduce(function(total,arrr,index) {
//          index = arrr[0];
//         total[index] = arrr[1];
//         return total;
//     },{});
//     return results;
// }

// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 } biến array thành object

//cách 2
// var arr = ['name','Phan Phụng Huy']

// function getname(arr) {
//     return arr.reduce(function(innit,[key,value]) {
//         return {...innit,[key]:value}
//     },{})
// }

// var object = getname([arr])

// console.log(object)


// //==== Inclue method===///
// //có được trong string và array dùng để tìm kiếm phần tử
// //ví dụ
// var languages = 'javacript'
// console.log(languages.includes('j')) // trả về kiểu boolean

// var array = ['javacript', 'Ruby', 'Dart']
// console.log(array.includes('javacript')) // trả về boolean


///+++++Call back++++///

// function myfunction(param) {
//     param('Học lập trình')
// }

// function mycallback(value,) {
//     console.log('value:',value)
// }

// myfunction(mycallback)



// function sumCb(a,b) {
//     var c = 0
//     c = a + b
//     return c
    
// }


// function subCb(a,b) {
//     var d = 0
//     d = a - b
//     return d
// }

// function multiCb(a,b) {
//    return a * b
// }

// function divCb(a,b) {
//     return a * b
// }


// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// // Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3


// console.log(caculate(1, 2, sumCb))
// console.log(caculate(1, 2, subCb))
// console.log(caculate(1, 2, multiCb))
// console.log(caculate(3, 1, divCb))



// function click(a,b) {
//     return a + b
// }

// function callback(a,b,cb) {
//     return cb(a,b)
// } 

// callback(1,2,click)

// console.log(callback(1,2,click))


// function myair(param) {
//     param('long time no see')
// }

// function cback(value) {
//     console.log('value:', value)
// }

// myair(cback)

///=====////////
1.0
//  Viết phương thức 2 cho map
// Array.prototype.map2 = function(callback) {
//     var output = [];
//     var arrlength = this.length;
//     for(i = 0; i < arrlength; i++) {
//         var result = callback(this[i],i);
//         output.push(result)
//     }
//     return output
    
// }
// var languages = [
//     'javacript',
//     'php',
//     'Ruby'
// ]

// var html = languages.map2(function(langue) {
//     return `<h2>${langue}</h2>`;
// }) 

// console.log(html.join(''))

2.0
// Viết phương thức 2 cho fitter
// Array.prototype.fitter2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//          var result = callback(this[index],index,this)
//             if(result) {
//                  output.push(this[index])
//             }
//         }
//     }
//     return output
   
// }
// var infoe = [
//     {
//         name:'Phan Phụng Huy',
//         age:24,
//         gmail:'congachoi6@gmail.com'
//     },
//     {
//         name:'Nguyễn Thị Thập',
//         age:24,
//         gmail:'thapthinguyen@gmail.com'
//     },
//     {
//         name:'Phan Phụng Huy',
//         age:24,
//         gmail:'congachoi6@gmail.com',
//         country:'Da Nang'
//     }
// ]

// var getinfo = infoe.fitter2(function(info) {
//     return info.name === 'Phan Phụng Huy'
// })

// console.log(getinfo)

3.0
//Viết Phương thức 2 cho reduce gọi là reduce2 hay cc gì cũng dc
// Array.prototype.reduce2 = function(callback,result) {
//     if(arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for(; i < this.length; i++) {
//         result = callback(result,this[i],i,this)
//     }
//     return result
// }

// const number = [1,2,3,4,5]

// var result = number.reduce2(function(total,num) {
//     return total + num
// })

// console.log(result)

4.0
//viết phương thức foreach2
// Array.prototype.forEach2 = function(cb) {
//     for(var i in this) {
//      if(this.hasOwnProperty(i)) {   ///Vì consolog i loài ra foreach2 nen dùng hàm hasOwnProperty để ko lập đến
//         cb(this[i],i,this)
//      }
//     }
// }; 
// const languags= [
//     'Javacript',
//     'Php',
//     'Ruby',
// ]

// var getlanguags = languags.forEach2(function(langua,index,array) {
//    console.log(index,langua,array)
// })

5.0 
//viết phương thức some2   //kiểm trả 1 phần tử nếu thấy đúng sẽ trả về true
// Array.prototype.some2 = function(callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//            if(callback(this[index],index,this)) {
//             return true
//            }
//         }
//     }
//     return false
// }
// var myinfo = [
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : true
//     },
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : false
//     },
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : false
//     },
// ]

// var getmyinfo = myinfo.some2(function(info,index,array) {
//     return info.isfinish
// })

// console.log(getmyinfo)


// 6.0
// // viêt phương thức 2 cho every   //kiểm trả tất cả chỉ một phần tử sai thôi cũng trả về false
// Array.prototype.every2 = function(callback) {
//     var output = true;
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             var result = callback(this[index],index,this)
//             if(!result) {
//                 output = false;
//                 break;
//             } 
//         }
//     }
//     return output
// }
// var myinfo = [
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : true
//     },
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : false
//     },
//     {
//         name:'Phan huy',
//         age:16,
//         isfinish : true
//     },
// ]

// var getmyinfo = myinfo.every2(function(info,index,array) {
//     return info.isfinish
// })

// console.log(getmyinfo)

//++++nếu như nhiều phần tử ko thực thì ko nên dùng vòng lập for bình thườn mà dùng for in +++///
// var languages = [
//     'Javacript',
//     'php'
// ]
// languages.length = 10 // sẽ có 8 phần tử ko thực
// languages.push('Ruby','Dark')// push thêm 2 phần tử nữa vào
// var age = languages[0]
// for(var index in languages) {
//     console.log(languages[index]) // nó chỉ duyệt qua 4 phần tử  vào ko lấy phần tử ảo
// }


// const js = { language:"lose type", label:"difficult"};
// const edu = {...js,level:"PhD"};
// const newbie = edu;
// delete edu.language;
// console.log(Object.keys(newbie).length)



// var js = { language:"lose type", label:"difficult"};
// var edu = {name:"HuyPhan",level:"PhD"};
// var objecet = Object.assign(js,edu)
// var objecetlength = Object.keys(objecet).length // kiểm tra độ dài mảng
// console.log(objecetlength)


//====Dom Html====// Document object modal(element,attribute,text)
1.0
//Element:id,class,tag,Css Selector,Html colection

//id
// var result = document.getElementById('heading')
// console.log(result)

//class
// var results = document.getElementsByClassName('Heading')[0] // vì là class nên thường có số đằng sau
// console.log(results)  // trả về html colection

// //Tag
// var kull = document.getElementsByTagName('p') //dùng tên thẻ
// console.log(kull)

// //Css selector

// var selector = document.querySelector('.box .selector') // css hiện ra thẻ  và chỉ với 1 thằng đầu tiên
// console.log(selector)

// var selectors = document.querySelectorAll('.box .selector') //css tất cả
// console.log(selectors[0]) //lấy ra thuộc tính đầu tiên


// Ví dụ 1
// var productsListElement = document.getElementsByClassName('products-list')[0]
// console.log(productsListElement)
// var firstProductElement =document.querySelector('.product')
// console.log(firstProductElement)
// var buttonElements = document.querySelectorAll('.products-list .product .cta-btn')
// console.log(buttonElements)

2.0
// một cách khác của dom
// var boxnode = document.querySelector('.product')
// console.log(boxnode.querySelectorAll('h3'))//lấy ra hết các thẻ h3
// var box = boxnode.getElementsByTagName('h3')[0]// lấy ra thẻ h3 ở vị trí 0
// console.log(box)

3.0
//Domastribute

//Thêm một asstribute vào 1 elemnt
// var element = document.querySelector('h4')
// console.log(element)
// 3.1
// element.className = 'heading' // set id cho element cách 1
// 3.2
// element.setAttribute('id','heading') // sét class cho elemnt cách 2... ở cách này có thể đặt tên cho astribute mà ko cần đúng thuộc tính
// 3.3
// console.log(element.getAttribute('id')) // đây là cách lấy ra têm mà đặt cho astribue lấy ở đâu cũng đc


4.0
//Inner text và text content
// var element = document.querySelector('h4')
// console.log(element)
//4.1 inner text
// var content = element.innerText // lấy ra đc text trong thẻ
// console.log(content)
// var contents = element.innerText = 'Đây là Học Đom'// đây là cách sửa text hoặc ko có text thì mình thêm vào
// console.log(contents)
//4.2 Text content
// var content = element.textContent // lấy ra đc text trong thẻ
// console.log(content)
// var contents = element.textContent = 'Đây là Học Đom'// đây là cách sửa text hoặc ko có text thì mình thêm vào
// console.log(contents)


5.0
//Inner Html và ouner Html
//5.1 inner HtMl
// var element = document.querySelector('h4')
// element.innerHTML = '<span id="heading">No Dom</span>'
// console.log(element) /// thêm một thẻ element và một atribute vào trong element cha

//ví dụ
//Các bạn hãy viết hàm render nhận vào 1 tham số là html, 
//hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước
// function render(html) {
//     var render = document.querySelector('ul')
//     render.innerHTML = html
// }

//ví dụ2
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
// var getcourse = courses.map(function(course) {
//     return `<li>${course}</li>`
// })
// console.log(getcourse)
// var html = getcourse.join('')
// console.log(html)

// var gethtml = document.querySelector('.courses-list')
// gethtml.innerHTML = html
// console.log(gethtml)

// }
// render(courses)


6.0
//propertype các thuộc tính get

//Đây là cách get 1 link 
// var getbox = document.querySelector('.boxx')
// var baseurl = getbox.baseURI
// var link = document.querySelector('a')
// link.href = baseurl
// var html = link.innerText = 'Đây là link của tôi'

//lấy ra elemnent tiếp theo cùng cấp
// var gethedding = document.querySelector('.boxx')
// console.log(gethedding)
// var test = gethedding.nextElementSibling
// console.log(test) 

7.0
//DOM CSS
// var boxelement = document.querySelector('.boxxx');
// //cách 1
// // boxelement.style.width ='100px';
// // boxelement.style.height ='100px';
// // boxelement.style.backgroundColor ='red';
// //cách 2
// Object.assign(boxelement.style,{
//     height:'100px',
//     width:'200px',
//     backgroundColor:'green'
// })


8.0
//classlist property //thuộc tính thuộc class
// var boxelement = document.querySelector('.boxxx')

// console.log(boxelement.classList.length) // kiểm tra có bao nhiêu class
// console.log(boxelement.classList[0]) // lấy ra class nào bạn muốn
// boxelement.classList.add('redd','bluee') // thêm một hoặc nhiều class(có thể css nhưng class này bên file css)
// console.log(boxelement.classList.contains('redd'))// kiểm tra có class đó hay ko trả về true false
// boxelement.classList.remove('redd') // xóa 1 class
// boxelement.classList.toggle('redd') // nếu chưa có thì thêm mà nếu có rồi thì xóa

//1 ví dụ remove
// setTimeout(() => {
//     boxelement.classList.remove('redd')
// },3000);  // sẽ xóa sau 3s thực thi

//2 ví dụ toggle
// setInterval(() => {
//     boxelement.classList.toggle('redd')
// }, 1000); // hiệu ưng đóng tắt class


//ví dụ 3 thêm class box vào nhiều element giống nhau
// var getbox = document.querySelectorAll('div')
// var getforeach = getbox.forEach(function(get) {
//         get.classList.add('box')
// })
// console.log(getforeach)

9.0
//events
9.1
//viết todo
// function Add() {
//     var gethtml = document.querySelector('.king').value
//     var span = document.createElement('span')
//     span.append(gethtml)
//     var li = document.createElement('li')
//     li.append(span)
//     var deletee = document.createElement('button')
//     deletee.append('Xóa')
//     li.append(deletee)
//     var edit = document.createElement('button')
//     edit.append('Chỉnh sửa')
//     li.append(edit)
//     var ul = document.querySelector('.result')
//     ul.append(li)
//     deletee.addEventListener('click',function() {
//         var location = this.parentElement
//         location.remove()
//     })
//     edit.addEventListener('click',function() {
//         var newinput = document.createElement('input')
//         li.append(newinput)
//         var save = document.createElement('button')
//         save.append('Lưu')
//         li.append(save)
//         edit.style.display = 'none'

//         var pa = this.parentElement
//         var content = pa.querySelector('span')
//         var text = content.innerHTML
//         newinput.value = text

        
//         newinput.setAttribute('class','new')
//         save.addEventListener('click',function() {
//             var saveli = document.querySelector('.new').value
//             var ha = document.querySelector('span')
//             ha.innerHTML = saveli
//             newinput.remove()
//             save.remove()
//             edit.style.display = 'block'
//         })

        

       
//     })
// }   

9.2
//gán assign events vào element node

//ví dụ 1
// var get1html = document.querySelector('.nomal h1')
// get1html.onclick = function() {
//     console.log(Math.random())
// }

//vd2
// var get1html = document.querySelectorAll('.nomal h1'); // lấy tất cả các thẻ h1
// for(var i = 0; i < get1html.length; i++) {             // chạy vòng lập để lấy ra các thẻ h1
//     get1html[i].onclick = function(e) {                //gắn sự kiện onclick cho nó
//         var Dom = e.target                             // e tagget là gét ra lại elemt(có thẻ console.log(e)) để xem thêm các việc làm khác
//         console.log(Dom)
//     }
// }

//ví dụ 3
//đỗi màu chữ
// var getbutton = document.querySelector('.bonsai')
// getbutton.onclick = function() {
//    var color = getbutton.style.color = 'blue'
// }

9.3
//events 2
1
// var getinput = document.querySelector('.eazy')
// getinput.onclick = function(e) {
//     var Dom = e.target.value
//     console.log(Dom) 
// }
//onlick: click vào
//onchange: click ra ngoài mới hiện
//oninput: viết ra đâu lấy ra đấy

2
// var getinput = document.querySelector('input[type="checkbox"]');
// getinput.onchange = function(e) {
//     console.log(e.target.checked);
// }//dùng onchange

3
// var getselect = document.querySelector('select')
// getselect.onchange = function(e) {
//     console.log(e.target.value)
// }//dùng onchange get ra value

 4
// //xử lý sự kiện bàn phím: onkeyup;onkeydown;onkeypreak
// //up:nhấn vào thả ra
// //dow:nhấn vào 
// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Send chat')
//             break;
//     }   

// }


9.4
//prevendefault và stopPropagation
1
//prevendefaults: ngăn chặn phương thức mặc định
//ví dụ 1
// var aElement = document.querySelectorAll('a')
// for(i = 0; i < aElement.length; i++) {
//     aElement[i].onclick = function(e) {
//         if(!e.target.href.startsWith('https://fullstack.edu.vn/')) { //nếu như ko phải trang f8 thì ko cho chạy phương thức mặc định kia
//             e.preventDefault();
//         }
        
//     }
// }

//ví dụ 2
// var inputelement = document.querySelector('.hearts')
// inputelement.onmousedown = function(e) {
//     e.preventDefault(); //ngăn chặn ko click đc
// }
// inputelement.onclick = function(e) {
//    var getelemnt = e.target.innerText
//     var getinput = document.querySelector('.queenn')
//     getinput.value = getelemnt
//     inputelement.style.display = 'none'
// }
// //ví dụ 3
// getmom = document.querySelector('.mom')
// getmom.onclick = function(e) {
//     console.log('getmom')
// }
// getdad = document.querySelector('.dad')
// getdad.onclick = function(e) {  // sẽ bị sự kiện nỗi bọt dính luôn thằng cha
//     e.stopPropagation(); // Phương thức ngăn chặn sự kiện nỗi bật
//     console.log('getdad')
// }


2
//Even listerner nên sử dụng khi làm nhiều việc cùng lúc và đc hủy bỏ lắng nge
//làm nhiều việc cùng lúc
// var getbtn = document.querySelector('.btn')
// function viec1() {
//     console.log('việc 1')
// }

// function viec2() {
//     console.log('việc 2')
// }

// getbtn.addEventListener('click',viec1)
// getbtn.addEventListener('click',viec2)
// setTimeout(function()  {
//     getbtn.removeEventListener('click',viec1)
// }, 3000);


/////// ++++++json++++////////

//Json:Javacript object Nocation
//Json là một kiểu định dạng dữ liệu
//javascript => json : stringify
//json => javacript :Parse

//ví dụ
1
// var json = '["Javacript","Php","Ruby"]' //đây là kiểu jsonconsole.log(json)
// console.log(json)
// var javacripts = JSON.parse(json) // chuyển sang array
// console.log(javacripts)

2
//Promise(Sync,async) đồng bộ và bất đồng bộ
//Những hàm bất đồng bộ hay gặp settimeout,setinterval,fetch,XMHLhttprequest,..
//promise sinh ra để xử lí những thao tác bất đồng bộ,trc đây nta hay dùng callback nhưng dùng call chúng ta hay 
//bị callback hell nó sẽ bị sâu vào rất là khó nhìn nên sinh ra promise để dễ đọc dễ hiểu hơn 
//promise có 3 trạng thái  : pending,fulfilled,rejected
// var promise = new Promise(function(resolve,reject) {
//     //logic resolve : thành công 
//     //reject: thất bại
//     //resolve()
//     //reject()
// })
// promise
// .then(function() {
//     console.log('Successull!') //trả khi thành công
// })
// .catch(function() {
//     console.log('fail!')  //trả khi thất bại
// })
// .finally(function() {
//     console.log('Done!') //thành công hay thất bại đều đc
// })

//ví dụ 1
// var promise = new Promise(function(resolve,reject) {
//     resolve();
// })
// promise
//     .then(function() {
//         return 1;
//     })
//     .then(function(data) {
//         console.log(data);
//         return 2;
//     })
//     .then(function(data) {
//         console.log(data)
//         return 3;
//     })
//     .then(function(data) {
//         console.log(data)
//     })
 
//ví dụ 2
// var promise = new Promise(function(resolve,reject) {
//     resolve();
// })
// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//            setTimeout(function() {
//                 resolve([1,2,3])
//            },3000)
//         })
//     })

//     .then(function(data) {
//         console.log(data)
//     })

//ví dụ 3
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve,ms)
//     })
// }
// sleep(1000)
//     .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1,2,3])   
//             })
//         })
      
//     })
//     .then(function(data) {
//         console.log(data)
//     })

3
//promise(resolve,reject,all) :Muốn một promise thành công hay thất bại
//3.1 resolve
// var promise = Promise.resolve('Sucesslly')
// promise.then(function(result) {
//     console.log(`result:`,result)
// })
// //3.2reject
// var promise2 = Promise.reject('Error')
// promise2.catch(function(result2) {
//     console.log(`result:`,result2)
// })
// //3.3 all
// var promise = new Promise(function(resolve) {
//     return setTimeout(function() {
//         resolve([1,2])
//     },2000)
// })
// var promise2 = new Promise(function(resolve) {
//     return setTimeout(function() {
//         resolve([1])
//     },2000)
// })
// // Promise.all([promise,promise2])
// //     .then(function(result) {
// //         var result1 = result[0]
// //         var result2 = result[1]
// //         console.log(result1.concat(result2))
// //     })
// Promise.all([promise,promise2])
//     .then(([result1,result2]) => {
//         console.log(result1.concat(result2))
//     }) /// viết theo es6

4
//promise example
 //get nhiều dữ liệu vào chung

// var users = [
//     {
//         id:1,
//         Name:'Huy Phan'
//     },
//     {
//         id:2,
//         Name:'Sơn Đặng'
//     },
//     {
//         id:3,
//         Name:'Thuận Nguyễn'
//     }
// ]

// var comments = [
//     {
//         id:1,
//         user_id:1,
//         content:'A Sơn chưa ra video'
//     },
//     {
//         id:2,
//         user_id:2,
//         content:'Vừa ra em ơi'
//     },
//     {
//         id:1,
//         user_id:1,
//         content:'Oke A ơi'
//     },
// ]

// function getcomments() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve(comments)
//     },1000)
//   })
// }

// function getusers(userids) {
//     return new Promise(function(resolve) {
//         var nameuser = users.filter(function(user) {
//             return userids.includes(user.id)
            
//         })
//         setTimeout(function() {
//             resolve(nameuser)
//         },1000)
//     })
// }

// getcomments()
//     .then(function(comments) {
//         var userids = comments.map(function(comment) {
//             return comment.user_id
//         })
//         return getusers(userids)
//             .then(function(users) {
//                 return {
//                     users : users,
//                     comments : comments,
//                 }
//         })
//     })
//     .then(function(data) {
//         var commentBlock = document.querySelector('.comment-box')
//         console.log(commentBlock)
//         var html = ''
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.Name}: ${comment.content}</li>`
//         });
//         commentBlock.innerHTML = html 
//     })


// getusers([1,2])
//     .then(function(users) {
//         console.log(users)
//     })

//++ ví dụ tương tự

// function getusers() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(users)
//         },1000)
//     })
// }

// function getcomments(userid) {
//     return new Promise((resolve) => {
//         var result = comments.filter(function(comment){
//             return userid.includes(comment.user_id)
//         })
//         setTimeout(function() {
//             resolve(result)
//         },1000)
        
//     })
// }

// getusers() 
//     .then(function(users) {
//         var userid = users.map(function(user) {
//             return user.id
//         })
//         return getcomments(userid)
//                 .then(function(comments) {
//                     return {
//                         users : users,
//                         comments : comments
//                     }
//                 }) 
//     })
//     .then(function(data) {
//         var innerblock = document.querySelector('.comment-box')
//         var html = ''
//         data.comments.forEach(function(comment) {
//             var user = users.find(function(user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.Name}: ${comment.content}</li>`
//         })
//         innerblock.innerHTML = html
//     })

5
//fetch
// var postAPI = 'https://jsonplaceholder.typicode.com/posts'
// fetch(postAPI)
//     .then(function(reponse) {
//         return reponse.json();
//     })
//     .then(function(posts) {
//     //    var htmls = posts.map(function(post) {
//     //     return `<li>
//     //         <h2>title:${post.title}</h2>
//     //         <span>body:${post.body}</span>
//     //     </li>`
//     //    })
//     //    document.querySelector('.comment-box').innerHTML = htmls
//     console.log(posts)
//     })
//     .catch(function(err) {
//         alert('có lỗi')
//     })


6
//json sever
// var postAPI = 'http://localhost:3000/courses'
// fetch(postAPI)
//     .then(function(reponse) {
//         return reponse.json();
//     })
//     .then(function(courses) {
//     //    var htmls = posts.map(function(post) {
//     //     return `<li>
//     //         <h2>title:${post.title}</h2>
//     //         <span>body:${post.body}</span>
//     //     </li>`
//     //    })
//     //    document.querySelector('.comment-box').innerHTML = htmls
//     console.log(courses)
//     })
//     .catch(function(err) {
//         alert('có lỗi')
//     })

7 
//Thêm sửa chỉnh xóa

// let courseApi = 'http://localhost:3000/courses'

// function start() {
//    getcourses(rendercourses)
//    formpostapi()
//    deleteCourses()
// }

// start()


// //get ra api
// function getcourses(callback) {
//     fetch(courseApi)
//         .then(function(reponse) {
//             return reponse.json()
//         })
//         .then(callback)
// }

// //post ra api
// function createcourses(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//          'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
   
//     fetch(courseApi,options)
//         .then(function(reponse) {
//             reponse.json()
//         })
//         .then(callback)
// }


// //Xóa api
// function deleteCourses(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//          'Content-Type': 'application/json'
//         }
//     }
//     fetch(courseApi + '/' + id ,options)
//         .then(function(reponse) {
//             reponse.json()
//         })
//         .then(function() {
//           var courseiteam = document.querySelector('.course-item-' + id)
//           if (courseiteam) {
//                 courseiteam.remove()
//           }
//         })
    
// }


// //render ra api  ++chú ý get rồi render
// function rendercourses(courses) {
//     var getblock = document.querySelector('.list-courses')
//     var html = courses.map(function(course) {
//         return `<li class="course-item-${course.id}"
//                    <h4>${course.title}</h4>
//                    <span>${course.coin}</span>
//                    <button onclick="deleteCourses(${course.id})">Xóa</button>
//                 </li>`
//     })
//     getblock.innerHTML = html.join('')
// }


// //Form nhập trước khi post
// function formpostapi() {
//     var submit = document.querySelector('.create')
//     submit.onclick = function() {
//         var title = document.querySelector('input[name="title"]').value
//         var coin = document.querySelector('input[name="coin"]').value

//         var formData = {
//             title:title,
//             coin:coin
//         }
//         createcourses(formData,function() {
//             getcourses(rendercourses)
//         })
//     }
// }


//+++++++//

//Tập viết lại
// let couseApi = 'http://localhost:3000/courses'

// //
// function start () {
//     getcourses(rendercourse)
//     handlecreatform()
//     handledeleteCourses()
//     fillCourse()
// }

// start()

// //
// function getcourses(callback) {
//  fetch(couseApi)
//     .then(function(reponse) {
//         return reponse.json()
//     })
//     .then(callback)
// }

// //
// function postcourseses(data,callback) {
//     var objects = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(couseApi,objects)
//         .then(function(reponse) {
//         return reponse.json()
//         })
//         .then(callback)
// }

// //
// function handledeleteCourses(id) {
//     var objects = {
//         method: 'Delete',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     fetch(couseApi + '/' + id,objects)
//         .then(function(reponse) {
//             return reponse.json()
//         })
//         .then(function() {
//             var courseid = document.querySelector('.course-' + id)
//             if(courseid) {
//                 courseid.remove()
//             }
//         })  
// }

// //
// function handleUpdateCourse(data, callback, id) {
//     var objects = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     }
//     fetch(couseApi + '/' + id, objects)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }



// //
// function rendercourse(courses) {
//     var innerblock = document.querySelector('.list-courses') 
//     var result = courses.map(function(course) {
//         return `<li class ="course-${course.id}">
//             <h2 >${course.title}</h2>
//             <span>${course.coin}</span>
//             <button onclick ="handledeleteCourses(${course.id})">Xóa</button>
//             <button onclick="fillCourse(${course.id})">Sửa</button>
//         </li>`
//     })

//     innerblock.innerHTML = result.join('')
    
// }

// //
// function handlecreatform() {
//     var submit = document.querySelector('.create')
//     submit.onclick = function() {
//         var title = document.querySelector('input[name="title"]').value
//         var coin = document.querySelector('input[name="coin"]').value
//         var formdata = {
//             title : title,
//             coin : coin
//         } 
//         postcourseses(formdata,function() {
//             getcourses(rendercourse)
//         })
//     }

// }

// // update


// function fillCourse(id) {
//      var submit = document.querySelector('.create');

//      var elementone = document.querySelector(`.course-${id} h2`).textContent
//      var elementtwo = document.querySelector(`.course-${id} span`).textContent
     
//     document.querySelector('input[name="title"]').value = elementone
//      document.querySelector('input[name="coin"]').value = elementtwo

//     submit.innerHTML = "Update"
    
//     submit.onclick = function() {
//         var title = document.querySelector('input[name = "title"]').value;
//         var coin = document.querySelector('input[name = "coin"]').value;
//         var formData = {
//             title: title,
//             coin: coin,
//         }
//         handleUpdateCourse(formData,function() {
//             getcourses(rendercourse)
//             document.querySelector('input[name = "title"]').value = "";
//             document.querySelector('input[name = "coin"]').value = "";
//             handlecreatform();
//             submit.innerHTML = "Submit"
//         },id)
//     }

// }


//----+++++ES6++++-----///

1
//let,const

1.0 //khác nhau của var let const

//khác nhau phạm vi truy cập
// if(true) {
//     var language = 'javacript basic'
// }
// console.log(language) //var truy cập ngoài block đc nhưng let với const thì ko

// //hosting : đưa lên đầu
// a = 1
// var a 
// console.log(a) //nó sẽ tự đưa lên đầu nhưng let const ko hỗ trợ hosting

// //asignment
// var a = 1
// a = 100
// console.log(a) //var và let cho phép gán lại nhưng const thì ko (lưu ý dấu bằng)

2.0  //teamperlet string

// const language = 'javacript'
// const languages2 = 'Php'
// const getlanguags = `Đây là ngôn ngữ ${language} ${languages2}`// dùng để nối các biến
// console.log(getlanguags)
// const getlanguages2 = `kí tự đặc biết \${}` //thêm \ để viết kí tự đặc biệt
// console.log(getlanguages2)


2 // arow function

1.0
//ví dụ 1
// const succces = function(log) {
//     console.log(log)
// }
// succces('Message.....')  //viết theo bthuong

// const succcess2 = (log) => {
//     console.log(log)
// }

// succcess2('Message2...') //viết theo es6

// //ví dụ 2
// const longtime = (a,b) => {
//     return a + b
// }
// console.log(longtime(2,2)) 

// //ở trên là hàm return nên có cách viết ngắn hơn
// const longtime1 = (a,b) => a + b  //xong 1 hàm
// console.log(longtime1(2,2)) 

// //viết tạo ra một object
// const longtime2 = (a,b) => ({a:a, b:b})
// console.log(longtime2(2,2))


// //Nếu như chỉ nhận 1 tham số thôi
// const succcess3 = log => console.log(log)

// succcess3('Message3...')  //bỏ luôn ngoặc

3 // Classes

1.0 //cách cũ
// function courses(name,coin) {
//     this.name = name
//     this.coin = coin
// }

2.0 //cách mới
// class courses {
//     constructor(name,coin){
//         this.name = name
//         this.coin = coin
//     }

//     getname() {
//         return `${this.name}`
//     }

  
// }

// const jscourses = new courses('Javacript',500)
// const phpcourses = new courses('php',500)

// console.log(jscourses.getname())
// console.log(phpcourses.getname())

// console.log(jscourses,phpcourses)

//ví dụ thực
// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }

//     getname() {
//         return `{Tên: ${person.name}, tuổi: ${person.age}}`
//     }
// }

// // Expected results
// const person = new Person('Long', 22);
// console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22


4
//giá trị mặc định khi không truyền thường là tham số thư 2
1.0
// function bloger(log,isSucces = false) {
//     if(isSucces) return alert(log)
//     console.log(log)
// }
// bloger('message..',true)
2.0
// function bloger2(log,type = log) {
//     console[type](log)
// }
// bloger2('message..','warn')



5 //viết object có key và value ngắn gọn hơn    
1.0
// var name = 'javacript'
// var coin = 500

//cách bình thường
// var course = {
//     name : name,
//     coin : coin
// }

//es6 nếu như trùnng key và value thì
// const course = {
//     name,
//     coin,
//     getname() {
//         return this.name
//     }//thêm function
// }
// console.log(course.getname())

2.0
//định nghĩa key cho object
// var filename = 'name'
// var fliicoin = 'coin'
// var courses = {
//     [filename] : 'javacript',
//     [fliicoin] : 500
// }
// console.log(courses)


6
//Destructuring :dùng cho array va object
1.0
// var language = ['php','javacript','Ruby']
// var [a,b,c] = language
// var [a] = language
// console.log(a) //lấy các phần tử trong mảng ra

2.0
// var language2 = ['php','javacript','Ruby']
// var [a,b,c] = language2
// var [a,...rest] = language2
// console.log(rest) //rest sẽ là mảng trừ đi phần tử a lấy ra

3.0
// var objects = {
//     name:'javacript',
//     coin:500,
//     time:'two hourse'
// }
// var {name} = objects
// console.log(name) //lấy ra name một object

4.0
// var objects2 = {
//     name:'javacript',
//     coin:500,
//     time:'two hourse'
// }
// var {name,...newobject} = objects2
// console.log(newobject) // tạo ra một object mới loại bỏ name tương tự như xóa

5.0
// var objects3= {
//     name:'javacript',
//     coin:500,
//     time:'two hourse',
//     children: {
//         name:'reactjs'
//     }
// }

// var {name:fillname,children: { name }} = objects3
// console.log(fillname,name) //lấy ra name trong object con children và vị bị trùng nên sửa name lúc đầu là fillname


7
//Toán tử Resst
1.0
// function bloger(...param) {
//     console.log(param) //nó sẽ nhận về một mảng
// }
// bloger(1,2,3,4,5,6,7,8,9)

2.0
// function bloger1(a,b,...paramm) {
//     console.log(paramm) //lấy ra những phần tử ngoài a,b để xử lý
// }
// bloger1(1,2,3,4,5,6,7,8,9)

3.0
// function languages({name,...param}) {
//     console.log(name) // lấy ra đc value
//     console.log(param) // lấy ra đc object còn lại
// }
// languages({
//     name:'javacript',
//     coin: 250,
//     hours:"two hours"
// })

4.0
// function languages1([a,...param]) {
//     console.log(a) // lấy ra đc phần tử dầu tiên
//     console.log(param) // lấy ra mảng còn lại
// }

// languages1([1,2,3,4,5,6,7])


8
//toán tử spread
1.0 //nỗi mãng
// var array = ['javacript','php']
// var array2 = ['ruby','python']

// var array3 = [...array, ...array2]
// console.log(array3)  // nối lại

2.0 // nối object
// var object1 = {
//     name:'javacript'
// }
// var object2 = {
//     coin:250
// }

// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3) //nếu như trùng key thì sẽ lấy key phía sau

3.0
// var array3 = ['javaccript','Php','Ruby']
// function bloger(...rest) {
//    for(i = 0; i < rest.length; i++) {
//     console.log(rest[i])
//    }
// }

// bloger(...array3)

9 //teampalet string
1.0 // ví dụ
//viết theo es6
// function hilight([first,...strings],...values) {
//     return values.reduce( (acc,curr) => [...acc,`<span>${curr}</span>`,strings.shift()]
//         ,[first]).join('')
// }

//viết thường
// function hilight([first,...strings],...values) {
//     return values.reduce(function(arr,curr) {
//         return [...arr,`<span>${curr}</span>`,strings.shift()]
//     },[first]).join('')
// }

// var brand = 'f8'
// var courese = 'javacript'
// var html = hilight`Học lập trình ${courese} tại ${brand} !`
// console.log(html)

10
//optianal chaning
//vd1
// var object = {
//     name : 'Huy',
//     age : 12,
//     mail: {
//         mail2: 'congachoi6@gmail.com',
//     //     age : {
//     //         age2 : 24,
//     //         date : {
//     //             date2 : 'không bốn không năm 1998'
//     //         }
//     //     }
//      }
// }
// if(object.mail.age?.date) {
//     console.log(object.mail.age.date.date2)
// } // dùng dấu hỏi chấm say key để biết key đó có tồn tại hay ko , nếu key đó hết báo lỗi thì key đó ko tồn tại

//vd2
// var object2 = {
//     // getname: function(value) {
//     //     console.log(value)
//     // }
   
// }

// object2.getname?.(123) //thêm '?.' để biết hàm đó có tồn tại hay ko và nếu hết báo lỗi thì hàm đó ko tồn tại


//+++Hiệu ứng đóng mở side bar+++///
// function start() {
//     var arrays = ['javacript','Php','Ruby']
//     var news = arrays.map(function(array) {
//         return `<li>${array}</li>`
//     })
//     var html = news.join('')
//     var namestudent = document.querySelector('.Namestudent')
//     namestudent.innerHTML = html

//     var Menu = document.querySelector('.menu')
//     var Menuheight = Menu.clientHeight
//     var boxing = document.querySelector('.boxstudio')
//     boxing.onclick = function() {
//         var close = Menu.clientHeight === Menuheight
//         if(close) {
//             Menu.style.height = 'auto'
//         } else {
//             Menu.style.height = null
//         }
//     } 
// }
// start()

// function highshow() {
//     var header = document.querySelector('.header')
//     var headerhight = header.clientHeight
//     var element = document.getElementById('element')
//     element.onclick = function() {
//         var isclosed = header.clientHeight === headerhight
//         if(isclosed) {
//             header.style.height = 'auto'
//         } else {
//             header.style.height = '22px'
//         }
//     }
// }
// highshow()


// //+++++ Hiệu ứng tab qua lại menu +++///

// var tabsitem = document.querySelectorAll('.tab-item') 
// var tabspane = document.querySelectorAll('.tab-pane')
// var tabactive = document.querySelector('.tab-item.active')

// var lineactive = document.querySelector('.tabs .line')

// lineactive.style.left = tabactive.offsetLeft + 'px'
// lineactive.style.width = tabactive.offsetWidth + 'px'


// tabsitem.forEach((tabs,index) => {
//     const pane = tabspane[index]
//     tabs.onclick = function() {
//         tabactive.classList.remove('active')
//         var paneactive = document.querySelector('.tab-pane.active')
//         paneactive.classList.remove('active')

//         lineactive.style.left = this.offsetLeft + 'px'
//         lineactive.style.width = this.offsetWidth + 'px'

//         this.classList.add('active') // add class vào
//         pane.classList.add('active')
        
//     }
// })






// function arrToObj(arr) {
//     return arr.reduce(function(init, [key, value]){
//       return {...init,[key]:value};
//     },{});
// }


// const obj2 = arrToObj([
//     ['name', 'Duc Long'], 
//     ['age', 18], 
//     ['address', 'Ha Noi']
// ])

// console.log(obj2)




// Lưu ý es6
1// var name = 'Huy'
// var age = 24

// var infor = {
//     name,
//     age,
//     getname() {
//         return this.name
//     }
// }

// console.log(infor)
// console.log(infor.getname())

2// var languages = ['javacript','ruby','Php']

// var [,b,...rest] = languages
// console.log(b)
// console.log(rest)

3// var infor = {
//     name:'Phan Phụng Huy',
//     age:24,
//     contructer: {
//         name:'Phan Minh Oanh'
//     }
// }
// var {name:parentElement,contructer:{name},...object} = infor
// console.log(name)
// console.log(object)
// console.log(parentElement)


4// function obj(a,b,...param) {
//     console.log(param)
// }

// console.log(obj(1,2,3,4,5,6,7,8))


5// function obj({name,age}) {
//     console.log(name)
//     console.log(age)
// }
// console.log(obj({
//     name:'Huy',
//     age:24
// }))

6// function obj([a,b,c]) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(obj([
//     'javacript',
//     'Php',
//     'ruby'
// ]))

7// var array = ['javacript','Php','ruby']
// var array1 = ['python','html']
// var array3 = [...array,...array1]
// console.log(array3)


8// var obj1 = {
//     name:'Phan Phụng Huy',
//     age:24
// }

// var obj2 = {
//     mail:'congachoi6@gmail.com',
//     address:'Đà Nẵng'
// }

// var obj3 = {
//     ...obj1,
//     ...obj2
// }

// console.log(obj3)

9// var language = ['javacript','PhP','Ruby']

// function langua(...param) {
//     for(i = 0; i < param.length; i++) {
//         console.log(param[i])
//     }
// }

// langua(...language)


/////++++++++ReacJs++++++////////

const root = document.getElementById('root')

var h1 = document.createElement('h1')

h1.innerText = 'Hello Guys'
h1.setAttribute('id','King')
h1.style.color = 'red'
Object.assign(h1.style , {
    color : 'blue',
    background : 'black'

})

root.appendChild(h1)


