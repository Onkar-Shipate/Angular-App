import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  
  
  cats : any;
  categories : any;
  selectedCategory: any;
  imageArray : any;
  catId :any;
  
  constructor(private catservice : CatService) {
    this.catservice.getCategories().subscribe(categories => {
    this.categories = categories;
    });

    this.catservice.getCats().subscribe(cats => {
      this.cats = cats;
      this.imageArray = cats;
    });

   
   }
  
  ngOnInit(): void {
  }
  showImages(value:any) {
    this.catId = value;
    this.catservice.getSelectedCategory(this.catId).subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
      this.imageArray = [];
      this.imageArray = this.selectedCategory;
    })
  }
}
  
  

