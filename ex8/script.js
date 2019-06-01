/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
window.onload = function(){
    var button = document.getElementById("add-button");
    button.addEventListener('click', function(){
        var input = document.getElementById('description');
        if (input.value == "") {
            var warning = document.getElementsByClassName("warning")[0];
            warning.className += 'active';
        };
        var list = document.getElementById('todo-list');
        var task = document.createElement("li");
        var spantag = createSpan();
        task.innerText = input.value;
        input.value = "";
        task.appendChild(spantag);
        list.appendChild(task);
        task.addEventListener("click", listItemChecked);

    }); 
    
    //add task to row*
    var tasks = document.getElementsByTagName("LI");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", listItemChecked);
      };

      //add event listener to trash icons
    var icons = document.getElementsByTagName("i");
    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", removeRow);
      };

      function createSpan() {
        var span = document.createElement("span");
        var icon = document.createElement("i");
        icon.className += 'fa fa-trash';
        console.log("remove row")
        icon.addEventListener("click", removeRow);
        span.appendChild(icon);
        return span
    };
    
    
    function listItemChecked() {
        if (this.classList.contains('active')){
            this.className = '';
        }
        else {
            this.className += 'active';
        }
        console.log(1);
    };
    
    function removeRow() {
        span = this.parentElement;
        row = span.parentElement;
        row.parentNode.removeChild(row);
    };
}



