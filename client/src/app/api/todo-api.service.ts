import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TodoGetDto from '../dtos/get/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  public getAllTodos() {
    return this.http.get<TodoGetDto[]>('todos')
  }

  public createOrUpdateTodo(newTodo: TodoGetDto) {
    return this.http.put('todos', newTodo);
  }
  

  public deleteTodo(id: string) {
    return this.http.delete(`todos/${id}`);
  }
}
