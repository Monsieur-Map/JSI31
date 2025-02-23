const employees = [
    {name: "John", salary: 50000, department: "IT"},
    {name: "Jane", salary: 60000, department: "HR"},
    {name: "Bob", salary: 55000, department: "IT"},
    {name: "Sophie", salary: 75000, department: "HR"},
    {name: "Mike", salary: 65000, department: "IT"},
    {name: "Emily", salary: 80000, department: "HR"},
    {name: "David", salary: 70000, department: "IT"},
]
const avgHighSalary = employees
    .filter(employee => employee.salary > 55000) // Lọc nhân viên có lương cao
    .map(employee => employee.salary) // Lấy danh sách lương
    .reduce((sum, salary, _, arr) => sum + salary / arr.length, 0); // Tính trung bình

console.log(avgHighSalary);
