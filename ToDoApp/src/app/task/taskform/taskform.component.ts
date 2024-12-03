import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/shared/interfaces/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent {
  taskForm: FormGroup;
  tasks: Task[] = []
  private nextId: number = 1;

  constructor(private formBuilder: FormBuilder){
    this.taskForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(20)]],
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      date: ['', Validators.required],
      completed: [false]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: this.nextId++, // Genera el ID automáticamente
        ...this.taskForm.value
      };
      this.tasks.push(newTask);
      console.log('Tarea creada:', newTask);
      this.taskForm.reset();
    } else {
      console.error('Formulario inválido');
    }
  }



}
