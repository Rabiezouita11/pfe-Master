import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffusiondirectComponent } from './diffusiondirect.component';

describe('DiffusiondirectComponent', () => {
  let component: DiffusiondirectComponent;
  let fixture: ComponentFixture<DiffusiondirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffusiondirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffusiondirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
