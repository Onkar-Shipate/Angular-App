import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CatService } from '../services/cat.service';
import { CatsComponent } from './cats.component';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;
  
  beforeEach(async () => {
   await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ CatsComponent ],
      providers:[CatService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     fixture = TestBed.createComponent(CatsComponent);
     component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
 it('should get cat from the service',() => {
    
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    let catService = fixture.debugElement.injector.get(CatService);
    fixture.detectChanges();
    expect(catService.catsUrl).withContext(catService.categorySelectedUrl);
  });
  
 
});


