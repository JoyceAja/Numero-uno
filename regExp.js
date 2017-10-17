// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

// var pattern = /may/;

// console.log(pattern.exec(text));

// var text = 
// 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// // var pattern = / [a-zA-Z][a-zA-Z][a-zA-Z] /;
// // var pattern = / [a-z]{3} /
// // var pattern = /( \w{3} )/
// var pattern = /\b\w{3}\b/g //all the three letter word in the string
// //to find word at the end
// // /[a-z]{5}[ .]
// // var pattern = /\w+\.$/

// //console.log(text.match(pattern)); // or pattern.exec(text)

// //another way to find all the three letter words in the input
// var m;
// while(m = pattern.exec(text)){
//     console.log(m)
// }

//Question 3
// var txt =  'txtng: the Gr8 Db8'
// var pattern = /[A-Z]/

// console.log(txt.match(pattern))

//Question 4
// var text = 'There are 300,000,000 Americans, give or take.' 
// var pattern = /[\d,]+/ //we added the comma to include the commas in the number

// console.log(text.match(pattern))

//Question 5
// var text = 'txting: the Great Debate'
// var pattern = /[A-Z][a-z]*/
//  console.log(text.match(pattern))

 //Question 6
var text = 'This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn\'t.'
var pattern = /\b[a-fA-F0-9]+\b/g
    console.log(text.match(pattern))

//Question 7
// var text = 'This is an example.';
// var pattern = /\b\w+\b/
// console.log(text.match(pattern))

//Question 8
// var text = 'This is an example.....';
// var pattern = /\w+\W*$/ //had to include the \W because the sentence ends with aa .
// var pattern = /\d+\D*$/ //the last number in a string
// console.log(text.match(pattern))
//Question 9
var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
//var pattern = /\d{1,2}\/\d{1,2}\/(\d{2,4})/ //add the parenthesis around what you wan tot save
var pattern = new RegExp('(\\d{1,2})/(\\d{1,2})/(\\d{2,4})') //to use this method will have to do the double slash
// console.log(dates.match(pattern))
// // console.log(dates[0].match(pattern))
for(var i=0; i<dates.length; i++){
    var date = dates[i]
    var dateMatch = date.match(pattern)
    var date = new Date(dateMatch[3], dateMatch[2]-1, dateMatch[1])

//     date.setHours(24) //can also set the months
    console.log(date)
}

// Question 10
// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';

// var anHtmlTag = /<.+?>/g
// console.log(html.match(anHtmlTag))
// //can use split
// console.log(html.split(anHtmlTag).join(','))

// var m
// while(m=anHtmlTag.exec(html)){

// }