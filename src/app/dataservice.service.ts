import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 userData=[]; 
 selectedMovie=[]; 
 loginData = new Subject<any>();
 isHeaderBlock = new BehaviorSubject<any>(true);      // for header true/false
 isLoggedIn = new BehaviorSubject<any>(false);        // is user logged in or not 
 isFooterBlock = new BehaviorSubject<any>(true);      // for footer block
 defaultMovie =new BehaviorSubject<any>(true);        // for featured Movies   
 isBackSelected =new BehaviorSubject<any>(false);     // for back button


  movieList=[
    {id:1,name:"Avatar",imgurl:"../../assets/1.jpg",rating:"4",isFeatured:"false",year:"2009","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:2,name:"The Lord of the Rings: The Return of the King",imgurl:"../../assets/2.jpg",rating:"5",isFeatured:"false",year:	"2003","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:3,name:"Pirates of the Caribbean: Dead Man's Chest",imgurl:"../../assets/3.jpg",rating:"1",isFeatured:"false",year:"2006", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:4,name:"The Dark Knight",rating:"4",isFeatured:"false",year:"2008",imgurl:"../../assets/4.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:5,name:"Harry Potter and the Philosopher's Stone",imgurl:"../../assets/5.jpg",rating:"5",isFeatured:"false",year:"2001","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:6,name:"Pirates of the Caribbean: At World's End",imgurl:"../../assets/6.jpg",rating:"3",isFeatured:"true",year:	"2007","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:7,name:"Harry Potter and the Order of the Phoenix",imgurl:"../../assets/7.jpg",rating:"2",isFeatured:"false",year:"2007", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:8,name:"Harry Potter and the Half-Blood Prince",rating:"1",isFeatured:"false",year:"2009",imgurl:"../../assets/8.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:9,name:"The Lord of the Rings: The Two Towers	",imgurl:"../../assets/9.jpg",rating:"2",isFeatured:"false",year:"2002","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:10,name:"Shrek 2",imgurl:"../../assets/10.jpg",rating:"4",isFeatured:"false",year:	"2004","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:11,name:"Harry Potter and the Goblet of Fire",imgurl:"../../assets/11.jpg",rating:"2",isFeatured:"false",year:"2005", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:12,name:"Spider-Man 3",rating:"2",isFeatured:"false",year:"2007",imgurl:"../../assets/12.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:13,name:"Ice Age: Dawn of the Dinosaurs",imgurl:"../../assets/13.jpg",rating:"4",isFeatured:"false",year:"2009","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:14,name:"Harry Potter and the Chamber of Secrets	",imgurl:"../../assets/14.jpg",rating:"4",isFeatured:"true",year:	"2001","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:15,name:"The Lord of the Rings: The Fellowship of the Ring",imgurl:"../../assets/15.jpg",rating:"1",isFeatured:"false",year:"2003", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:16,name:"Finding Nemo",rating:"4",isFeatured:"false",year:"2009",imgurl:"../../assets/16.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:17,name:"Star Wars: Episode III – Revenge of the Sith	",imgurl:"../../assets/17.jpg",rating:"0",isFeatured:"false",year:"2005","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:18,name:"Transformers: Revenge of the Fallen",imgurl:"../../assets/18.jpg",rating:"0",isFeatured:"false",year:	"2009","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:19,name:"Spider-Man",imgurl:"../../assets/19.jpg",rating:"1",isFeatured:"false",year:"2002", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:20,name:"Shrek the Third",rating:"5",isFeatured:"false",year:"2007",imgurl:"../../assets/20.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:21,name:"Harry Potter and the Prisoner of Azkaban",imgurl:"../../assets/21.jpg",rating:"4",isFeatured:"false",year:"2004","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:22,name:"Indiana Jones and the Kingdom of the Crystal Skull",imgurl:"../../assets/22.jpg",rating:"3",isFeatured:"false",year:	"2008","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:23,name:"Spider-Man 2",imgurl:"../../assets/23.jpg",rating:"1",isFeatured:"false",year:"2004", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:24,name:"The Da Vinci Code",rating:"4",isFeatured:"false",year:"2006",imgurl:"../../assets/24.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:25,name:"The Chronicles of Narnia",imgurl:"../../assets/25.jpg",rating:"1",isFeatured:"false",year:"2005","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:26,name:"The Matrix Reloaded",imgurl:"../../assets/26.jpg",rating:"3",isFeatured:"false",year:	"2003","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:27,name:"2012",imgurl:"../../assets/27.jpg",rating:"1",isFeatured:"false",year:"2009", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:28,name:"Transformers",rating:"5",isFeatured:"false",year:"2007",imgurl:"../../assets/28.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:29,name:"up",imgurl:"../../assets/29.jpg",rating:"2",isFeatured:"true",year:"2009","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:30,name:"The Twilight Saga: New Moon",imgurl:"../../assets/30.jpg",rating:"1",isFeatured:"false",year:	"2009","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:31,name:"Ice Age: The Meltdown",imgurl:"../../assets/31.jpg",rating:"4",isFeatured:"false",year:"2006", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:32,name:"Pirates of the Caribbean: The Curse of the Black Pearl",rating:"5",isFeatured:"false",year:"2003",imgurl:"../../assets/32.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:33,name:"Star Wars: Episode II – Attack of the Clones",imgurl:"../../assets/33.jpg",rating:"4",isFeatured:"false",year:"2002","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:34,name:"Harry Potter and the Chamber of Secrets	",imgurl:"../../assets/34.jpg",rating:"3",isFeatured:"false",year:	"2008","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:35,name:"Kung Fu Panda",imgurl:"../../assets/35.jpg",rating:"2",isFeatured:"false",year:"2004", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:36,name:"Hancock",rating:"1",isFeatured:"false",year:"2008",imgurl:"../../assets/36.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:37,name:"Ratatouille	",imgurl:"../../assets/37.jpg",rating:"3",isFeatured:"false",year:"2007","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:38,name:"The Passion of the Christ",imgurl:"../../assets/38.jpg",rating:"2",isFeatured:"false",year:	"2004","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:39,name:"Mamma Mia!",imgurl:"../../assets/39.jpg",rating:"1",isFeatured:"false",year:"2008", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:40,name:"Madagascar: Escape 2 Africa",rating:"1",isFeatured:"false",year:"2008",imgurl:"../../assets/40.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]}, 
    {id:41,name:"Casino Royale",imgurl:"../../assets/41.jpg",rating:"3",isFeatured:"false",year:"2006","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:42,name:"War of the Worlds",imgurl:"../../assets/42.jpg",rating:"3",isFeatured:"false",year:	"2005","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:43,name:"Quantum of Solace",imgurl:"../../assets/43.jpg",rating:"4",isFeatured:"false",year:"2008", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:44,name:"I Am Legend",rating:"5",isFeatured:"false",year:"2007",imgurl:"../../assets/44.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:45,name:"Iron Man",imgurl:"../../assets/45.jpg",rating:"3",isFeatured:"false",year:"2008","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:46,name:"Night at the Museum",imgurl:"../../assets/46.jpg",rating:"1",isFeatured:"false",year:	"2006","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:47,name:"King Kong",imgurl:"../../assets/47.jpg",rating:"5",isFeatured:"false",year:"2005", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:48,name:"Mission:Impossible 2",rating:"5",isFeatured:"false",year:"2000",imgurl:"../../assets/48.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:49,name:"The day after Tomorrow",imgurl:"../../assets/49.jpg",rating:"1",isFeatured:"false",year:"2004","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:50,name:"Madagaskar",imgurl:"../../assets/50.jpg",rating:"2",isFeatured:"false",year:	"2005","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:51,name:"Avengers: Endgame",imgurl:"../../assets/51.jpg",rating:"2",isFeatured:"false",year:"2019", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:52,name:"Star Wars: The Force Awakens",rating:"1",isFeatured:"true",year:"2015",imgurl:"../../assets/52.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:53,name:"Avengers: Infinity War",imgurl:"../../assets/53.jpg",rating:"3",isFeatured:"false",year:"2018","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:54,name:"The Lion King",imgurl:"../../assets/54.jpg",rating:"2",isFeatured:"false",year:	"2015","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:55,name:"The Lord of the Rings: The Fellowship of the Ring",imgurl:"../../assets/55.jpg",rating:"3",isFeatured:"false",year:"2019", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:56,name:"The Avengers",rating:"5",isFeatured:"false",year:"2012",imgurl:"../../assets/56.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:57,name:"Furious 7",imgurl:"../../assets/57.jpg",rating:"2",isFeatured:"false",year:"2015","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:58,name:"Avengers: Age of Ultron",imgurl:"../../assets/58.jpg",rating:"2",isFeatured:"false",year:	"2015","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:59,name:"Frozen II",imgurl:"../../assets/59.jpg",rating:"2",isFeatured:"false",year:"2019", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:60,name:"Black Panther",rating:"3",isFeatured:"false",year:"2018",imgurl:"../../assets/60.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:61,name:"Harry Potter and the Deathly Hallows – Part 2 ",imgurl:"../../assets/61.jpg",rating:"3",isFeatured:"false",year:"2011","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:62,name:"Star Wars: The Last Jedi",imgurl:"../../assets/62.jpg",rating:"1",isFeatured:"false",year:	"2017","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:63,name:"Jurassic World: Fallen Kingdom",imgurl:"../../assets/63.jpg",rating:"1",isFeatured:"false",year:"2017", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:64,name:"Frozen",rating:"3",isFeatured:"false",year:"2018",imgurl:"../../assets/64.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:65,name:"Beauty and the Beast",imgurl:"../../assets/65.jpg",rating:"1",isFeatured:"false",year:"2017","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:66,name:"Incredibles 2",imgurl:"../../assets/66.jpg",rating:"5",isFeatured:"false",year:	"2018","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:67,name:"The Fate of the Furious",imgurl:"../../assets/67.jpg",rating:"0",isFeatured:"false",year:"2006", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:68,name:"Iron Man 3",rating:"3",isFeatured:"false",year:"2017",imgurl:"../../assets/68.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:69,name:"Minions",imgurl:"../../assets/69.jpg",rating:"5",isFeatured:"false",year:"2013","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:70,name:"Captain America: Civil War",imgurl:"../../assets/70.jpg",rating:"2",isFeatured:"true",year:	"2016","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:71,name:"Aquaman",imgurl:"../../assets/71.jpg",rating:"1",isFeatured:"false",year:"2018", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:72,name:"Spider-Man: Far From Home",rating:"4",isFeatured:"false",year:"2019",imgurl:"../../assets/72.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:73,name:"Captain Marvel",imgurl:"../../assets/73.jpg",rating:"3",isFeatured:"false",year:"2019","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:74,name:"Transformers: Dark of the Moon",imgurl:"../../assets/74.jpg",rating:"4",isFeatured:"false",year: "2011","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:75,name:"Skyfall",imgurl:"../../assets/75.jpg",rating:"4",isFeatured:"false",year:"2012", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:76,name:"Transformers: Age of Extinction",rating:"4",isFeatured:"false",year:"2014",imgurl:"../../assets/76.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:77,name:"The Dark Knight Rises",imgurl:"../../assets/77.jpg",rating:"3",isFeatured:"false",year:"2012","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:78,name:"Toy Story 4",imgurl:"../../assets/78.jpg",rating:"2",isFeatured:"false",year:	"2019","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:79,name:"Joker",imgurl:"../../assets/79.jpg",rating:"2",isFeatured:"false",year:"2019", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:80,name:"Toy Story 3",rating:"3",isFeatured:"false",year:"2010",imgurl:"../../assets/80.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:81,name:"Rogue One: A Star Wars Story",imgurl:"../../assets/81.jpg",rating:"5",isFeatured:"false",year:"2016","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:82,name:"Aladdin",imgurl:"../../assets/82.jpg",rating:"2",isFeatured:"false",year:	"2019","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:83,name:"Pirates of the Caribbean: On Stranger Tides",imgurl:"../../assets/83.jpg",rating:"1",isFeatured:"false",year:"2011", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:84,name:"Despicable Me 3",rating:"5",isFeatured:"false",year:"2017",imgurl:"../../assets/84.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:85,name:"Finding Dory",imgurl:"../../assets/85.jpg",rating:"3",isFeatured:"false",year:"2016","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:86,name:"Alice in Wonderland",imgurl:"../../assets/86.jpg",rating:"4",isFeatured:"false",year: "2010","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:87,name:"Zootopia",imgurl:"../../assets/87.jpg",rating:"2",isFeatured:"false",year:"2016", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:88,name:"The Hobbit: An Unexpected Journey",rating:"3",isFeatured:"false",year:"2012",imgurl:"../../assets/88.png", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:89,name:"Star Wars: The Rise of Skywalker",imgurl:"../../assets/89.jpg",rating:"1",isFeatured:"false",year:"2019","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:90,name:"Despicable Me 2",imgurl:"../../assets/90.jpg",rating:"2",isFeatured:"false",year:	"2013","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:91,name:"The Jungle Book",imgurl:"../../assets/91.jpg",rating:"5",isFeatured:"false",year:"2016", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:92,name:"Jumanji: Welcome to the Jungle",rating:"2",isFeatured:"false",year:"2017",imgurl:"../../assets/92.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:93,name:"Harry Potter and the Deathly Hallows - Part 1",imgurl:"../../assets/93.jpg",rating:"4",isFeatured:"false",year:"2010","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:94,name:"The Hobbit: The Desolation of Smaug",imgurl:"../../assets/94.jpg",rating:"3",isFeatured:"false",year:	"2013","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:95,name:"The Hobbit: The Battle of the Five Armies",imgurl:"../../assets/95.jpg",rating:"5",isFeatured:"false",year:"2014", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:96,name:"Bohemian Rhapsody",rating:"5",isFeatured:"false",year:"2018",imgurl:"../../assets/96.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:97,name:"Spectre",imgurl:"../../assets/97.jpg",rating:"3",isFeatured:"false",year:"2015","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:98,name:"Spider-Man: Homecoming",imgurl:"../../assets/98.jpg",rating:"3",isFeatured:"false",year:	"2017","starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:99,name:"Ice Age: Continental Drift",imgurl:"../../assets/99.jpg",rating:"5",isFeatured:"false",year:"2012", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},
    {id:100,name:"The Secret Life of Pets",rating:"3",isFeatured:"false",year:"2016",imgurl:"../../assets/100.jpg", "starArray":[{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"},{"isRated":"FALSE"}]},

  ];

  constructor() { }

   //For users data 
  getuserData(){
    return this.userData;
  }
 
  setuserData(data){
    this.userData.push(data);      
    this.loginData.next(this.userData);
  }
  //for movies component
  getselectedMovie(){
    return this.selectedMovie;
  }
  //  for selected movie Block -- searched Movies
  setselectedMovie(data){
    this.selectedMovie.shift();                      //delet previous movie
    this.selectedMovie.push(data);                   //load new Movie
    this.defaultMovie.next(this.selectedMovie);
  }

}
