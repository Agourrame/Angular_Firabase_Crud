export class Todo{
  task:string='';
  check:boolean=false;

  constructor(task:string,check:boolean){
     this.task=task;
     this.check=check;
  }

}
