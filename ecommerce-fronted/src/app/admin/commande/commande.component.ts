import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/Service/Commande/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes: any[]=[];
  commandeId!: number;
  constructor(private commandeService: CommandeService, private toastr: ToastrService) { }


  ngOnInit() {
    this.getCommandes();
  }
 getCommandes() {
    this.commandeService.getCommandes()
      .subscribe(
        (data) => {
          this.commandes = data;
          console.log(this.commandes);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  retriveId (id: number) {
    this.commandeId = id;
    

  }
 

  updateRefuser (){

    this.commandeService.rejectCommande(this.commandeId).subscribe(
      (data:any) => {

        this.toastr.success('Commande refusé', 'Commande');
        this.getCommandes();
      }
    );


  }
  updateAccepter (){
    this.commandeService.acceptCommande(this.commandeId).subscribe(
      (data:any) => {

        this.toastr.success('Commande accepté', 'Commande');
        this.getCommandes();
      }
    );



  }
}