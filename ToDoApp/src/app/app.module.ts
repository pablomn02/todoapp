import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasklistComponent } from './task/tasklist/tasklist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { TaskformComponent } from './task/taskform/taskform.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'inicio', component: TasklistComponent },
  { path: 'tareas', component: TasklistComponent },
  { path: 'crear-tarea', component: TaskformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasklistComponent,
    TaskComponent,
    TaskformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
