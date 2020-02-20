class Domino {
    values: number[];
    readonly firstValue: number;
    readonly secondValue: number;
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
        this.firstValue = valueA;
        this.secondValue = valueB;
    }
}
// let smtg = new Domino(1,2);
// console.log(smtg);


export {Domino};