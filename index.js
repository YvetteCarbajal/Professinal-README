const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");

const questions = [
   {
     type: 'input',
     name: 'title',
     message: 'What is the name of your Project Title ?',
   },
   {
     type: 'input',
     name: 'description',
     message: 'Provide a short description ?',
   },
   {
     type: 'input',
     name: 'installation',
     message: 'What are packages required to install your project ?',
   },
   {
     type: 'input',
     name: 'usage',
     message: 'Provide the steps and examples to use you generator ?',
   },
   {
     type: 'input',
     name: 'contribution',
     message: 'Add guidelines to add to project ?',
   },
   {
     type: 'input',
     name: 'test',
     message: 'What steps are required to run test on you project ?',
   },
   {
     type: 'input',
     name: 'license',
     message: 'which license would you like to use for this project ?',
   },
   {
     type: 'input',
     name: 'github',
     message: 'what is you Github URL ?',
   },
   {
     type: 'input',
     name: 'email',
     message: 'what is your email address ?',
   },
];
    
function writeToFile(fileName, data){
   fs.writeFile(fileName, data, function (err){
      if (err){
         return console.log(err);
      }
        console.log('The (generated)README.md file has been created');
    });
}

async function init(){
    console.log('starting the (Generated)README.md generator')

    const answers = await inquirer.prompt(questions);

    let readmecontent = generatorMarkdown(answers);

    writeToFile('(Generated)README.md', readmecontent);
}

init();
