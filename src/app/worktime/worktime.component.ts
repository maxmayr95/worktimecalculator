import { Component, OnInit } from '@angular/core';
import { CalculationTime } from '../models/time';
import { Field, Work } from '../models/work';
import { WorkTime } from '../models/worktime';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-worktime',
  templateUrl: './worktime.component.html',
  styleUrls: ['./worktime.component.css']
})
export class WorktimeComponent implements OnInit {

  public work:Work = new Work();
  public hoursPerWeek:number = 42;
  constructor(private calculateService:CalculateService) { }

  ngOnInit(): void {

    this.work.salary.yearly = 80000;
    this.work.tax.yearly = 6000;
    this.work.pillar.yearly = 6800;
    this.work.rent.monthly = 1200;
    this.work.food.monthly = 500;
    this.work.goOut.monthly = 500;
    this.work.other.monthly = 1000;
    

  }
  private initaliseSalary(){
    this.work.salary.monthly = this.work.salary.yearly / 12;
    this.work.salary.daily = Number(this.calculateService.yerarlyToDaily(this.work.salary.yearly).toFixed(2));

    this.work.salaryPerMinute = this.calculateService.dailyToMinute(this.work.salary.daily,this.hoursPerWeek);
  }

  private calculateNewFields(field:Field, endTimeBefore:CalculationTime){

    field.startTime = endTimeBefore;
    if(field.yearly!=null){
      field.monthly = field.yearly /12;
    }
    field.monthly.toFixed(2)
    
    field.daily = field.monthly / 22;
    field.daily = Number(field.daily.toFixed(2))
    let minutes = Math.ceil(field.daily/this.work.salaryPerMinute);
    let endTime = new CalculationTime();
    endTime.copyFrom(field.startTime);
    field.endTime = endTime;
    field.endTime.addMinutes(minutes);

    let totalTime = new CalculationTime();
    totalTime.zero();
    totalTime.addMinutes(minutes);
    field.totalTime = totalTime;

  }

  private calculateSaving(){
    let time = new CalculationTime();
    time.copyFrom(this.work.other.endTime);
    this.work.saving.startTime = time;
    var minutesLeft = this.work.saving.startTime.leftTill(this.work.maxTime);
    
    let endTime = new CalculationTime();
    endTime.copyFrom(this.work.saving.startTime);
    this.work.saving.endTime = endTime;
    this.work.saving.endTime.addMinutes(minutesLeft);

    let totalTime = new CalculationTime();
    totalTime.zero();
    totalTime.addMinutes(minutesLeft);
    this.work.saving.totalTime = totalTime;
    this.work.saving.daily = Number((minutesLeft * this.work.salaryPerMinute).toFixed(2));
  }


  public calculate(){

    this.initaliseSalary();
    if(this.work.salary.yearly==null){
      alert("Please fill out salary");
      return;
    }
    if(this.work.tax.yearly==null){
      alert("Please fill out tax");
      return;
    }
    if(this.work.pillar.yearly==null){
      alert("Please fill out pillar");
      return;
    }
    if(this.work.rent.monthly==null){
      alert("Please fill out rent");
      return;
    }
    if(this.work.food.monthly==null){
      alert("Please fill out food");
      return;
    }
    if(this.work.goOut.monthly==null){
      alert("Please fill out goOut");
      return;
    }
    if(this.work.goOut.monthly==null){
      alert("Please fill out goOut");
      return;
    }



    
    
    let time = new CalculationTime();
    time.hours = 8;
    time.minutes = 0;
    time.writeReadable();
    this.calculateNewFields(this.work.tax,time);
    this.calculateNewFields(this.work.pillar,this.work.tax.endTime);
    this.calculateNewFields(this.work.rent,this.work.pillar.endTime);
    this.calculateNewFields(this.work.food,this.work.rent.endTime);
    this.calculateNewFields(this.work.goOut,this.work.food.endTime);
    this.calculateNewFields(this.work.other,this.work.goOut.endTime);
    this.initialiseMaxTime();
    this.calculateSaving();

  }

  private initialiseMaxTime(){
    let minutes = 8*60+24;
    let time = new CalculationTime();
    time.copyFrom(this.work.tax.startTime)
    time.addMinutes(minutes);
    this.work.maxTime = time;
  }

}
