"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentWithoutEncapsulation {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
    setGrade(value) {
        if (value >= 0 && value <= 10) {
            this.grade = value;
            console.log(`Grade set to ${value}`);
        }
        else {
            console.log(`Invalid grade! Must be between 0 and 10`);
        }
    }
    showGrade() {
        console.log(`${this.name} grade: ${this.grade}`);
    }
}
let student2 = new StudentWithoutEncapsulation("Eduardo", 8.5);
student2.showGrade();
student2.setGrade(10);
student2.showGrade();
student2.setGrade(999);
student2.showGrade();
student2.setGrade(-5);
student2.showGrade();
//# sourceMappingURL=script.js.map