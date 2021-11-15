import { Component} from '@angular/core';
import { CalendarOptions, DateSelectArg, EventDropArg, EventClickArg, EventApi } from "@fullcalendar/angular";


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
    slotMaxTime: "21:00:00",
    //dateClick: this.handleDateClick.bind(this),
    //eventClick: this.handleEventClick.bind(this),
    select: this.handleInfoEvent.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this),
    events: [
      {title: 'event 1', date: '2021-11-15' , editable: true, extendedProps: {
        department: 'BioChemistry'
      }
    },
      {id:'2', title: 'event 2', date: '2021-11-16', editable: false}
    ],


  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  /* handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr)
    // apri una finestra modale che contiene un componente che serve per iserire una attività

  } */

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

 /*  handleEventClick(arg:EventClickArg) {
    alert("Stai modificando l'evento con l'id: " + arg.event.extendedProps['department']);
  } */

  /* let str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  }); 

  console.log(str); */
  

}
