import { Component } from '@angular/core';
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

}
