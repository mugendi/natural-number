
var natN=require('./natural-number.js');

var natural_number=new natN({
  lang:'en'
})

var string= 'there are two hundred and fifty two cowna and fourteen goats. Negative twenty 4. She was the fifty second patient. What! Ksh1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door';


console.log(string+"\n\n\n")
natural_number.parse(string)




require('git-publish')
