import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAbonnementComponent } from './ajouter-abonnement.component';

describe('AjouterAbonnementComponent', () => {
  let component: AjouterAbonnementComponent;
  let fixture: ComponentFixture<AjouterAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
