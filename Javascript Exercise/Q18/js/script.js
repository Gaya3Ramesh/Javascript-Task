
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    studentDetail: function(){
        return "Student Name: " + this.name + "<br>" + "Student Sclass: " +  this.sclass + "<br>" + "Student Rollno: " +  + this.rollno
    }
};

document.write("OBJECT BEFORE DELETING THE PROPERTY: <br><br>" + student.studentDetail());

document.write("<br>") ;
document.write("<br>") ;

delete student.rollno;
document.write("OBJECT AFTER DELETING THE PROPERTY: <br><br>" + student.studentDetail());