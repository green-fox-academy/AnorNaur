// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList2: any = [1, 2, 3, 4, 5];

for (let i: number = 0; i < numList2.length; i++) {
    if (i === 2) {
        numList2[i] = numList2[i] +1;
        console.log(numList2);
    }
}