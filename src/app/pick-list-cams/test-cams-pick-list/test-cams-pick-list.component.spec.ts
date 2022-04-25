import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCamsPickListComponent } from './test-cams-pick-list.component';

describe('TestCamsPickListComponent', () => {
  let component: TestCamsPickListComponent;
  let fixture: ComponentFixture<TestCamsPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCamsPickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCamsPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
