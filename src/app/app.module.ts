import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviescompComponent } from './moviescomp/moviescomp.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MoviescompComponent,
    HeaderComponent,
    FooterComponent,
    SearchedMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CarouselModule.forRoot(),
  ],
  schemas: [  CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
