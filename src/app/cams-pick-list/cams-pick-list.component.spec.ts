import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamsPickListComponent } from './cams-pick-list.component';

describe('CamsPickListComponent', () => {
  let component: CamsPickListComponent;
  let fixture: ComponentFixture<CamsPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamsPickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamsPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
