import { Injectable } from '@angular/core';
import { IResponse, ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodos(status: string): Observable<ITodo[]> {
    let queryString = '';

    if (status) {
      queryString = `status=${status}`;
    }

    return this.httpClient.get<ITodo[]>(`${apiEndpoint.TodoEndpoint.getAllTodos}?${queryString}`);
  }

  addTodo(data: ITodo): Observable<IResponse<ITodo>> {
    data = { ...data, id: uuidv4() };
    return this.httpClient.post<IResponse<ITodo>>(`${apiEndpoint.TodoEndpoint.addTodo}`, data);
  }

  updateTodo(id: string, data: ITodo): Observable<IResponse<ITodo>> {
    return this.httpClient.put<IResponse<ITodo>>(`${apiEndpoint.TodoEndpoint.updateTodo}/${id}`, data);
  }
}
