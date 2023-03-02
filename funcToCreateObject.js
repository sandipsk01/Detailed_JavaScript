function createStudent(name, rollNo, marks){
    var student={};
    student.name=name;
    student.rollNo=rollNo;
    student.marks=marks;
    return student;
}

var student1=createStudent("Sandip",1,30);
var student2=createStudent("XYZ",2,20);
student1;
student2;