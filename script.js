"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentWithoutEncapsulation {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    showGrade() {
        console.log(`${this.name} grade: ${this.grade}`);
    }
}
let student1 = new StudentWithoutEncapsulation("Eduardo", 8.5);
student1.showGrade();
student1.grade = 10;
student1.showGrade();
student1.grade = 999;
student1.showGrade();
student1.grade = -9;
student1.showGrade();
//# sourceMappingURL=script.js.map