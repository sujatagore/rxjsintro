import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.scss']
})
export class ComponentoneComponent implements OnInit {

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
