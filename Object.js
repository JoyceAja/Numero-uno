// var movies = [
//   {
//     name: 'Wonder Woman', 
//   director: 'Patty Jenkins'
    
//   },
//   {
//     name: 'Inception', 
//   director: 'Chrisopher Nolan'
    
//   }
//   ]
  
// function favMovie(list){
//   for(var i=0; i<list.length; i++){
//     return Object.entries(list)
//   }
// }
// console.log(favMovie(movies))



var todoArray = [
    activity1 = {
      exercise: 'running',
    when: '8 am',
    where: 'Central park',
    completed: false
    },
    activity2 = {
      cooking: 'breakfast',
      when: 'after exercise',
      what: 'BLT sandwich',
      completed: false
    },
    activity3 = {
      C4Q: 'attend class',
      when: '10 am',
      where:'LI city',
      completed: false
    }
    ]
    
    //console.log(todoArray[0].completed)

    var newObj = {
      reading: 'Effective Reading Strategies',
      when: '5pm today',
      where: 'in bed'
    }
    
    function addTodo(arr){
      arr.push(newObj)
      console.log(arr)
    }
    function showTodo(arr1){
        console.log(arr1)
    return arr1
    }
    
    
   
function changeStatus(index){
    if(todoArray[index].completed === false){
        console.log(todoArray[index].completed= true)
    }
    else
    {
    console.log(todoArray[index].completed)
}
}
console.log(addTodo(todoArray))
console.log(showTodo(todoArray))
changeStatus(0)






















