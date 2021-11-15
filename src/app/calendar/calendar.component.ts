import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  constructor(
    private calendarService: CalendarService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
