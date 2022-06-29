import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() todoCompleted = new EventEmitter<Todo>();
  @Output() todoDeleted = new EventEmitter<Todo>();
  @Output() todoEdit = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

}
