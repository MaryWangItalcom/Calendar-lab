import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ACTIVITY } from "./models/activitiesList";
import { Activity } from "./models/activity.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getActivities(): Observable<Activity[]> {
    const activities = of(ACTIVITY);
    return activities;
  }


}

