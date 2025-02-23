//function thường
function sum1() {
    const params = []
    //for cho index: lọc từ object argument -> trả về 1 mảng
    for (let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'number')
            params.push(arguments[i]);
        else throw new Error("Please add item in number type"); // Xuất lỗi nếu không là phần tử số
    }
    //reduce: tính trong mảng params
    const result = params.reduce(function(previousValue, currentValue, currentIndex, arr){
        console.table({previousValue,currentIndex,currentValue,arr});
        return previousValue + currentValue;
    }, 0); // Lấy từ giá trị ưu tiên (lấy giá trị i = 0 từ trong mảng)
    console.log(result);
}
sum1();

//---------------------------------------------------------------------------------------------------------
//function gọi và chạy luôn/ no name / chỉ chạy 1 lần
(function (a,b) {
    console.log(a+b);
})(1,2);

//-------------------------------------------------------------------------------------------
// ES6: arrow functions: không có CONTEXT (tức không có ngữ cảnh)
this.name = 'abc'
function hello1() {
    this.name = 'xyz'
    // this.getName = function () {
    this.getName = () => { //Cấp 2 => Lấy this cấp 1 (không có)
        () => console.log("1",this.name);
    };
}
const obj1 = new hello1();
obj1.getName();

const hello2 = () => {
    
    console.log(this);
}

hello2();

function hello(newname) {
    return "hello" + newname;
}

const h = (newname) => "hello" + newname;
const sum = (...data) => //Spread operator, rải rác rác các giá trị trong hàm sum (BUT nếu trước đó có (a,b,...data)) thì gọi là REST operator
    data.reduce((previousValue, currentValue, currentIndex, arr) => 
        previousValue + currentValue,0);
console.log(sum(1,2,3,4,5,6));

