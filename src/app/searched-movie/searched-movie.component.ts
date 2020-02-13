import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs';


 

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html', 
  styleUrls: ['./searched-movie.component.css']
})
export class SearchedMovieComponent implements OnInit, OnDestroy {
  recievedMovie={};
  movies=[];
  filterMovie=[];
  recievedDataSubscription:Subscription;
  options ={};
  itemsPerSlide = 3;
  singleSlideOffset =false;
  noWrap = false;


  constructor(private _dataservice:DataserviceService) {
    this._dataservice.defaultMovie.subscribe(dMovie =>{this.recievedMovie=dMovie})  // for Featured Movie
    
   }
  
  ngOnInit() {

    this._dataservice.isBackSelected.next(true)                                    // back Button

              //data subscribe and unsubscribe
     this.recievedDataSubscription = this._dataservice.defaultMovie.subscribe(data =>{this.recievedMovie=data})     

    // console.log(JSON.stringify(this.recievedMovie));

    this.movies= this._dataservice.movieList;                                      // import movie list from data service
    this.recievedMovie = this._dataservice.selectedMovie;                          // selected Movie part

     console.log(this.movies);
    this.movies.forEach(movie=>{
       if(movie.isFeatured=="true"){
       this.filterMovie.push(movie);
       }
    });
    // console.log(this.filterMovie);

   for (let i = 0; i < this.filterMovie.length; i++) {
      for (let j = 0; j < this.filterMovie[i].rating; j++) {
          this.filterMovie[i].starArray[j].isRated = false;
      }
    }

  }
  ngOnDestroy(){
    this.recievedDataSubscription.unsubscribe();
    this._dataservice.isBackSelected.next(false);
    
  }

}
