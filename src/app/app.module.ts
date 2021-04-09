import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent2 } from './task-list2/task-list2.component';
import { TaskCardComponent2 } from './task-card2/task-card2.component';
import { TaskListComponent3 } from './task-list3/task-list3.component';
import { TaskCardComponent3 } from './task-card3/task-card3.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskGroupComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskCardComponent,
    TaskDetailComponent,
    TaskListComponent2,
    TaskCardComponent2,
    TaskListComponent3,
    TaskCardComponent3,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
