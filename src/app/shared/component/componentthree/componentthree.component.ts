import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-componentthree',
  templateUrl: './componentthree.component.html',
  styleUrls: ['./componentthree.component.scss']
})
export class ComponentthreeComponent implements OnInit {

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
