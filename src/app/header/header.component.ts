import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string ;
  isLoggedIn:boolean;
  isHeaderBlock:boolean;
  isFooterBlock:boolean;
  isBackSelected:boolean;

  constructor(private _dataservices:DataserviceService) { 
    this._dataservices.loginData.subscribe(uname =>{this.userName=uname})
     //for signup block
    this._dataservices.isLoggedIn.subscribe(res =>{this.isLoggedIn=res})
    this._dataservices.isHeaderBlock.subscribe(res =>{this.isHeaderBlock=res})
    this._dataservices.isFooterBlock.subscribe(res=>{this.isFooterBlock=res})
    this._dataservices.isBackSelected.subscribe(res =>{this.isBackSelected=res})
  }

  ngOnInit () {
  }

  onLogOut(){
    this._dataservices.isLoggedIn.next(false);
   // this._dataservices.isFooterBlock.next(false);
  }
  onLogIn(){
    this._dataservices.isHeaderBlock.next(false);
    
  }


  
}
