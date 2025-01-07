import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplefedexComponent } from './peoplefedex.component';

describe('PeoplefedexComponent', () => {
  let component: PeoplefedexComponent;
  let fixture: ComponentFixture<PeoplefedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplefedexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoplefedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
