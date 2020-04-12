import { Action } from '@ngrx/store';
import TodoGetDto from '../dtos/get/todo';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos success',
  LoadTodosFail = '[Todo] Load Todos fail',

  AddTodo = '[Todo] Add Todo',
  CreateTodo = '[Todo] Create Todo',
  CreateTodoSuccess = '[Todo] Create Todo Success',
  CreateTodoFail = '[Todo] Create Todo Fail',
  EditTodo = '[Todo] Edit Todo',
  EditTodoSuccess = '[Todo] Edit Todo Success',
  EditTodoFail = '[Todo] Edit Todo Fail',

  RemoveTodo = '[Todo] Remove Todo',
  RemoveTodoSuccess = '[Todo] Remove Todo Success',
  RemoveTodoFail = '[Todo] Remove Todo Fail',
  RemoveTodoCancel = '[Todo] Remove Todo Cancel',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;
  constructor(public payload: {todos: TodoGetDto[]}) {}
}

export class LoadTodosFail implements Action {
  readonly type = TodoActionTypes.LoadTodosFail;
}


export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
}

export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: {todo: TodoGetDto, indexToInstert: number}) {}
}

export class CreateTodosSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: {indexToUpdate: number, id: string}) {}
}

export class CreateTodoFail implements Action {
  readonly type = TodoActionTypes.CreateTodoFail;
}

export class EditTodo implements Action {
  readonly type = TodoActionTypes.EditTodo;
  constructor(public payload: {todo: TodoGetDto}) {}
}

export class EditTodosSuccess implements Action {
  readonly type = TodoActionTypes.EditTodoSuccess;
  constructor(public payload: {todo: TodoGetDto}) {}
}

export class EditTodoFail implements Action {
  readonly type = TodoActionTypes.EditTodoFail;
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.RemoveTodo;
  constructor(public payload: {indexToRemove: number, id: string}) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = TodoActionTypes.RemoveTodoSuccess;
}

export class RemoveTodoFail implements Action {
  readonly type = TodoActionTypes.RemoveTodoFail;
}

export class RemoveTodoCancel implements Action {
  readonly type = TodoActionTypes.RemoveTodoCancel;
}


export type TodoActions = LoadTodos | LoadTodosSuccess | LoadTodosFail |
AddTodo | CreateTodo | CreateTodosSuccess | CreateTodoFail | EditTodosSuccess | EditTodoFail | RemoveTodo | RemoveTodoSuccess | RemoveTodoFail | RemoveTodoCancel;

