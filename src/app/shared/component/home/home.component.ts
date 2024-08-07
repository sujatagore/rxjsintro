import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //subscribe and Unsubscribe >> 

  interval$ = interval(2000);
  intervalSubcription !: Subscription

  constructor() { }
  
  ngOnInit(): void {
      this.intervalSubcription = this.interval$
                                      .subscribe(res =>{
                                        console.log(res)
                                      })
  }

  ngOnDestroy(): void {
    this.intervalSubcription.unsubscribe()
  }

}
