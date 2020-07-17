var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByClassName("add-button")[0];
var incompleteTasks=document.getElementById("incomplete-tasks");
var completedTasks=document.getElementById("completed-tasks");



var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var deleteButton=document.createElement("button");

	label.innerText=taskString;
	checkBox.type="checkbox";
	

	deleteButton.innerText="Delete";
	deleteButton.className="delete";


	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){

	var listItem=createNewTaskElement(taskInput.value);
	incompleteTasks.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}





var deleteTask=function(){
		
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);

}


var taskCompleted=function(){
	
	var listItem=this.parentNode;
	completedTasks.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){

    var listItem=this.parentNode;
	incompleteTasks.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
	
}


addButton.addEventListener("click",addTask);



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var deleteButton=taskListItem.querySelector("button.delete");

	deleteButton.onclick=deleteTask;
    checkBox.onchange=checkBoxEventHandler;
}
