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
  Accepter(id:number, id_user:number){
    this.http.put('api/abonnement/UpdateStatusAccepterAbonnement/'+id,{id_user}).subscribe(
      (data:any)=>{
        this.toastr.success('Demande acceptée avec succès');
        this.ngOnInit();
      }
    )

  }
  Refuser(id:number, id_user:number){
    this.http.put('api/abonnement/UpdateStatusRefuserAbonnement/'+id,{id_user}).subscribe(
      (data:any)=>{
        this.toastr.success('Demande refusée avec succès');
        this.ngOnInit();
      }
    )


  
  }

}



