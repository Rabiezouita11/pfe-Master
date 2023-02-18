import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatDeSerreComponent } from './etat-de-serre.component';

describe('EtatDeSerreComponent', () => {
  let component: EtatDeSerreComponent;
  let fixture: ComponentFixture<EtatDeSerreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatDeSerreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatDeSerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
