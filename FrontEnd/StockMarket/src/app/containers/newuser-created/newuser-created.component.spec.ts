import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserCreatedComponent } from './newuser-created.component';

describe('NewuserCreatedComponent', () => {
  let component: NewuserCreatedComponent;
  let fixture: ComponentFixture<NewuserCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewuserCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
