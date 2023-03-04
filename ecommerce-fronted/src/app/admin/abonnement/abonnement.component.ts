import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
listabonement: any;

  constructor( private toastr: ToastrService , private currentRoute: ActivatedRoute, private http:HttpClient ) { }

  ngOnInit(): void {
    this.http.get('api/abonnement/afficherAllAbonnement').subscribe(
      (data:any)=>{
        this.listabonement=data;
      }
    )
  }

  delete(id :number) {
    // how confirm delete in angular 13 ? with sweetalert2  ?

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete('api/abonnement/deleteAbonnement' +'/'+id).subscribe(() => {
          this.ngOnInit();
          this.toastr.info('abonnement deleted successfully', 'abonnement deleted');
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        });
      }
    });
  }

}
