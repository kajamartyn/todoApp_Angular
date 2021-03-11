import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  //pobieranie z pliku html pole input poprzez #nazwa
  @ViewChild('task') task:ElementRef;

  //odpowiada za wysłanie danych do komponentu rodzica 
  @Output() addTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  newTask():void {
    //wysłanie ciągu znaków z pola input do komponentu głównego 
    this.addTask.emit(this.task.nativeElement.value);
  }
}
