import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myReactiveForm:FormGroup;
  formStatus;
  constructor(private _dataservice:DataserviceService) {
   }

  ngOnInit() {
    this._dataservice.isFooterBlock.next(false);
    this._dataservice.isHeaderBlock.next(false);
    this.myReactiveForm = new FormGroup({
      'fullname': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]), // validators for user name
      'email': new FormControl(null,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      'password' : new FormControl(null,[Validators.required,Validators.pattern('((?=.*\\d)(?=.*[A-Z]).{8,30})')])
    });

    this.myReactiveForm.statusChanges.subscribe((status)=>{console.log(status)
    this.formStatus=status})
  }
  // to check data details of form
  onSubmit(){
    console.log(this.myReactiveForm);
  }
  // to submit page data
  submitForm(uname){
  this._dataservice.loginData.next(uname.value);
  console.log(uname);
  this._dataservice.isLoggedIn.next(true);
  this._dataservice.isFooterBlock.next(true);
  this._dataservice.isHeaderBlock.next(true);
  }

}
