const ReverseString = require('./ReverseString/ReverseString')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function start(){
    rl.question('Please enter the string you want to Reverse? ', (answer) => {
        console.log('You Entered The String:', answer);
        let result= new ReverseString(answer).getReverseString()
        console.log('Reverse Of The String:', result);
      });
}

start()