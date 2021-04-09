import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  providers: [DatePipe]
})
export class TaskFormComponent implements OnInit {
  
  @Input() private taskId: number = -1;
  task: ITask = { priority: "LOW", status: "todo", dueDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') };
  constructor(public activeModal: NgbActiveModal, private _taskService: TaskService, private datePipe: DatePipe) { 
  }

  ngOnInit(): void {
    if(this.taskId != -1)
    {
      this._taskService.getTaskById(this.taskId).subscribe((data) => this.task = data)
    }
  }

  onSubmit(): void {
    if(this.task && this.task.taskId)
    {
      this._taskService.updateTask(this.task).subscribe((data) => { this.task = data })
    } 
    else
    {
      this._taskService.addTask(this.task).subscribe((data)  => { this.task = data });
    }
    window.location.reload();
    this.onClose();
  }

  onClose(): void{
    this.activeModal.close();
  }
}
