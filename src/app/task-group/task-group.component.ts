import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {

  constructor(private modalService: NgbModal  ) { }

  ngOnInit(): void {
  }

  createTask()
  {
    const modalRef = this.modalService.open(TaskFormComponent);
  }
}
