const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');


loadEventListener();

function loadEventListener(){

  //Load Event
//DOMContentLoaded is an event which gets called when the DOM is loaded
  document.addEventListener('DOMContentLoaded',getTasks);

  form.addEventListener('submit',addTask);

  //Remove a task
  taskList.addEventListener('click',removeTask);

  //Clear Tasks
  clearBtn.addEventListener('click',clearTasks);

  //Filter Tasks
  filter.addEventListener('keyup',filterTasks);
}

//Add Task
function addTask(e){
  if(taskInput.value===''){
    alert('Add a Task');
  }

  //Else if the task in entered in the input 
const li= document.createElement('li');

//Add a class name
li.className='collection-item';

li.appendChild(document.createTextNode(taskInput.value));

//Create new link element
const link = document.createElement('a');




//Addclass name
link.className='delete-item secondary-content';

//Add icon html
link.innerHTML='<i class="fa fa-remove"></i>';

//Append the link to li
li.appendChild(link);

//Append li to ul
taskList.appendChild(li);

//Store task in loal storage
storeTaskInLocalStorage(taskInput.value);

//Clear the task input
taskInput.value='';

console.log(li);
  e.preventDefault();
}


//Store task
function storeTaskInLocalStorage(task){
let tasks;

if(localStorage.getItem('tasks')===null){
tasks=[];
}
else{
tasks=JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

localStorage.setItem('tasks',JSON.stringify(tasks));
}


// Get tasks from local storage
function getTasks(){
let tasks;

if(localStorage.getItem('tasks')===null){
  tasks=[];
}
else{
tasks=JSON.parse(localStorage.getItem('tasks'));
}

//to print the tasks on screen
tasks.forEach(function(task){
//Create li element
const li = document.createElement('li');

//Give a class name
li.className = 'collection-item';

//Create text node and append to li
li.appendChild(document.createTextNode(task));

//Create a new link element
const link=document.createElement('a');

link.className='delete-item secondary-content';

//Icon to the lnik
link.innerHTML='<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);


//Append li to ul
taskList.appendChild(li);
});
}





//Remove a task
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm("Are you sure?")){
    e.target.parentElement.parentElement.remove();
    
    //Remove the element from the local storage as well
    removeFromLocalStorage(e.target.parentElement.parentElement);
  }  

}

}


function removeFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }
  else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index){
    if(taskItem.textContent===task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(){
  //There are two ways to do this

  //Method 1 : Using innerHTML to delete the entire list
//taskList.innerHTML = '';

//Method 2 : Using a while loop to delete the first child of the list one by one till there are no more first childs , i.e bascially till there are no more childs in your list.
//This method is even faster
while(taskList.firstChild){
  taskList.removeChild(taskList.firstChild);

  
}

//clear from local storage
clearTaskFromLocalStorage();
}


function clearTaskFromLocalStorage(){
  localStorage.clear();
}

//Filter Tasks function
function filterTasks(e){
  const text=e.target.value;


  document.querySelectorAll('.collection-item').forEach(function(task){
    //console.log(task);
    const item=task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display='block';
    }
else{
  task.style.display='none';
}
  });
  
  console.log(text);

}