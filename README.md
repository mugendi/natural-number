
#An advanced entity extractor for numbers, units and dates

This module is used to:
- parse numbers, units, dates in a string
- extract parsed numbers, units & dates
- expand parsed numbers, units, dates

Usage is pretty easy, simply give it a string to crunch...


```javascript

var natN=require('natural-number');

var natural_number=new natN({ lang:'en' })

var string= 'there are two hundred and fifty two cowna and fourteen goats. Negative twenty 4. She was the fifty second patient. What! Ksh1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january one thousand nine hundred and ninety four and will be forty four years old next week. Can you finish two liters of milk? :-) :\') :\'( . Wait he didnt call me that. IKR NKT ';

natural_number.parse(string,false,function(parsed){
	console.log(JSON.stringify(parsed,0,4))
})

```

Output:

```json

{
    "numbers": {
        "numerals": [
            252,
            14,
            24,
            52,
            1000,
            2,
            58,
            5368709120,
            0.78,
            3,
            5,
            1994,
            44,
            2
        ],
        "formatted": [
            "second",
            "Ksh1000",
            "2nd",
            "LVIII",
            "5GB",
            "78%",
            "5th"
        ],
        "ordinals": [
            "252nd",
            "14th",
            "24th",
            "52nd",
            "1000th",
            "58th",
            "3rd",
            "1994th",
            "44th",
            "2nd"
        ],
        "string": {
            "in": "there are two hundred and fifty two cowna and fourteen goats. Negative twenty 4. She was the fifty second patient. What! Ksh1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january one thousand nine hundred and ninety four and will be forty four years old next week. Can you finish two liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "out": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january 1994 will be 44 years old next week. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "annotated": "there are {NUMBER: 252} cowna {NUMBER: 14} goats. Negative {NUMBER: 24}. She was the {NUMBER: 52} patient. What! {NUMBER: 1000}! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs {NUMBER: 3} pints of blood urgently! President Moi was born in 5th january {NUMBER: 1994} will be {NUMBER: 44} years old next week. Can you finish {NUMBER: 2} liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT "
        }
    },
    "measures": {
        "measures": [
            {
                "val": 5,
                "units": [
                    "GB",
                    "gigabyte",
                    "gigabytes"
                ],
                "str": "5 (GB|gigabyte|gigabytes)"
            },
            {
                "val": 5000,
                "units": [
                    "MB",
                    "megabyte",
                    "megabytes"
                ],
                "str": "5,000 (MB|megabyte|megabytes)"
            },
            {
                "val": 5000000,
                "units": [
                    "KB",
                    "kilobyte",
                    "kilobytes"
                ],
                "str": "5,000,000 (KB|kilobyte|kilobytes)"
            },
            {
                "val": 5000000000,
                "units": [
                    "B",
                    "byte"
                ],
                "str": "5,000,000,000 (B|byte)"
            },
            {
                "val": 40000000000,
                "units": [
                    "b",
                    "bit"
                ],
                "str": "40,000,000,000 (b|bit)"
            },
            {
                "val": 3,
                "units": [
                    "pt",
                    "pint",
                    "pints"
                ],
                "str": "3 (pt|pint|pints)"
            },
            {
                "val": 1.4195294250000001,
                "units": [
                    "l",
                    "L",
                    "liter",
                    "liters",
                    "litre",
                    "litres"
                ],
                "str": "1.4195294250000001 (l|L|liter|liters|litre|litres)"
            },
            {
                "val": 0.37500000000000006,
                "units": [
                    "gal",
                    "gallon",
                    "gallons"
                ],
                "str": "0.37500000000000006 (gal|gallon|gallons)"
            },
            {
                "val": 1.5000000000000002,
                "units": [
                    "qt",
                    "quart",
                    "quarts"
                ],
                "str": "1.5000000000000002 (qt|quart|quarts)"
            },
            {
                "val": 5.999999987319742,
                "units": [
                    "cu",
                    "cup",
                    "cups"
                ],
                "str": "5.999999987319742 (cu|cup|cups)"
            },
            {
                "val": 47.99999997971158,
                "units": [
                    "floz",
                    "fluid-ounce",
                    "fluid-ounces"
                ],
                "str": "47.99999997971158 (floz|fluid-ounce|fluid-ounces)"
            },
            {
                "val": 96.00000028403781,
                "units": [
                    "tbs",
                    "tablespoon",
                    "tablespoons"
                ],
                "str": "96.00000028403781 (tbs|tablespoon|tablespoons)"
            },
            {
                "val": 288.0000002678071,
                "units": [
                    "tsp",
                    "teaspoon",
                    "teaspoons"
                ],
                "str": "288.0000002678071 (tsp|teaspoon|teaspoons)"
            },
            {
                "val": 0.04028282654548905,
                "units": [
                    "bu",
                    "bsh",
                    "bushel",
                    "bushels"
                ],
                "str": "0.04028282654548905 (bu|bsh|bushel|bushels)"
            },
            {
                "val": 5,
                "units": [
                    "th",
                    "therm",
                    "therms",
                    "Therm"
                ],
                "str": "5 (th|therm|therms|Therm)"
            },
            {
                "val": 527402000,
                "units": [
                    "J",
                    "joule",
                    "Joule",
                    "joules"
                ],
                "str": "527,402,000 (J|joule|Joule|joules)"
            },
            {
                "val": 5274020000000000,
                "units": [
                    "erg",
                    "ergs"
                ],
                "str": "5,274,020,000,000,000 (erg|ergs)"
            },
            {
                "val": 499880.575059523,
                "units": [
                    "BTU",
                    "btu",
                    "BTUs"
                ],
                "str": "499,880.575059523 (BTU|btu|BTUs)"
            },
            {
                "val": 126052103.250478,
                "units": [
                    "cal",
                    "calorie",
                    "calories"
                ],
                "str": "126,052,103.250478 (cal|calorie|calories)"
            },
            {
                "val": 126052.103250478,
                "units": [
                    "Cal",
                    "Calorie",
                    "Calories"
                ],
                "str": "126,052.103250478 (Cal|Calorie|Calories)"
            },
            {
                "val": 44,
                "units": [
                    "y",
                    "yr",
                    "year",
                    "years",
                    "annum"
                ],
                "str": "44 (y|yr|year|years|annum)"
            },
            {
                "val": 1388504744,
                "units": [
                    "s",
                    "sec",
                    "secs",
                    "second",
                    "seconds"
                ],
                "str": "1,388,504,744 (s|sec|secs|second|seconds)"
            },
            {
                "val": 23141745.73333333,
                "units": [
                    "min",
                    "mins",
                    "minute",
                    "minutes"
                ],
                "str": "23,141,745.73333333 (min|mins|minute|minutes)"
            },
            {
                "val": 385695.7622222222,
                "units": [
                    "h",
                    "hr",
                    "hrs",
                    "hour",
                    "hours"
                ],
                "str": "385,695.7622222222 (h|hr|hrs|hour|hours)"
            },
            {
                "val": 16070.656759259258,
                "units": [
                    "d",
                    "day",
                    "days"
                ],
                "str": "16,070.656759259258 (d|day|days)"
            },
            {
                "val": 2295.8081084656087,
                "units": [
                    "wk",
                    "week",
                    "weeks"
                ],
                "str": "2,295.8081084656087 (wk|week|weeks)"
            },
            {
                "val": 1147.9040542328044,
                "units": [
                    "fortnight",
                    "fortnights"
                ],
                "str": "1,147.9040542328044 (fortnight|fortnights)"
            },
            {
                "val": 4.3999999999999995,
                "units": [
                    "decade",
                    "decades"
                ],
                "str": "4.3999999999999995 (decade|decades)"
            },
            {
                "val": 0.4399999999999999,
                "units": [
                    "century",
                    "centuries"
                ],
                "str": "0.4399999999999999 (century|centuries)"
            },
            {
                "val": 2,
                "units": [
                    "l",
                    "L",
                    "liter",
                    "liters",
                    "litre",
                    "litres"
                ],
                "str": "2 (l|L|liter|liters|litre|litres)"
            },
            {
                "val": 0.5283441024831169,
                "units": [
                    "gal",
                    "gallon",
                    "gallons"
                ],
                "str": "0.5283441024831169 (gal|gallon|gallons)"
            },
            {
                "val": 2.113376409932468,
                "units": [
                    "qt",
                    "quart",
                    "quarts"
                ],
                "str": "2.113376409932468 (qt|quart|quarts)"
            },
            {
                "val": 4.226752819864936,
                "units": [
                    "pt",
                    "pint",
                    "pints"
                ],
                "str": "4.226752819864936 (pt|pint|pints)"
            },
            {
                "val": 8.453505621864432,
                "units": [
                    "cu",
                    "cup",
                    "cups"
                ],
                "str": "8.453505621864432 (cu|cup|cups)"
            },
            {
                "val": 67.62804508925426,
                "units": [
                    "floz",
                    "fluid-ounce",
                    "fluid-ounces"
                ],
                "str": "67.62804508925426 (floz|fluid-ounce|fluid-ounces)"
            },
            {
                "val": 135.25609063586379,
                "units": [
                    "tbs",
                    "tablespoon",
                    "tablespoons"
                ],
                "str": "135.25609063586379 (tbs|tablespoon|tablespoons)"
            },
            {
                "val": 405.7682710843519,
                "units": [
                    "tsp",
                    "teaspoon",
                    "teaspoons"
                ],
                "str": "405.7682710843519 (tsp|teaspoon|teaspoons)"
            },
            {
                "val": 0.05675518356442531,
                "units": [
                    "bu",
                    "bsh",
                    "bushel",
                    "bushels"
                ],
                "str": "0.05675518356442531 (bu|bsh|bushel|bushels)"
            }
        ],
        "string": {
            "in": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january 1994 will be 44 years old next week. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "out": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january 1994 will be 44 years old next week. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "annotated": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is {MEASURE: 5 (GB|gigabyte|gigabytes)} of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs {MEASURE: 3 (pt|pint|pints)} of blood urgently! President Moi was born in {MEASURE: 5 (th|therm|therms|Therm)} january 1994 will be {MEASURE: 44 (y|yr|year|years|annum)} old next week. Can you finish {MEASURE: 2 (l|L|liter|liters|litre|litres)} of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT "
        }
    },
    "dates": {
        "dates": [
            "1994-01-04T21:00:00.000Z",
            "2017-05-28T21:00:00.000Z",
            "2016-09-21T21:00:00.000Z",
            "1944-05-21T21:00:00.000Z"
        ],
        "string": {
            "in": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january 1994 will be 44 years old next week. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "out": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. 2016-09-21T21:00:00.000Z there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 1994-01-04T21:00:00.000Z will be 1944-05-21T21:00:00.000Z old 2017-05-28T21:00:00.000Z. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT ",
            "annotated": "there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. {DATE: 2016-09-21T21:00:00.000Z} there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in {DATE: 1994-01-04T21:00:00.000Z} will be {DATE: 1944-05-21T21:00:00.000Z} old {DATE: 2017-05-28T21:00:00.000Z}. Can you finish 2 liters of milk? :-) :') :'( . Wait he didnt call me that. IKR NKT "
        }
    }
}

  ```

Also note that this works by alterning the initial string and the process is documented using ```"string:in", "string:out", "string:annotated"```.

