'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNumber(n: number): number {
    
        return addNumber(n + n);
    
}

addNumber(1);