import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-moviescomp',
  templateUrl: './moviescomp.component.html',
  styleUrls: ['./moviescomp.component.css']
})
export class MoviescompComponent implements OnInit {
  isName:boolean;
  isYear:boolean;
  isRating:boolean;
  isRated: boolean = false;
  movieList = [];
  p: number=1;
  searchText="";
  firstNameclick: boolean;
  sortByYearclick: boolean;
  sortByRateclick:boolean;
  isGreater:boolean;


  constructor(private _movieList: DataserviceService) {

  }

  ngOnInit() {
    this.movieList = this._movieList.movieList;
    // console.log(JSON.stringify(this.movieList));
    for (let i = 0; i < this.movieList.length; i++) {
      for (let j = 0; j < this.movieList[i].rating; j++) {
        this.movieList[i].starArray[j].isRated = false;
      }
    }
    
  }


  sortByName() {
    this.isName = true;
    this.isRating=false;
    this.isYear=false;
    if (this.firstNameclick == true) {
      this.movieList.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      this.firstNameclick = false;
    }
    else {
      this.movieList.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB)
          return 1
        if (nameA > nameB)
          return -1
        return 0
      })
      this.firstNameclick = true;
    }
  }
  
   //sort By Year Starts---->//
  sortByYear() {
    this.isName=false;
    this.isRating=false;
    this.isYear=true;
    if (this.sortByYearclick == true) {
      return this.movieList.sort((a, b) => {
        this.sortByYearclick =false;
        return <any>new Date(b.year) - <any>new Date(a.year);
      }) 
    }
    else {
      return this.movieList.sort((a, b) => {
        this.sortByYearclick = true;
        return <any>new Date(a.year) - <any>new Date(b.year);
      })
    }
  }
   // sort by Rating Starts --->
  sortByRating() {
    this.isName=false;
    this.isRating=true;
    this.isYear=false;
    if (this.sortByRateclick == true) {
      return this.movieList.sort((a, b) => {
        this.sortByRateclick =false;
        return <any>new Date(a.rating) - <any>new Date(b.rating);
      }) 
    }
    else {
      return this.movieList.sort((a, b) => {
        this.sortByRateclick = true;
        return <any>new Date(b.rating) - <any>new Date(a.rating);
      })
    }
  }

  selectedMovie(movie){
    // console.log(JSON.stringify(movie))
    this._movieList.setselectedMovie(movie)
  }

  searchChanges(){
    this.p = 1;
  }

}
