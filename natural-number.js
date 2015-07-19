var _=require('lodash')
var readint = require('readint')
var S = require('string')


var natNumber=function(options){

	natNumber.options=_.extend({
		lang:'en'
	},options)

	

}

natNumber.prototype={
	parse:function(string){
		// console.log(string,natNumber.options);

		// console.log(readint('one', natNumber.options.leng))
		natNumber.prototype.walk_string(string)
	},
	walk_string:function(string){
		
		console.log(string);
		// start with a blank string
		var concatenated_str='';

		//walk thru this string picking numbers

		var words = S(string).humanize().s.split(' ');
		var number=null;

		//loop thru the words
		words.forEach(function(word){

			//test for number
			number=readint(word, natNumber.options.leng);

			//add word to concat untill number match is broken
			
			console.log(word,number);


		})

		console.log(words)





	}
}




module.exports= natNumber;