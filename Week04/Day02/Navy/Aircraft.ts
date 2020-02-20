'use strict'

class Aircraft {
    currentAmmo: number;
    maxAmmo: number;
    baseDamage: number;
    type: string;

    constructor(maxAmmo: number, baseDamage: number, type?) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.currentAmmo = 0;
        this.type = type;
    }

    fight(): number {
        let damage = this.currentAmmo * this.baseDamage;
        this.currentAmmo = 0;
        return damage;
    }

    refill(refillAmm: number): number {
        let neededAmmo = this.maxAmmo - this.currentAmmo;
        if (neededAmmo < refillAmm) {
            refillAmm -= neededAmmo;
            this.currentAmmo += neededAmmo;
        } else {
            this.currentAmmo += refillAmm;
            refillAmm = 0;
        }
        return refillAmm
    }
    isPriority(): boolean {
        if (this.type === 'F16' && 'F35') {
            return true
        }
    }


}
class F16 extends Aircraft {
    constructor() {
        super(10, 15, 'F16')
    }
}


class F35 extends Aircraft {
    constructor() {
        super(8, 25, 'F35')
    }
}


class Carrier {
    aircrafts: Aircraft[];
    ammoStore: number;
    hp: number;
    constructor(ammo: number, hp: number) {
        this.ammoStore = ammo;
        this.hp = hp;
    }
    add(aircaft: Aircraft) {
        this.aircrafts.push(aircaft);
    }
    fill(): void {
        for (let i = 0; i < this.aircrafts.length, i++) {
            if (this.aircrafts[i].getPriority()) {
                this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
            }
        }
        for (let i = 0; i < this.aircrafts.length; i++) {
            this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
        }
    }
    fight(enemy: Carrier): void {
        let allDmg = 0;
        for (let i = 0; i < this.aircrafts.length; i++) {
            allDmg += this.aircrafts[i].fight();
        }
        enemy.hp -= allDmg;
    }

}

const a1: Aircraft = new F16();
const a2: Aircraft = new F16();

const b1: Aircraft = new F35();

const c1 = new Carrier(1000, 500);
c1.add(a1);
c1.add(b1);
c1.fill();

// let F16: Aircraft = new Aircraft(10,15);
// let rest = F16.refill(20);
// console.log(F16);
// console.log(rest);
// console.log(F16.fight);