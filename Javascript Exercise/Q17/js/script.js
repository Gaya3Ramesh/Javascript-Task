let Employee = {
    Employee_Name: "Gayathri", 
    Id: "88425", 
    Age: 23,

    employeeDetail: function() {
        return 'Employee Name: ' + this.Employee_Name + ' <br>' + 'Employee Id: ' + this.Id + ' <br>' + 'Employee Age: ' + this.Age
    }
};

document.body.innerHTML = Employee.employeeDetail();




