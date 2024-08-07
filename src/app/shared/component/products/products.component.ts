import { Component, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../module/posts.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // postsData !: Array<string>

  postsData !: Array<Iposts>

  constructor(
    private _postsServices : PostsService
  ) { }

  ngOnInit(): void {
    this._postsServices.fetchAllPosts()
        .subscribe(
          (res) =>{
            // console.log(res)
            this.postsData = res
            console.log(this.postsData)
          }
        )
  }

}
