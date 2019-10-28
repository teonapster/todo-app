import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from './todo.reducer';

export interface State {
  [fromTodo.todoFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Generated selectors:
export const getTodoFeatureState = createFeatureSelector<fromTodo.State>(fromTodo.todoFeatureKey);
export const getTodoListSelector = createSelector(getTodoFeatureState, state => state.todos);
export const getTodoLoaderSelector = createSelector(getTodoFeatureState, state => state.loading);
