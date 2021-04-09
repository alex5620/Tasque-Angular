import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent2 } from './task-list2.component';

describe('TaskListComponent2', () => {
  let component: TaskListComponent2;
  let fixture: ComponentFixture<TaskListComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
