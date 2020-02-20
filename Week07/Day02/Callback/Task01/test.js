'use strict';

function doHomework(function1, function2) {
    console.log('a');
    function2();
  }
  
  doHomework('math', function() {
    console.log('b');
  });

  let myArray = [1, 2, 3];

  function addOne(array) {
      for (let i = 0; i < array.length; i++) {
          array[i] ++;
          
      }
      return array;
  }
      
  console.log(addOne(myArray));