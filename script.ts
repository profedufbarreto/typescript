class StudentWithoutEncapsulation{
    name: string;
    grade: number;

    constructor(name: string, grade: number){
        this.name = name;
        this.grade = grade;
    }

    showGrade(): void{
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