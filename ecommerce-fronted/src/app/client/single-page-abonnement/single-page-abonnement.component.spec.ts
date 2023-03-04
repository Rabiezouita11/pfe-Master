import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageAbonnementComponent } from './single-page-abonnement.component';

describe('SinglePageAbonnementComponent', () => {
  let component: SinglePageAbonnementComponent;
  let fixture: ComponentFixture<SinglePageAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePageAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
