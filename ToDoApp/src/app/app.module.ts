import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasklistComponent } from './task/tasklist/tasklist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { TaskformComponent } from './task/taskform/taskform.component';

const routes: Routes = [
  { path: 'inicio', component: TasklistComponent },
  { path: 'tareas', component: TasklistComponent }
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
    RouterModule.forRoot(routes)  // Importa RouterModule con las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
