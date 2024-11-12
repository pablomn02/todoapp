import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent {

  constructor(private service: TaskService){}

  newTask = new FormGroup({
    id: new FormControl( 0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    completed: new FormControl(false)
  });

  onSubmit(){
    if(this.newTask.valid){
      // this.service.agregarTarea(this.newTask.value)
      console.log("Nueva tarea añadida: ", this.newTask)
    }
  }

}
