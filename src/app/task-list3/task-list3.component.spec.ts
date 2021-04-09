import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent3 } from './task-list3.component';

describe('TaskListComponent3', () => {
  let component: TaskListComponent3;
  let fixture: ComponentFixture<TaskListComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
