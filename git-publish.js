//push to git
require('shelljs/global');
var cmd ='git status && git add -A && git commit -m "natural_number Auto-commit" && git push -u --all';

exec(cmd, function(code, output) {
  // console.log('Exit code:', code);
  console.log('Program output:', output);
});

