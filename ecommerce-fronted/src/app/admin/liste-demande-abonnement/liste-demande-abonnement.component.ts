import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-demande-abonnement',
  templateUrl: './liste-demande-abonnement.component.html',
  styleUrls: ['./liste-demande-abonnement.component.css']
})
export class ListeDemandeAbonnementComponent implements OnInit {
  listDemandeabonement: any;

  constructor(private toastr: ToastrService , private currentRoute: ActivatedRoute, private http:HttpClient ) { }

  ngOnInit(): void {
    this.http.get('api/abonnement/showUserAbonnementDemande').subscribe(
      (data:any)=>{
        this.listDemandeabonement=data;
      }
    ) 
  }

}
