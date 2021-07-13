student = {name: "omar", age: 25, hometown: "bogura"};
console.log(student);
console.log(student.name);

// student.occupation = "Student";
student["occupation"] = "Student";
console.log(student);

delete student.occupation;
console.log(student);