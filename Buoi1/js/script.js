// Viết một cái hàm (function) để  count số lượng True có trong một mảng
// 1. countTrue([true, false, false, true, false]) ➞ 2
// 2. countTrue([false, false, false, false]) ➞ 0 
// 3. countTrue([]) ➞ 0

//--------------------------------------------------------------------------------------------
// [Cách 1]: dùng vòng lặp for 
function countTrue(arr) { //Hàm function được xem là ES5
    let countTrue = 0;
    for (let i = 0; i< arr.length; i++){
        if (String(arr[i] == "true" && typeof arr[i] === "boolean")){
            countTrue++;
        }
    }
    return countTrue;
}

//-------------------------------------------------------------------------
// [Cách 2]: forEach: không duyệt phần tử empty
// vd: Tạo một array có độ dài là 10. 10 phần tử đều là undefined
const empty_item = Array(10);  
console.log(empty_item);
empty_item.forEach((item) => console.log(item)); //Code does not run 

function countTrue_forEach(arr){
    let countTrue = 0;
    //Sử dụng toán tử 3 ngôi để so sánh
    arr.forEach((item) =>
    String((item) == "true" && typeof item === "boolean" 
        ? countTrue++ 
        : 0
    ));
}

//------------------------------------------------------------------------------------
// [Cách 3]: Vòng lặp WHILE (vòng lặp vô hạn)
function countTrue_while(arr) {
    let countTrue = 0;
    let n = 0;
    while (n< arr.length){
        if (String(arr[n] == "true" && typeof arr[n] === "boolean")){
            countTrue++;
        }
        n++;
    }
    return countTrue;
}

// ---------------------------------------------------------------------------------
// [Cách 4] ES6 array function => Arrow function -> Hàm không tên
// 1. Map
const countTrue_Map = (arr) => {
    let countTrue = 0;
    arr.map((item) =>  
        String(item) === "true" && typeof item === "boolean" ? countTrue++ : 0
    );
    return countTrue;
};
countTrue_Map([true, false, true]) // -> 2

// 2.Filter
const countTrue_filter = (arr) => {
    const countTrue = arr.filter(
        (item) => String(item) === 'true' && typeof item === 'boolean'

    );
    return countTrue.length;
};