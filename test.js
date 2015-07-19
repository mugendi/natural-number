
var natN=require('./natural-number.js');

var natural_number=new natN({
  lang:'en'
})

var string= 'there are two hundred and fifty two cowna and fourteen goats';

natural_number.parse(string)


console.log('pushing to git...')

require('./git-publish.js')


