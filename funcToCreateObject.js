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

// OR
//Using Constructor
function CreateStudent1(name, rollNo, marks){
    this.name=name;
    this.rollNo=rollNo;
    this.getRollNo=function(){
        return this.rollNo;
    };
}

var student01= new CreateStudent1("Sandip",1,30);   //called as constructor
var student02= CreateStudent1("XYZ",2,20);      //callled as general function it will take value if we returning anything
student01;
// getRollNo:f will get created for every object. It will take space for every occurence i.e. waste of memory.
