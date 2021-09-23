import { CalculationTime } from "./time";

export class Salary {
    yearly!: number;
    monthly!: number;
    daily!: number;
    salaryPerMinute!: number;
}
export class Tax {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
}

export class Pillar {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}

export class Rent {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}
export class Food {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}

export class GoOut {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}
export class Other {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}

export class Saving {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
    
}
export class WorkTime {
    salary: Salary = new Salary();
    tax: Tax = new Tax();
    pillar:Pillar = new Pillar();
    rent:Rent = new Rent();
    food:Food = new Food();
    goOut:GoOut = new GoOut();
    other:Other = new Other();
    saving:Saving = new Saving();
    maxTime:CalculationTime = new CalculationTime();
}

