var _=require('lodash')
var readint = require('readint')
var S = require('string')
var numeral = require('numeral')


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
		// start with a blank array
		var concat_words=[];
		//words to skip
		var skipwords=['and']
		var stopwords=['and']
		var numbers=[]


		//walk thru this string picking numbers

		var words = S(string).humanize()
							 .strip(stopwords) //remove certain noise words within numbers
							 .stripPunctuation() //remove puncts
							 .s
							 .toLowerCase()
							 .split(' ');

		//compact words
		words=_.compact(words);
		//add one  token at the end to ensure even last word is looped over
		words.push('NOT NUMBER')

		var number=null;

		console.log(words)

		//loop thru the words
		words.forEach(function(word){

			//first deal wit formatted numbers using numeral
			word=numeral().unformat(word);

			//test for number
			number= readint(word, natNumber.options.leng) 

			console.log(word,number)

			//add word to concat untill number match is broken
			if(number>-1){

				concat_words.push(word);

			}
			else{
				//if concatwords then read the number
				if(concat_words.length){

					number=readint(concat_words.join(' '), natNumber.options.leng);

					numbers.push(number)
				}
				//reset concat words
				concat_words=[];
			}

		})

		
		console.log(concat_words)

		console.log(words)
		console.log(numbers)



	}
}




module.exports= natNumber;