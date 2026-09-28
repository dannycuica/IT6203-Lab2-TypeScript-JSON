import type { Student } from "./student.js";
export declare class StudentManager {
    private students;
    constructor(students: Student[]);
    getAllStudents(): Student[];
    getActiveStudents(): Student[];
    findStudentById(id: number): Student | undefined;
    getStudentCount(): number;
}
//# sourceMappingURL=student-manager.d.ts.map