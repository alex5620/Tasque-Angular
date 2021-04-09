import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent3 } from './task-card3.component';

describe('TaskCardComponent3', () => {
  let component: TaskCardComponent3;
  let fixture: ComponentFixture<TaskCardComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
