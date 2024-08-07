import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjsintro';

  // interval$ = interval(10);
  // intervalSubcription !: Subscription;

  
  ngOnInit(): void {
    // this.intervalSubcription = this.interval$
    //                                 .subscribe(res => {
    //                                   console.log(res)
    //                                 })
  }

  ngOnDestroy(): void {
    // this.intervalSubcription.unsubscribe()
  }
}
