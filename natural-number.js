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
		//walk thru this string picking numbers

		var words = S(string).humanize().s.split(' ')

		console.log(words)





	}
}




module.exports= natNumber;