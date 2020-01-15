import { Component, OnInit } from '@angular/core';
 
declare var AOS:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animation_foot();
  }
  animation_foot()
  {
    AOS.init();
  }

}
