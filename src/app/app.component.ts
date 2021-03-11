import { Component } from '@angular/core';
import {Task} from './models/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//deklaracja tablicy trzymającej wszystkie zadania w programie
tasks:Task[]=[];
//counter to licznik po ang.
counter = 0;
addTaskitem(name:string)
{
  this.counter++ 
  this.tasks.push({
    id:this.counter,
    name:name,
    status:false
  })
}
deletetask( tasks:Task[]):void {
  this.tasks = tasks;
  
}
}
