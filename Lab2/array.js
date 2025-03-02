const arr = [1, "123", "abc", 1.3, [1,2,3]];
// [POP] --------------------------------------------------
//Note: xoá phần tử cuối cùng trong danh sách và return => phần tử đã xoá
console.group("POP")
console.log("POP:", arr.pop());
console.log("After change: ", arr);
console.groupEnd();



// [PUSH] ---------------------------------------------------------------
//[NOTE] Thêm 1 phần tử cuối danh sách => Độ dài mảng mới nhất
console.group("PUSH")
console.log("PUSH: ", arr.push());
console.log("After change: ", arr);
console.groupEnd();

// [SHIFT]------------------------------------------------------------
//[NOTE] Xoá phần tử đầu tiên trong danh sách => Phần tử đã xoá
console.group("SHIFT")
console.log("SHIFT:", arr.shift());
console.log("After change: ", arr);
console.groupEnd();

//[UNSHIFT]-----------------------------------------------------------
//[NOTE] Thêm phần tử vào đầu danh sách => độ dài mảng mới nhất
console.group("UNSHIFT")
console.log("UNSHIFT:", arr.unshift());
console.log("After change: ", arr);
console.groupEnd();

//[LENGTH]------------------------------------------------------------------
// [NOTE]: property// thuộc tính => Độ dài mảng
console.group("LENGTH")
console.log("LENGTH: ", arr.length());
console.log("After change: ", arr);
console.groupEnd();