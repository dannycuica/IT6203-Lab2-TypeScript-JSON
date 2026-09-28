import { Person } from "./person.js";

export class StudentProfile extends Person {
    constructor(
        name: string,
        email: string,
        public readonly course: string,
        public readonly year: number
    ) {
        super(name, email);
    }

    getDescription(): string {
        return `${this.name} is studying ${this.course} in year ${this.year}.`;
    }
}