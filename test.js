
console.log('pushing to git')


//push to git
require('shelljs/global');

var cmd ='git status && git add -A && git commit -m "natural_number Auto-commit" && git push -u --all';

exec(cmd, function(code, output) {
  // console.log('Exit code:', code);
  console.log('Program output:', output);
});




var natN=require('./natural-number.js');

var natural_number=new natN({
  lang:'en'
})

var string= 'there are two hundred and fifty two cowna and fourteen goats';

natural_number.parse(string)


