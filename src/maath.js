export default class Maath {
  constructor(name) {
    this.name = name;
    this.attackValue = 100;
    this.distance = 1;
    this.stonedValue = false;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    let attack = this.attackValue - (this.distance - 1) * 10;
    if (this.stoned) {
      attack = Math.round(attack - Math.log2(this.distance) * 5);
    }
    return attack;
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get stoned() {
    return this.stonedValue;
  }
}
