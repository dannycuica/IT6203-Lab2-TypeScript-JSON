export class StudentManager {
    constructor(students) {
        this.students = students;
    }
    getAllStudents() {
        return this.students;
    }
    getActiveStudents() {
        return this.students.filter(student => student.active);
    }
    findStudentById(id) {
        return this.students.find(student => student.id === id);
    }
    getStudentCount() {
        return this.students.length;
    }
}
//# sourceMappingURL=student-manager.js.map