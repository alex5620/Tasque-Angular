import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list3',
  templateUrl: './task-list3.component.html',
  styleUrls: ['./task-list3.component.css']
})
export class TaskListComponent3 implements OnInit {

  tasks: ITask[] = [];
  constructor(private _taskService: TaskService) { 
  }

  ngOnInit(): void {
    this._taskService.getTasksByStatus('done').subscribe((data) => {
      this.tasks = data;
    })
  }

  detailTask(id: number): void
  {
    console.log(id);
  }

  updateTask(id: number): void
  {
    console.log(id);
  }

  deleteTask(id: number): void
  {
    var position;
    for(let i = 0; i<this.tasks.length; ++i)
    {
      if(this.tasks[i].taskId == id)
      {
        position = this.tasks[i].position;
        break;
      }
    }
    for(let i = 0;i<this.tasks.length;++i)
    {
      if(this.tasks[i].position > position)
      {
        this.tasks[i].position = this.tasks[i].position - 1;
        this._taskService.updateTask(this.tasks[i]).subscribe(() => {});
      }
    }
    this._taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.taskId !== id);
    })
  }
  
  onDrop(event: CdkDragDrop<string[]>)
  {
    if(event.previousContainer === event.container)
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      var data = event.previousContainer.data as ITask[];
      for(let i=0;i<data.length;++i)
      {
        if(data[i].position != i)
        {
          data[i].position = i;
          this._taskService.updateTask(data[i]).subscribe(() => {});
        }
      }
    }
    else
    {
      transferArrayItem(event.previousContainer.data, event.container.data,
         event.previousIndex, event.currentIndex);
      this.tasks[event.currentIndex].status='done';
      this.tasks[event.currentIndex].position= event.currentIndex;
      this._taskService.updateTask(this.tasks[event.currentIndex]).subscribe((data) => {})
      var newData = event.container.data as ITask[];
      for(let i=0;i<newData.length;++i)
      {
        if(newData[i].position != i)
        {
          newData[i].position = i;
          this._taskService.updateTask(newData[i]).subscribe(() => {});
        }
      }
      data = event.previousContainer.data as ITask[];
      for(let i=0;i<data.length;++i)
      {
        if(data[i].position != i)
        {
          data[i].position = i;
          this._taskService.updateTask(data[i]).subscribe(() => {});
        }
      }
    }
  }
}
