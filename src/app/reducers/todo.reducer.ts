import { Action } from '@ngrx/store';
import TodoGetDto from '../dtos/get/todo';
import { TodoActionTypes, TodoActions } from '../actions/todo.actions';


export const todoFeatureKey = 'todo';

export interface State {
  todos: TodoGetDto[];
  loading: boolean;
}

export const initialState: State = {
  todos: [],
  loading: false
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.LoadTodos:
      return { ...state, loading: true};
    case TodoActionTypes.LoadTodosSuccess:
      return { ...state, todos: [...action.payload.todos], loading: false};
    case TodoActionTypes.AddTodo:
      return { ...state, todos: [
        ...state.todos,
        {
          comments: [],
          id: null,
          resolved: false,
          text: 'New Todo text',
          title: `New Todo ${state.todos.length + 1}`}
        ]
      };
    case TodoActionTypes.CreateTodoSuccess:
      const updatedTodos = JSON.parse(JSON.stringify(state.todos));
      updatedTodos[action.payload.indexToUpdate].id = action.payload.id;
      return { ...state, todos: updatedTodos, loading: false};
    case TodoActionTypes.CreateTodoFail:
    case TodoActionTypes.LoadTodosFail:
    case TodoActionTypes.EditTodoFail:
      return { ...state, loading: false};
    case TodoActionTypes.RemoveTodo:
      const clonedTodos = JSON.parse(JSON.stringify(state.todos));
      clonedTodos.splice(action.payload.indexToRemove, 1);
      return { ...state, todos: clonedTodos, loading: false};
    default:
      return state;
  }
}
