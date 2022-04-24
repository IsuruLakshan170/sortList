import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedPicklistComponent } from './extended-picklist.component';

describe('ExtendedPicklistComponent', () => {
  let component: ExtendedPicklistComponent;
  let fixture: ComponentFixture<ExtendedPicklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedPicklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
