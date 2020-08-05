import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRelatedComponent } from './company-related.component';

describe('CompanyRelatedComponent', () => {
  let component: CompanyRelatedComponent;
  let fixture: ComponentFixture<CompanyRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
