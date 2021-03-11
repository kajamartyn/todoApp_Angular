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
addTaskitem(name:string)
{
  this.tasks.push({
    id:this.tasks.length+1,
    name:name,
    status:false
  })
}
}
