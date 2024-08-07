import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private _taskService : TasksService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('taskName') taskNameRef !: ElementRef;

  onTaskAdd(){
      let val = this.taskNameRef.nativeElement.value as string
      console.log(val)
      this.taskNameRef.nativeElement.value = '';
      this._taskService.taskSub$.next(val)
  }
}
