import { Component } from '@angular/core';
import { CatService } from './services/cat.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat Categories';
  cats : any;
  imageArray = [];
  transform = [
    {
      height: 300,
      width: 300,
      crop: "at_max"
    },
  ];
  constructor (private catData:CatService){
    
  }
}
