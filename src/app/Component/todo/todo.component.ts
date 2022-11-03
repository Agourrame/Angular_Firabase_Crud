import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Module/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo !:Todo[];
  todoinput:string="";

  constructor() { }

  togglechek(id:number){
    this.todo.map((item,i)=>{
       if(i == id){
        item.check=!item.check;
       }
       return item;
    });
  }

  deletItem(id:number){
   this.todo=this.todo.filter((item,i)=>i!==id);
  }

  addTodo(){
    this.todo.push({
      task:this.todoinput,
      check:false
    });
    this.todoinput='';
  }

  ngOnInit(): void {
    this.todo=[
      {
        check:false,
        task:"task number 1"

      },
      {
        check:false,
        task:"task number 2"

      },
      {
        check:false,
        task:"task number 3"

      }
    ]
  }

}
