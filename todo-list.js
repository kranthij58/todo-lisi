const addTodoElem = document.querySelector('.Add-button');
let todoList=[];
addTodoElem.addEventListener('click',() =>{
let name = document.querySelector('.Todo-name').value;
let date = document.querySelector('.Todo-date').value;
document.querySelector('.Todo-name').value = ' ';
if(!name || name === ' '){
  name = '----------';
}if(!date){
  date = '----------';
}
//all is left is storing in array and displaying 
todoList.push({
  name : name,
  date : date,
});

displayList();

});

function displayList(){
  let tasksShowElem = document.querySelector('.tasksShow');
  let html = '';
  todoList.forEach((value,index)=>{
   html += `<p class = "taskName">${value.name}</p><p   class="taskDate">${value.date}</p><button class="deleteButton"
   onclick = "
   todoList.splice(${index},1);
   displayList();
   "
   >Delete Task</button>`;
   
 })
  tasksShowElem.innerHTML = html;
 


}