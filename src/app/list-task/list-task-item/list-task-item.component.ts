import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-list-task-item',
  templateUrl: './list-task-item.component.html',
  styleUrls: ['./list-task-item.component.scss']
})
export class ListTaskItemComponent implements OnInit {
 @Input() task : Task;
  constructor() { }

  ngOnInit(): void {
  }

}
