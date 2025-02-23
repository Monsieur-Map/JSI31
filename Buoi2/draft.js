const obj1 = {name: 'a', age: 10};
const obj2 = {... obj1, age: 20} // Khúc đầu thay đổi còn khúc age sau phải ghi giống với giá trị obj1 để so sánh
Object.assign(obj1, obj2);
console.table({obj1,obj2});