import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerDetailsComponent } from './costumer-details.component';

describe('CostumerDetailsComponent', () => {
  let component: CostumerDetailsComponent;
  let fixture: ComponentFixture<CostumerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
