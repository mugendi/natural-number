//push to git
var shell = require('shelljs');

var cmd ='git status && git add -A && git commit -m "natural_number Auto-commit" && git push -u --all';


console.log("\n\n pushing to git");

shell.exec(cmd, {silent:true}, function(code, output) {
  // console.log('Exit code:', code);
  console.log('Program output:', output);
});

