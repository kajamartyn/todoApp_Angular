import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  @Input() tasks:Task[]=[];
  @Output() deletefromArray = new EventEmitter<Task[]>();
  constructor() { }

  ngOnInit(): void {
  }
mark(id:number):void{
  const item = this.tasks.find(task => task.id === id);
  item.status = !item.status;
 // const item = this.tasks.find(function(task) {
 //   return task.id === id;
//  });
}
deleteItem(id:number):void {

  const newArray = this.tasks.filter(task => task.id !== id) //zwraca wszystkie zadania z pominięciem tych usuniętych zadań przez usera
 this.deletefromArray.emit(newArray);
}
}
