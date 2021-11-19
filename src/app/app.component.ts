import { Component, OnInit} from '@angular/core';
import { Calendar } from "@fullcalendar/core";
import { CalendarOptions, DateSelectArg, EventDropArg, EventClickArg} from "@fullcalendar/angular";
import itLocale from "@fullcalendar/core/locales/it";
import { EventService } from './event.service';
import { Activity } from './models/activity.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  activities:any[] = [];
  calendarOptions!: CalendarOptions;

  constructor(
    private eventService: EventService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) {

  }
  ngOnInit(): void {
   this.getEvents();
  }

  getEvents() {
    this.eventService.getActivities().subscribe(
      res => {
        this.activities = res.map(e => {
          return {
            title: e.title,
            id: e.id,
            start: e.start,
            description: e.description
          } 
        });


        this.calendarOptions  = {
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
          titleFormat: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          },
      
          timeZone: 'GMT',
          locale: 'it',
          select: this.handleInfoEvent.bind(this),
          eventClick: this.handleEventClick.bind(this),
          eventDrop: this.handleEventDrop.bind(this),
        events: this.activities,
        };

      }
    );
  }

 


  toggleWeekends() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
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


  /* handleEventClick(clickInfo: EventClickArg){
    if(confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
    clickInfo.event.remove();
  } */

  handleEventClick(scheduleAddModal:any): void {
    this.modalService.open(scheduleAddModal, {ariaLabelledBy: 'modal-basic-title'})
    .result.then( 
      res => {
        this.spinner.show()
        console.log("risultato event Click", res);
        
        // this.activity = res;
      }
    )

  }




}
