import { CalculationTime } from "./time";

export class Field {
    yearly!: number;
    monthly!: number;
    daily!: number;
    startTime!: CalculationTime;
    endTime!: CalculationTime;
    totalTime!:CalculationTime;
}

export class Work {
    salary: Field = new Field();
    tax: Field = new Field();
    pillar:Field = new Field();
    rent:Field = new Field();
    food:Field = new Field();
    goOut:Field = new Field();
    other:Field = new Field();
    saving:Field = new Field();
    maxTime:CalculationTime = new CalculationTime();
    salaryPerMinute!: number;
}

