import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/todo.reducer';
import { AddTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private todoStore: Store<State>) {}

  ngOnInit() {
  }

  public addTodo() {
    this.todoStore.dispatch(
      new AddTodo()
    );
  }

}
