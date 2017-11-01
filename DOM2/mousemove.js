
document.addEventListener('click',function(event){
coords(event)
} );
function coords(event){
    var elem = document.getElementById('coords')
    var x = event.clientX;
    var y = event.clientY;
    elem.innerText = "X coordinate is: " + x + " Y coordinate is: " + y
}
    