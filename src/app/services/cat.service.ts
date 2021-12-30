import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CatService {
  
   catsUrl = 'https://api.thecatapi.com/v1/images/search';
   categoriesurl = 'https://api.thecatapi.com/v1/categories';
   categorySelectedUrl : any;

  httpOptions: any ={
    headers: new HttpHeaders({'content-type' : 'application/json'}) 
  };

  constructor(
    private http : HttpClient,
  ) { }
  
  getCats()  {
    return this.http.get(this.catsUrl);
    
  }
  getCategories(){
    return this.http.get(this.categoriesurl);
  }

  getSelectedCategory(cId: any){
   
   cId = cId.trim();
   this.categorySelectedUrl = 'https://api.thecatapi.com/v1/images/search?category_ids='+cId+'&limit=10';
   console.log("categorySelectedUrl-->",this.categorySelectedUrl)
   return this.http.get(this.categorySelectedUrl);
  }

}
