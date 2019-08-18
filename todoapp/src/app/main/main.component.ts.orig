import { Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

<<<<<<< HEAD
  title = 'My Todos';
  todo = {label: ' Bring Milk',
          done:false, 
          priority:3
        };

      }
=======
  taskCount : number;
  btnText : string = "Add Task";
  userInput="";
  tasks=[];

  constructor() { }

  ngOnInit() {
    this.taskCount=this.tasks.length;
  }

  addTask(){
    this.tasks.push(this.userInput);
    this.userInput='';
    this.taskCount=this.tasks.length;
    
  }

  deleteTask(id:number){
  console.log(id);
  this.tasks.splice(id,1);
  }

}
>>>>>>> 8b86d7821b32609e3f48ddd6b7e59976a4ff3ac6
