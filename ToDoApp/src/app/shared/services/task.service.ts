import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  public tareas: Task[] = [
    {
      id: 1,
      name: "Lavar los platos",
      description: "Lavar los platos que están en la pileta.",
      priority: 1,
      date: new Date("2024-11-12T10:00:00"),
      completed: false
    },
    {
      id: 2,
      name: "Hacer la compra",
      description: "Comprar alimentos y productos para la semana.",
      priority: 2,
      date: new Date("2024-11-12T15:00:00"),
      completed: false
    },
    {
      id: 3,
      name: "Estudiar para el examen de matemáticas",
      description: "Revisar los temas de álgebra y geometría.",
      priority: 1,
      date: new Date("2024-11-13T09:00:00"),
      completed: false
    },
    {
      id: 4,
      name: "Llamar a Juan",
      description: "Hablar con Juan sobre el proyecto de trabajo.",
      priority: 3,
      date: new Date("2024-11-12T18:00:00"),
      completed: false
    },
    {
      id: 5,
      name: "Lavar la ropa",
      description: "Lavar las prendas de ropa que están en el cesto.",
      priority: 2,
      date: new Date("2024-11-12T13:00:00"),
      completed: false
    },
    {
      id: 6,
      name: "Leer libro de desarrollo personal",
      description: "Leer 20 páginas del libro 'El poder del ahora'.",
      priority: 3,
      date: new Date("2024-11-12T20:00:00"),
      completed: false
    },
    {
      id: 7,
      name: "Ir al gimnasio",
      description: "Hacer ejercicio por 1 hora.",
      priority: 1,
      date: new Date("2024-11-13T08:00:00"),
      completed: false
    },
    {
      id: 8,
      name: "Enviar correos importantes",
      description: "Enviar correos de seguimiento a clientes.",
      priority: 2,
      date: new Date("2024-11-12T11:00:00"),
      completed: false
    }
  ]

  // Creamos el BehaviorSubject para emitir las tareas
  private tareasSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tareas)

  public getTareas(){
    return this.tareasSubject.asObservable()
  }

  public agregarTarea(tarea: Task){
    this.tareas.push(tarea)
    this.tareasSubject.next(this.tareas)
  }

  public eliminarTarea(idRecibido: number){
    for(let i = 0; i < this.tareas.length; i++){
      if(this.tareas[i].id == idRecibido){
        this.tareas.splice(i, 1)
      }
    }
    this.tareasSubject.next(this.tareas)
  }
}
