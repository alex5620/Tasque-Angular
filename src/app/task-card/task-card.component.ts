import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../models/task';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: ITask = {};
  @Output() onDetail: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onActionClick(action: string)
  {
    if(this.task && this.task.taskId)
    {
      switch(action)
      {
        case 'detail':
          this.onDetail.emit(this.task.taskId);
          break;
        case 'edit':
          this.onEdit.emit(this.task.taskId);
          break;
        case 'delete':
          this.onDelete.emit(this.task.taskId);
          break;
      }
    }
    else
    {
      alert('Task doesn\'t exist.');
    }
  }
}
