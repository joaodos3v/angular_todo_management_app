import { Injectable } from '@angular/core';
import { IResponse, ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodos(): Observable<IResponse<ITodo[]>> {
    return this.httpClient.get<IResponse<ITodo[]>>(`${apiEndpoint.TodoEndpoint.getAllTodos}`);
  }

  addTodo(data: ITodo): Observable<IResponse<ITodo>> {
    return this.httpClient.post<IResponse<ITodo>>(`${apiEndpoint.TodoEndpoint.addTodo}`, data);
  }

  updateTodo(id: number, data: ITodo): Observable<IResponse<ITodo>> {
    return this.httpClient.put<IResponse<ITodo>>(`${apiEndpoint.TodoEndpoint.updateTodo}/${id}`, data);
  }
}
