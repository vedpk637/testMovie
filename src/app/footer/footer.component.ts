import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isFooterBlock:boolean=true;

  constructor(private _dataservice:DataserviceService) {
    this._dataservice.isHeaderBlock.subscribe(res => {this.isFooterBlock=res})
   }
  ngOnInit(): void {
  }

}
