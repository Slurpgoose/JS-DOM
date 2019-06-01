// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");

button.addEventListener('click', function(){
    var boxes = document.getElementsByClassName("box")
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.background = "blue";
    } 

})