const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'cmd',
    message: 'Enter A Command (Type --help for a list of commands)'
  }
];

const addPrompt = [
  {
  type: 'number',
  name: 'num1',
  message: 'enter the first number'
  },
  {
    type: 'number',
    name: 'num2',
    message: 'enter the second number'
    }
];

const subtractPrompt = [
  {
  type: 'number',
  name: 'num1',
  message: 'enter the first number'
  },
  {
    type: 'number',
    name: 'num2',
    message: 'enter the second number'
    }
];

async function funct () {
  while(true){


    const response = await prompts(questions);


    if(response.cmd == '--quit'){
      process.exit(1);
    }


    if(response.cmd == '--add'){
      const addResult = await prompts(addPrompt);
      console.log(`The result is: ${addResult.num1 + addResult.num2}`)
    }



    if(response.cmd == '--subtract'){
      const subtractResult = await prompts(subtractPrompt);
      console.log(`The result is: ${subtractResult.num1 - subtractResult.num2}`)
    }



    if(response.cmd == '--help'){
      console.log(`Commands
      --help: shows a list of commands.
      --quit: exits the program.
      --add: shows a prompt to add 2 numbers.
      --subtract: shows a prompt to subtract 2 numbers`)
    }


  }
 

};

funct()