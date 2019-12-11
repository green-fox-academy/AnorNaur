// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(a,b){
    let num = a/b;
       if (num === 0){
        console.log('fail');
    }
}



divide(10,0);