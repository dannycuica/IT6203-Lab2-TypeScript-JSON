import type { Student } from "./student.js";

export class StudentManager {
    private students: Student[];

    constructor(students: Student[]) {
        this.students = students;
    }

    getAllStudents(): Student[] {
        return this.students;
    }

    getActiveStudents(): Student[] {
        return this.students.filter(student => student.active);
    }

    findStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    getStudentCount(): number {
        return this.students.length;
    }
}