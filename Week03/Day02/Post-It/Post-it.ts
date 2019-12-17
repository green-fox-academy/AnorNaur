'use strict';
class PostIt {
    backgroundColour: string;
    text: string;
    textColour: string;

constructor(backgroundColour: string, text: string, textColour: string){
    this.backgroundColour = backgroundColour;
    this.text = text;
    this.textColour = textColour;
    }
}

let Text1 = new PostIt('orange', 'Idea 1', 'blue');
let Text2 = new PostIt('pink', 'Awesome', 'black');
let Text3 = new PostIt('yellow', 'Superb!', 'green');
console.log(Text1);
console.log(Text2);
console.log(Text3);