class StudentWithoutEncapsulation{
    private name: string;
    private grade: number;

    constructor(name: string, grade: number){
        this.name = name;
        this.grade = grade;
    }

    public getGrade(): number{
        return this.grade;
    }

    public setGrade(value: number): void{
        if(value >= 0 && value <= 10){
            this.grade = value;
            console.log(`Grade set to ${value}`);
        }else{
            console.log(`Invalid grade! Must be between 0 and 10`);
        }
    }

    public showGrade(): void{
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