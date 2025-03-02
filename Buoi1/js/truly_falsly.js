/**
 * Các kiểu dữ liệu khi convert sang BOOLEAN (toán tử true false) -> return False (còn lại thì là True)
 * 1. "" (Chuỗi rỗng)
 * 2. 0 (số 0)
 * 3. false
 * 4. null (trả về false nhưng LƯU Ý: typeof null -> object)
 * 5. undefined
 * 6. NaN (chú ý NaN == NaN thì trả về false, nghe vô lý nhưng do nó ko phải là số nên không thể so sánh được)
 */

// ----------------------------------------------------------------------------------------
// Vd1: Danh sách rỗng / object rỗng (-> true)
const empty_list = [];
if (empty_list.length) {
    console.log("Your empty_list had lenght > 0"); // 0 -> false -> không trả giá trí này
} else if (empty_list) { 
    console.log("Have empty_list"); //Run this code
}

//-----------------------------------------------------------------------------------------------------
// vd2: kiểm tra biến có tồn tại (Loại api) 

//-> sử dụng toán tử 3 ngôi
const none_list = undefined;

const none_var = none_list ? console.log(none_list) : console.log("None list is not defined");
console.log(none_var);

//ghi lại code (if)
if (none_list) console.log(none_list);
else console.log("None list in not definded.")

//Sử dụng so sánh (|| &&)
const ss = none_list || null;
console.log(ss);

//----------------------------------------------------------------------------------------
// KIỂU DỮ LIỆU
console.log(typeof 0); // 'number'
console.log(typeof NaN); //'number' mặc dù là Not a Number nhưng vẫn là kiểu number
// chuyển thành nmber *******
console.log(parseInt("123.67")); //123 -> Làm tròn xuống hàng đơn vị
console.log(parseFloat("123.6"))// 123.6 -> Chuyển thành kiểu số thực Real number

console.log(typeof ""); // 'string'
//chuyển thành string *******
console.log(String(true)); // chữ "true"
console.log(String(123.6)); // "123.6"
console.log("90" + 1); // 901 -> Chuỗi chỉ có thể cộng
console.log("90" - 1); //89 -> (Vì string không có toán tử trử "-")

console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof true);// 'boolean'

//Chuyển thành boolean *******
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'

//Các kiểm tra Array (phân biệt với object []) *******
console.log(Array.isArray([])); // -> true
console.log(Array.isArray({})); // -> true

//---------------------------------------------------------------------------------------------
// TOÁN TỬ LOGIC
// and (và) '&&': trả về giá trị false gần nhất 
// => nếu không có false tỏng biểu thức => trả về giá trị true cuối cùng
console.log(true && true && 1); //Vì từ đầu đến cuối không có giá trị true nào hết thì console.log sẽ lấy giá trị true cuối cùng
console.log("" && true && []); // còn lúc dò soát thì có 2 giá trị false là chuỗi rộng và '[]' thì console.log sẽ lấy giá trị false đầu tiên rất khác so với true

// or (hoặc) '||nhất
// => nếu không có true trong biểu thức => trả': trả về giá trị true gần  về giá trị false cuối cùng
console.log(0 || null || undefined); //true (xét được cái đầu true thù lấy cái true luôn)
console.log(null || 0 || "1"); // "1"






