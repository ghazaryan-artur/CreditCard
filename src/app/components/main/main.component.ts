import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements DoCheck {

  constructor() { }

  ngDoCheck() {
    this.bottomBorder();
  }
  

  bottomBorder():void{
    if (window.location.pathname === '/history'){
      document.getElementsByTagName('a')[1].style.borderBottom = '2px solid white';
      document.getElementsByTagName('a')[0].removeAttribute('style');
    } else {
      document.getElementsByTagName('a')[0].style.borderBottom = '2px solid white';
      document.getElementsByTagName('a')[1].removeAttribute('style');
    }
  }
  
} 
 