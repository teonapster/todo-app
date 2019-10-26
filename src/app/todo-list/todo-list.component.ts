import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/todo.reducer';
import { LoadTodos, CreateTodo, EditTodo, RemoveTodo } from '../actions/todo.actions';
import { getTodoListSelector, getTodoLoaderSelector } from '../reducers';
import TodoGetDto from '../dtos/get/todo';
import { Observable } from 'rxjs';
import ICreateOrEditTodo from '../models/createOrEditTodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: TodoGetDto[];
  public loading = false;
  constructor(private todoStore: Store<State>) {}

  public ngOnInit() {
    this.todoStore.dispatch(new LoadTodos());
    this.todoStore.pipe(select(getTodoListSelector)).subscribe(todos => {
      this.todos = todos;
    });
    this.todoStore.pipe(select(getTodoLoaderSelector)).subscribe( loading => {
      this.loading = loading;
    });
  }

  public save(createOrEditModel: ICreateOrEditTodo) {
    if (createOrEditModel.create) {
      return this.todoStore.dispatch(new CreateTodo({todo: createOrEditModel.todo, indexToInstert: this.todos.length - 1}));
    }

    return this.todoStore.dispatch(new EditTodo({todo: createOrEditModel.todo}));
  }

  public delete(indexToRemove: number) {
    const todoToRemove = this.todos[indexToRemove];
    return this.todoStore.dispatch(new RemoveTodo({indexToRemove, id: todoToRemove.id}));
  }
}
