import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { FullCalendarModule } from '@fullcalendar/angular';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin, 
  listPlugin
])

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { 
   /* calendarEl : Calendar = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev, nedt today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    }
  }); */

}

