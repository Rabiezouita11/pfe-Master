import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAbonnementComponent } from './liste-demande-abonnement.component';

describe('ListeDemandeAbonnementComponent', () => {
  let component: ListeDemandeAbonnementComponent;
  let fixture: ComponentFixture<ListeDemandeAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
