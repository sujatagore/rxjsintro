import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-componenttwo',
  templateUrl: './componenttwo.component.html',
  styleUrls: ['./componenttwo.component.scss']
})
export class ComponenttwoComponent implements OnInit {

  taskNameValue !: string

  constructor(
    private _taskService : TasksService
  ) { }

  ngOnInit(): void {
    this._taskService.taskSub$
      .subscribe(
        val => this.taskNameValue = val
      )
  }

}
