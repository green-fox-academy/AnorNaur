// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: any = [1, 2, 3, 8, 5, 6];

for (let i: number = 0; i < numList.length; i++){
    if (i === 7) {
        numList[i] = numList[i] / 4;
          
    }
}

console.log(numList);