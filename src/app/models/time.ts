export class CalculationTime {

    hours!: number;
    minutes!: number;
    readable!: string;

    public addMinutes(minutes: number) {
        var minTotal = this.minutes + minutes;
        this.minutes = minTotal % 60;
        this.hours += Math.floor(minTotal / 60);
        this.writeReadable();
    }

    public writeReadable() {
        var timeString = "";
        if (this.hours < 10) {
            timeString += "0" + this.hours;
        } else {
            timeString += this.hours;
        }
        timeString += ":";
        if (this.minutes < 10) {
            timeString += "0" + this.minutes;
        } else {
            timeString += this.minutes;
        }
        this.readable = timeString;
    }
    public zero() {
        this.hours = 0;
        this.minutes = 0;
    }

    public copyFrom(time: CalculationTime) {
        this.hours = time.hours;
        this.minutes = time.minutes;
        this.writeReadable();
    }

    public leftTill(maxTime: CalculationTime):number {
        var minutesLeft = maxTime.minutes-this.minutes;
        var leftHours = maxTime.hours - this.hours;
        minutesLeft += leftHours*60;
        return minutesLeft;
    }
}