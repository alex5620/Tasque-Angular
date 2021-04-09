import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  
  @Input() private taskId;
  task: ITask = {}
  constructor(private _taskService: TaskService, public activeModal: NgbActiveModal) { 
  }

  ngOnInit(): void {
    this._taskService.getTaskById(this.taskId).subscribe((data) => this.task = data)
  }

  onClose(): void{
    this.activeModal.close();
  }
}
