let getMotto = prompt("Please enter your favorite motto:");

let mottoCount = prompt(
  "how many times do you want to see your favorite motto?"
);

function printMotto(userMotto, mottoCount) {
  for (let i = 0; i < mottoCount; i++) {
    console.log(userMotto);
  }
}

let motto = getMotto;
let count = mottoCount;
printMotto(motto, count);
