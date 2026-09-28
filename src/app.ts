import studentsData from "./data/students.json" with { type: "json" };
import type { Student } from "./models/student.js";
import { StudentManager } from "./models/student-manager.js";

const students: Student[] = studentsData;

const manager = new StudentManager(students);

console.log("=================================");
console.log("       IT6203 LAB 2");
console.log("   TypeScript + JSON Demo");
console.log("=================================");

console.log(`Total students: ${manager.getStudentCount()}`);

console.log("\nAll Students:");
for (const student of manager.getAllStudents()) {
    console.log(
        `${student.id}. ${student.name} | ${student.course} | Year ${student.year}`
    );
}

console.log("\nActive Students:");
for (const student of manager.getActiveStudents()) {
    console.log(`- ${student.name}`);
}

const selectedStudent = manager.findStudentById(1);

console.log("\nStudent Search:");
if (selectedStudent) {
    console.log(
        `Found: ${selectedStudent.name} (${selectedStudent.email})`
    );
} else {
    console.log("Student not found.");
}