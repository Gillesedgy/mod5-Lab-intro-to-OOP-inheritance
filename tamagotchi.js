// Create class below
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  // Methods
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(
      `Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`
    );
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`Refusal to take medicine`);
      this.energy -= 1;
    }
  }
  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      console.log("I am too happy to play");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy -= 1;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.energy -= 2;
      this.full -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      console.log(`${this.name} has been rehomed`);
      this.rehomed = true;
    }
  }
}
//NEW
const newTamagotchi = new Tamagotchi("Nola");
newTamagotchi.greet();

newTamagotchi.play();
newTamagotchi.status();

newTamagotchi.sleep();
newTamagotchi.status();

newTamagotchi.medicate();
newTamagotchi.status();

newTamagotchi.timePasses();
newTamagotchi.status();
/*
Hello, I'm Nola!
Energy: 9, Fullness: 8, Mood: 6, Sick: false
Energy: 8, Fullness: 7, Mood: 8, Sick: false
Energy: 12, Fullness: 4, Mood: 8, Sick: false
Refusal to take medicine
Energy: 11, Fullness: 4, Mood: 8, Sick: false
Energy: 10, Fullness: 3, Mood: 6, Sick: false
*/

// Do not edit below this line
module.exports = Tamagotchi;
