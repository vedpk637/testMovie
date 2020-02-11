import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviescompComponent } from './moviescomp/moviescomp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';


const routes: Routes = [
  {path:'',component:MoviescompComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'searchedMovie',component:SearchedMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
