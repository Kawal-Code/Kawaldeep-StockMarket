import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstockexchangeComponent } from './editstockexchange.component';

describe('EditstockexchangeComponent', () => {
  let component: EditstockexchangeComponent;
  let fixture: ComponentFixture<EditstockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
