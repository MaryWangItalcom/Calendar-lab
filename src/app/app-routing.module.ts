import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from "./events/events.component";

const routes: Routes = [
  { path: 'dashboard', component: AppComponent},
  { path: 'events', component: EventsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
