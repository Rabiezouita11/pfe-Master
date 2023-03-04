import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptService } from 'ngx-captcha';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitter';
import { SocketIOServiceService } from 'src/app/Service/SocketIOService/socket-ioservice.service';

@Component({
  selector: 'app-single-page-abonnement',
  templateUrl: './single-page-abonnement.component.html',
  styleUrls: ['./single-page-abonnement.component.css']
})
export class SinglePageAbonnementComponent implements OnInit {
  public route: any = '';
  message: any;
  idAbonnment: any;
  id: any;
  nom: any;
  prix: any;
  image: any;
  description: any;
  constructor(    private ScriptServiceService: ScriptService,
    private _router: Router,
    private renderer: Renderer2,

    private toastr: ToastrService,
    private http: HttpClient,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private SocketIOServiceService: SocketIOServiceService) { 
      this.route = this._router.url;
    }

  ngOnInit(): void {
    const id = this.currentRoute.snapshot.paramMap.get('id');

    this.http.get('api/auth/getUser', { withCredentials: true }).subscribe(
      (res: any) => {
        let str = 'http://localhost:4200/' + 'api' + '/' + res.image;
        this.message = res.id;
        this.id = res.id;
        // this.message = `${this.api+res.image}`;
        // how show image in toast angular 13 ?

        Emitters.authEmitter.emit(true);
      },
      (err) => {
        Emitters.authEmitter.emit(false);
      }
    );
    this.http
      .get('api/abonnement/afficherAbonnement/' + id)
      .subscribe((data: any) => {
        this.idAbonnment = data.id;
        this.nom = data.nom;
        this.prix = data.Prix;
        this.image = data.image;
        this.description = data.description;
      });
  }
  Demande(id_user :number , id_abonnement : number) {
    if (id_user == null) {
      this.toastr.error(
        'Vous devez vous connecter pour ajouter au panier',
        'Erreur',
        {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
      this._router.navigate(['/login']);
    }

    this.http.post('api/abonnement/ajouterIduserandidabonnement', { id_user: id_user, id_abonnement: id_abonnement }).subscribe((reponse: any) => {

      this.toastr.success(
        'Votre demande a été envoyé avec succès',
        'Demande',
        {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
  
    }, 
    (err : any) => {
      this.toastr.error(
        'Vous avez déjà demandé cet abonnement',
        'Erreur',
        {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
      
    }
    );



    
}
}


