import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ConfirmationService } from 'primeng/api';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ConfirmationService]
})
export class AboutComponent implements OnInit {

  
  //@ViewChild('changePasswordModal') changePasswordModal: ChangePasswordModalComponent;

  title = 'combined firebase and crud';
  fname = 'demo';
  value: string;
  initial = 'initially nothing created';
  changeUpperCase(value: string) {
    this.value = value;
  }
  createnow(){
this.initial =  this.fname;

  }
  userList = [];
  constructor(private service: MyServiceService, confirmationService: ConfirmationService) {
    //Get the user list by using the my service.
    this.userList = service.getUsers();
  }
  images: any[];

  ngOnInit():void {
    this.images = [];
    this.images.push({source:'assets/images/road220058.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/tuscany428041.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/banner-background.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/tuscany428041.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/sur.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/widescreen_forest_004692_.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/004.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/sur.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/widescreen_forest_004692_.jpg', alt:'Description for Image 1', title:'Title 1'});

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
}


private _success = new Subject<string>();

staticAlertClosed = false;
successMessage: string;

model = {
  left: true,
  middle: false,
  right: false
};

public changeSuccessMessage() {
  this._success.next(`${new Date()} - Message successfully changed.`);
}


}
