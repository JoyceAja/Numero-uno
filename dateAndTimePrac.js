// Question 1
// var now = new Date(2016, 3-1,14, 3,12)
// console.log(now.toString())

//Question 2
function getWeekDay(date){
    var days = date.getDay()
    var weekday = [
        'Sunday', 'Monday', 'Tuesday', 'Wenesday', 
        'Thursday', 'Friday', 'Saturday']
    
        return weekday[days]
}

 var date1 = new Date(2015, 0,2)
// console.log(getWeekDay(date))


// Question 3

// function getDateBefore(date,days){
//     date.setDate(date.getDate() - days)
//     var day = date.getDate()
//     console.log(day.toString())
// }

// getDateBefore(date1, 365)

// Question 4
// function getLastDayOfMonth(year,month){
//    var day = new Date(year, month)
//    day.setMonth(day.getMonth()+1)
//    day.setDate(day.getDate()-1)
//     console.log(day.toString())
// }
//an easier way of solving
//function getLastDayOfMonth(year, month){
//     var day = new Date(year, month+1, 0) // 0 is the previos date of the last month
//     return date.getDate()
// }

// getLastDayOfMonth(2015,3)
 // var newMonth = new Date(year, month, 1)
    // newMonth.setMonth(getMonth() + 1)
    // newMonth.setDate(newMonth.getDate() - 1)
    // var day = newMonth.getDate()


//Question 5
var name = ['January','Feburary', 'March', 'April',
 'May', 'June', 'July', 'August', 'September','October', 
 'November', 'December' ]

 function nameOfMonth(date){
     var month = date.getMonth() -1
     console.log(name[month])
}

nameOfMonth(new Date(2009, 10,11))

//Question 6
// function getSecondsToday(){ 
// var today = new Date() //to get current date
//today.setHors(0,0,0)
//var midnightTs = today.getTime()
//var currentTs  = new Date().getTime()
//return ((currentTs - midnightTs)/1000)

//     var startTime = new Date(2017, 9, 6, 0, 0, 0) //In this case we set the date to a specific day
// we want to able to run the function anyday and it would work for anyday. This is what we were missing
// so basically it works its just restrdicted to a certain day
//    startTime.setSeconds(startTime.getSeconds() )
//     var now = new Date()
//     console.log(now.getTime()-startTime.getTime())

// }
// getSecondsToday()

// Question 7

// function getSecondsTomorrow(){ 
//     var now = new Date()
//     var tomorrow = new Date(2017,9,7,0, 0, 0) //rather than setting the day can just calculate the 
//total seconds in a day and you would just subtract that.
//This solves the problem we were having with being date specific or can create two days, can then set the hrs or something 
//     tomorrow.setSeconds(tomorrow.getSeconds() )
//     console.log((tomorrow.getTime()-now.getTime())/1000)

// }
// getSecondsTomorrow()