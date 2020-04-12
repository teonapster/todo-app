import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/todo.reducer';
import { LoadTodos } from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  constructor(private todoStore: Store<State>) {}

  public ngOnInit() {
    this.todoStore.dispatch(new LoadTodos());
  }
}
