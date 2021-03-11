import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-list-task-item',
  templateUrl: './list-task-item.component.html',
  styleUrls: ['./list-task-item.component.scss']
})
export class ListTaskItemComponent implements OnInit {
 @Input() task : Task;
 @Output() check = new EventEmitter<number>();
 @Output() deleteTask = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  mark():void{
    this.check.emit(this.task.id);
  }
  delete():void{
    this.deleteTask.emit(this.task.id);

  }
}
