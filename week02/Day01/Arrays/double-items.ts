// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
// drinks[0] = drinks[0] + drinks[0];
// drinks[1] = drinks[1] + drinks[1];
// drinks[2] = drinks[2] + drinks[2];
// drinks[3] = drinks[3] + drinks[3];
// console.log(drinks);

// for (let i: number = 0; i < drinks.length; i++) {
//     drinks[i] = drinks[i] + drinks[i];
// }
// console.log(drinks);

drinks.forEach(function) {
    drinks[0] = drinks[0] + drinks[0];
}

console.log(drinks);