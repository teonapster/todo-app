import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadTodos,
  TodoActionTypes,
  LoadTodosSuccess,
  LoadTodosFail,
  CreateTodo,
  CreateTodosSuccess,
  CreateTodoFail,
  EditTodo,
  EditTodosSuccess,
  EditTodoFail,
  RemoveTodo,
  RemoveTodoCancel,
  RemoveTodoSuccess,
  RemoveTodoFail } from '../actions/todo.actions';
import { TodoApiService } from '../api/todo-api.service';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import TodoGetDto from '../dtos/get/todo';

@Injectable()
export class TodoEffects {

  @Effect()
  getAllTodosEffect = this.actions$.pipe(
    ofType<LoadTodos>(TodoActionTypes.LoadTodos),
    switchMap(action =>
      this.todoService.getAllTodos()
        .pipe(
          map((todos: TodoGetDto[]) => new LoadTodosSuccess({todos})),
          catchError(() => of(new LoadTodosFail()))
        )
    )
  );

  @Effect()
  createTodoEffect = this.actions$.pipe(
    ofType<CreateTodo>(TodoActionTypes.CreateTodo),
    map(action => action.payload),
    switchMap(payload =>
      this.todoService.createNewTodo(payload.todo)
        .pipe(
          map((todo: TodoGetDto) => new CreateTodosSuccess({indexToUpdate: payload.indexToInstert, id: todo.id})),
          catchError(() => of(new CreateTodoFail()))
        )
    )
  );

  @Effect()
  editTodoEffect = this.actions$.pipe(
    ofType<EditTodo>(TodoActionTypes.EditTodo),
    map(action => action.payload.todo),
    switchMap(todo =>
      this.todoService.editTodo(todo)
        .pipe(
          map((todo: TodoGetDto) => new EditTodosSuccess({todo})),
          catchError(() => of(new EditTodoFail()))
        )
    )
  );

  @Effect({dispatch: false})
  deleteTodoEffect = this.actions$.pipe(
    ofType<RemoveTodo>(TodoActionTypes.RemoveTodo),
    switchMap(action => {
      if (!action.payload.id) {
        return of(new RemoveTodoCancel());
      }
      return this.todoService.deleteTodo(action.payload.id).pipe(
        map(() => new RemoveTodoSuccess()),
        catchError(() => of(new RemoveTodoFail()))
      );
    })
  );


  constructor(private actions$: Actions, private todoService: TodoApiService) {}

}
