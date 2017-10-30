 // let input=window.prompt("Type in an interger");
            // if(parseInt(input)){
            //     window.alert(parseInt(input)*2)
            // }else{
            //     window.alert("Thats not a valid input")
            // }


// function chnageHeader(){
//     let headText = document. getElementById("main-text")
//     let newText = window.prompt("enter text")
//     newText.innerHTML = newText
// }
function changeHeader(){
    let ans = document.getElementById("youTyped")
    let input= window.prompt("Type in an input")
    ans.innerHTML = input;
}

setInterval(changeHeader, 500)