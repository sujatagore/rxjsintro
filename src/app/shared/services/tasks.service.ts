import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskSub$ : Subject<string> = new Subject<string>()

  constructor() { }
}
