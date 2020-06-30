import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.sass']
})
export class DateInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveDate(name: string, date: string, time: string) {
    console.log(date);
    console.log(name);
    console.log(time)
  }

}
