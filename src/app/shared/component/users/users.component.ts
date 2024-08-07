import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    this._ofService.of$
      .subscribe(num =>{
        console.log(num)
      })

    this._ofService.skills$
        .subscribe(skill =>{
          console.log(skill)
        })
    
    this._ofService.overInterval$
          .subscribe(
            (count) =>{console.log(count)},
            (err) =>{console.log(err)},
            ()=>{console.log(`Observer count is completed...`)}
          )
  }

}
