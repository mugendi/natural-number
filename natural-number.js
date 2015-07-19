var _=require('lodash')
var readint = require('readint')
var splitWords = require('icu-wordsplit')


var natNumber=function(options){

	natNumber.options=_.extend({
		lang:'en'
	},options)

	

}

natNumber.prototype={
	parse:function(string){
		// console.log(string,natNumber.options);

		// console.log(readint('one', natNumber.options.leng))
		natNumber.walk_string(string)
	},
	walk_string:function(string){
		console.log(string);
		//walk thru this string picking numbers

		var results = splitWords('The quick brown fox jumps over the lazy dog.');

		console.log(words)





	}
}




module.exports= natNumber;