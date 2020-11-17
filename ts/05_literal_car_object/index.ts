// https://github.com/Klod19/JS-Classes-Exercises/blob/master/main1.js
/*
CAR OBJECT

Create a class with methods accelerate, decelerate and fullBreak using the builder pattern

Examples
new Car().accelerate(50).decelerate(10).speed ➞ 40

new Car().accelerate(10).accelerate(30).fullBreak().speed ➞ 0

new Car().accelerate(10).decelerate(30).speed ➞ 0

Notes
speed can't go negative
*/

export class Car {
    speed: number = 0;

    accelerate(speed: number): this {
        this.speed += speed;
        return this;
    }

    decelerate(speed: number): this {
        this.speed -= speed;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this;
    }

    fullBreak(): this {
        this.speed = 0;
        return this;
    }
}