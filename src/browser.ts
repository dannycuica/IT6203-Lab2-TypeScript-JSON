import studentsData from "./data/students.json" with { type: "json" };
import type { Student } from "./models/student.js";

const students: Student[] = studentsData;

const container = document.getElementById("student-list");

if (!container) {
    throw new Error("Student list container was not found.");
}

for (const student of students) {
    const card = document.createElement("div");

    card.className = `student ${
        student.active ? "active" : "inactive"
    }`;

    card.innerHTML = `
        <strong>${student.name}</strong><br>
        Email: ${student.email}<br>
        Course: ${student.course}<br>
        Year: ${student.year}<br>
        Status: ${student.active ? "Active" : "Inactive"}
    `;

    container.appendChild(card);
}