var _=require('lodash')
var parse_numbers=require('parse-numbers')
var parse_dates = require ( 'parse-dates' )
var parse_quantity = require('js-quantities-all')

var async=require('async');

var natNumber=function(options){

	natNumber.options=_.extend({
		lang:'en',
		lang_name:'english',
		include_formatted:true,
		include_ordinals:true
	},options)
}

natNumber.prototype={

	parse:function(string,omit_string,callback){
		// console.log(string,natNumber.options);

		// console.log(readint('one', natNumber.options.lang))
		var parsed={}

		async.waterfall([
			//start waterfall
			function(callback){
				callback(null,string,parsed)
			},
			//numbers
			natNumber.prototype.parse_numbers,
			//quantities
			natNumber.prototype.parse_quantities,
			// dates
			natNumber.prototype.parse_dates


		],function (err,text, parsed) {
		    // result now equals 'done'

		    //if omit string
		    if(omit_string){
			    for(var key in parsed){
			    	parsed[key]=_.omit(parsed[key],'string');
			    }	
		    }
		    

		    callback(parsed)
		})

	
	},

	parse_dates:function(string,parsed,callback){
		var p=parse_dates(string);
		parsed=_.merge(parsed,{dates:p});
		callback(null,string,parsed)
	},
	parse_quantities:function(string,parsed,callback){

		var units=parse_quantity.getUnits(),
			toAll=[];;
		var QtyRegex=new RegExp('\\b[0-9]+\\s*('+units.join('|')+')\\b','ig');

		// pick all values looking like quantities i.e 10 l, 15 kgs, 5BG etc
		var matches=string.match(QtyRegex);

		// var out=_.clone(string);
		// var annotated=_.clone(string);
		var measures={

			measures:[],
			string:{
				in:_.clone(string),
				out:_.clone(string),
				annotated:_.clone(string)
			}
		};

		if(matches){
			//loop through the units converting each
			matches.forEach(function(measure){

				//set measure
				qty = parse_quantity(measure); // factory
				//convert to all applicable units
				toAll=qty.toAll();	

				//replace with first str instance
				measures.string.annotated=measures.string.annotated.replace(measure,"{MEASURE: "+toAll[0].str+"}");

				measures.measures=_.union(measures.measures,toAll);
			})
	
		}

		// return measures;
		parsed=_.merge(parsed,{measures:measures});
		callback(null,string,parsed)
		
	},
	parse_numbers: function(string,parsed,callback){
		var p=parse_numbers(string);
		parsed=_.merge(parsed,{numbers:p});

		callback(null,p.string.out,parsed)
	},

	splitWords:function(string,stopwords){

		var words=[];

		S(string).strip(stopwords) //remove certain noise words within numbers
				 .collapseWhitespace() //remove puncts
				 .trim()							 
				 .split(' ')
				 .forEach(function(word){

				 	
				 	word=word
				 			.replace(/[\.\?!]$/,'')//remove some ending puncts
				 			.replace(/([a-z])([A-Z])/g, '$1' + ' ' + '$2') //decamelize
				 			.replace(/([^a-zA-Z0-9])([a-zA-Z])/g, '$1' + ' ' + '$2') //decamelize on non letters
				 			.replace(/([a-zA-Z])([^a-zA-Z0-9])/g, '$1' + ' ' + '$2') //decamelize on non letters
				 			.split(' ') //add all the words
				 			.forEach(function(w){
				 				if(w.length){words.push(w);}				 				
				 			});

				 });

		// console.log(words)
		return words;

	}
}




module.exports= natNumber;