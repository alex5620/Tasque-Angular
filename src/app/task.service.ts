import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './models/task';

const BACKEND_URL = 'http://localhost:8096'; 

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  addTask(task: ITask): Observable<ITask>
  {
    return this._http.post<ITask>(`${BACKEND_URL}/task`, task);
  } 

  updateTask(task: ITask): Observable<ITask>
  {
    return this._http.put<ITask>(`${BACKEND_URL}/task`, task)
  }

  deleteTask(id: number): Observable<any>
  {
    return this._http.delete(`${BACKEND_URL}/task/${id}`);
  }

  getTaskById(id: number): Observable<ITask>
  {
    return this._http.get<ITask>(`${BACKEND_URL}/task/${id}`);
  }

  getTasksByStatus(status: string): Observable<ITask[]>
  {
     return this._http.get<ITask[]>(`${BACKEND_URL}/tasks/${status}`);
  }
}
