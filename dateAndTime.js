//To get the current time
//var now = new Date(1993, 4 -1, 7) - use this format to set a new date
// var now = new Date(1995, 3,22)

// // Setting the year, this example show a thousand year from the current date
// // now.setFullYear(now.getFullYear()-1000)
// // // to log out the date
// //JS uses ms
// console.log(now.toString())
// //what day of the week you were born
// console.log(now.setFullYear(now.getFullYear() -1))
// //console.log(now.getTime())
// now.setDate(now.getDate()+180)
// console.log(now.toString())

// //Calculating the difference between two days
// // var then = new Date(2004, 1, 29);
// // var now = new Date();
// // converts to hrs
// var msPerWeek = 1000 * 60 * 60 * 24 * 7
// // console.log(now.getTime()- then.getTime())
// //How many hours 
// // console.log((now.getTime()- then.getTime())/msPerHour)
// //months is always one less than humans think
// //how long i have lived
// var then = new Date(1995, 3-1, 22);
// var now = new Date();
// //console.log(now.getTime()- then.getTime())
// console.log((now.getTime()- then.getTime())/msPerWeek)

// find out how long this program takes
// called bench marking, measures the speed of your code
// var start = new Date()
// for(var i = 0 ; i<100000; i++){
// console.log(i)
// }
// var end = new Date()
// console.log((end.getTime()-start.getTime())/1000)

// var timestamp = Date.parse('2012-01-26T15:00:00.100Z');
// var then = new Date(timestamp)
// console.log(then.toString())