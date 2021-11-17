import { Component} from '@angular/core';
import { Calendar } from "@fullcalendar/core";
import { CalendarOptions, DateSelectArg, EventDropArg, EventClickArg, EventApi} from "@fullcalendar/angular";
import itLocale from "@fullcalendar/core/locales/it";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left:'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'timeGridWeek',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    slotMinTime: "06:00:00",
    slotMaxTime: "20:00:00",
    locales: [itLocale],
    select: this.handleInfoEvent.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this),
    events: [
      {title: 'event 1', date: '2021-11-15' , editable: true, extendedProps: {
        department: 'BioChemistry'
      }
    },
      {title: 'event 2', date: '2021-11-16', editable: false}
    ],
    titleFormat: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    },
    timeZone: 'UTC',
    locale: 'it',

  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  handleEventDrop(arg: EventDropArg){
    console.debug(arg);
  }

  handleInfoEvent(selectInfo: DateSelectArg){
    const title= prompt('Plese enter the title of the event');
    const events = selectInfo.view.calendar;

    events.unselect();

    if(title){
      events.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick(clickInfo: EventClickArg){
    if(confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
    clickInfo.event.remove();
  }


}
