import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstarpp',
  templateUrl: './bootstarpp.component.html',
  styleUrls: ['./bootstarpp.component.css']
})
export class BootstarppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBgUrl(): string {
    return 'url(assets/images/004.jpg)';
  }
  

}
