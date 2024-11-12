import { Component } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  tareas: Task[] = []

  constructor(private service: TaskService){
    console.log(this.tareas)

    this.service.getTareas().subscribe(
      tareas => {
        this.tareas = tareas
      }
    )
    console.log(this.tareas)
  }

  deleteTarea(id: number){
    this.service.eliminarTarea(id)
    window.alert("Has eliminado la Tarea")
  }

}
