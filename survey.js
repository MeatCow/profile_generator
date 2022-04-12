const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Devani loves listening to Ludovico Einaudi while coding,
 devouring Yak Momos for brunch, prefers Tennis over any other sport,
 and is amazing at dropping mad puns at inopportune times.
*/

const questions = [
  `What's your name? `,
  `What are your hobbies? `,
  `What about your favourite musical artist? `,
  `What's your favourite food? `,
  `What's your favourite sport? `
];

rl.question(questions[0], (name) => {
  rl.question(questions[1], (hobbies) => {
    rl.question(questions[2], (artist) => {
      rl.question(questions[3], (food) => {
        rl.question(questions[4], (sport) => {
          console.log(`${name} loves listening to ${artist} while ${hobbies.toLowerCase()},
chowing down on ${food} and truly enjoys the sport of ${sport.toLowerCase()}.`);
          rl.close();
        });
      });
    });
  });
});
