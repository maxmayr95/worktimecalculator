import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }


  public yerarlyToDaily(ammount: number) {
    return ammount / 12 / 30;
  }

  public dailyToMinute(ammount: number, hoursPerWeek:number) {
    let hoursPerDay = hoursPerWeek/5
    return ammount / hoursPerDay / 60;
  }
}
