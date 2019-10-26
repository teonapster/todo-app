import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import TodoGetDto from '../dtos/get/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ICreateOrEditTodo from '../models/createOrEditTodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: TodoGetDto;
  @Output() public save: EventEmitter<ICreateOrEditTodo> = new EventEmitter();
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  public todoForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: this.fb.control(this.todo.title, Validators.required),
      text: this.fb.control(this.todo.text, Validators.required)
    });
  }

  public onTodoSave() {
    this.save.emit({todo: {...this.todo, ...this.todoForm.value}, create: !this.todo.id});
  }

  public remove() {
    this.delete.emit();
  }
}
