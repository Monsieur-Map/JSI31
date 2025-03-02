const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
  ];

  //Lọc phòng ban tức (filt the department)
  console.group('HR Department')
  const hrDep = employees.filter((staff) => staff.department == "HR");
  console.log("HR staff list: ", hrDep);

  //Tính tổng salary 
  const totalSalaryHR = hrDep.reduce((prev, cur) => prev + cur.salary, 0);//Phần reduce là 0
//   console.log(totalSalaryHR);

  // Tính salary trung binhf
  const avgSalaryHR = Math.round((totalSalaryHR /hrDep.length) *100) /100;
  console.log("Mức lương trung bình của phòng ban HR: ", avgSalaryHR);


  //IT---------------------------------------------------------------------
  console.group('IT Department')
  const itDep = employees.filter((staff) => staff.department == "IT");
  console.log("IT staff list: ", itDep);

  //Tính tổng salary 
  const totalSalaryIT = hrDep.reduce((prev, cur) => prev + cur.salary, 0);//Phần reduce là 0
//   console.log(totalSalaryHR);

  // Tính salary trung bình
  const avgSalaryIT = Math.round((totalSalaryIT /itDep.length) *100) /100;
  console.log("Mức lương trung bình của phòng ban HR: ", avgSalaryIT);

  //Bảng chứa phòng ban chứa mức lương trunb bình > 65000
  const overAvg = [avgSalaryHR, avgSalaryIT].filter((avg)=> avg>65000);
  console.log("Phòng ban có mức lương trung bình cao hơn 65k là: ", overAvg);