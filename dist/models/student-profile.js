import { Person } from "./person.js";
export class StudentProfile extends Person {
    constructor(name, email, course, year) {
        super(name, email);
        this.course = course;
        this.year = year;
    }
    getDescription() {
        return `${this.name} is studying ${this.course} in year ${this.year}.`;
    }
}
//# sourceMappingURL=student-profile.js.map