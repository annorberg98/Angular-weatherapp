import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationwidgetComponent } from './locationwidget.component';

describe('LocationwidgetComponent', () => {
  let component: LocationwidgetComponent;
  let fixture: ComponentFixture<LocationwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
