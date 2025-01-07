import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WefedexComponent } from './wefedex.component';

describe('WefedexComponent', () => {
  let component: WefedexComponent;
  let fixture: ComponentFixture<WefedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WefedexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WefedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
