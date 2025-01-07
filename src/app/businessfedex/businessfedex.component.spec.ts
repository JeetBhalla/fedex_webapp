import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessfedexComponent } from './businessfedex.component';

describe('BusinessfedexComponent', () => {
  let component: BusinessfedexComponent;
  let fixture: ComponentFixture<BusinessfedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessfedexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessfedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
