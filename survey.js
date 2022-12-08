const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 rl.question('What\'s your name? Nicknames are also acceptable:)', (answerOne) => {
  console.log(`Nice to meet you: ${answerOne}`);

     rl.question("What's an activity you like doing?", (answerTwo) => {
    console.log(`${answerTwo} sounds like fun`);
    
    rl.question("What do you listen to while doing that?", (answerThree) => {
      console.log(`${answerThree} is a great choice`);
      
      rl.question("Which meal is your favorite?(ex:dinner, brunch, etc.)",(answerFour) => {
        console.log(`${answerFour} is my favorite too!`);
      
        rl.question("What is your favorite thing to eat for that meal?", (answerFive) => {
          console.log(`${answerFive} sounds delicious`);
          
          rl.question("Which sport is your absolute favorite?", (answerSix) => {
            console.log(`${answerSix} really is a great sport!`);
          
            rl.question("What is your superpower? In a few words tell us what you're amazing at!", (answerSeven) => {
              console.log(`${answerSeven} is an incredible superpower to have`);
              
              
              rl.write(`Your profile Summary: 
              Name/Nickname: ${answerOne}, 
              Activity: ${answerTwo}, 
              Music Selection: ${answerThree},
              Meal Preference ${answerFour},
              Favorite Food: ${answerFive},
              Favortie Sport: ${answerSix}, 
              SuperPower: ${answerSeven}
              `
                + "\n");  
              
             
              rl.close();
            });
          });  
        });
      }); 
    });   
  });
});

