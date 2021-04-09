import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent2 } from './task-card2.component';

describe('TaskCardComponent2', () => {
  let component: TaskCardComponent2;
  let fixture: ComponentFixture<TaskCardComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
