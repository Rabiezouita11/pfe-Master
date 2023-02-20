import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  listCommande : any =   []   
  isOffline: boolean = false;
  data: any;
  constructor(private http:HttpClient, private router:Router ,  private toastr: ToastrService) { }

  updateStatus() {
    const now = new Date();
    let isAnyOffline: boolean = false;
    for (let item of this.data) {
      const time = new Date(item.time);
      const diff = now.getTime() - time.getTime();
      const seconds = Math.floor(diff / 1000);
      if (seconds > 15) {
        item.status = 'System shut down';
      }
      else  
      {
        item.status = 'System is running';
      }
    }
    if (isAnyOffline && !this.isOffline) {
      // System just went offline
      this.isOffline = true;
      this.toastr.error('النظام حاليا غير متصل');
    } else if (!isAnyOffline && this.isOffline) {
      // System just went online
      this.isOffline = false;
      this.toastr.success('النظام متصل حاليا');
    }
    // reassign the data array to trigger a change detection and update the table
    this.data = [...this.data];
  }




  ngOnInit(): void {
    this.getData(); // get initial data
    setInterval(() => {
      this.getData();
    // get updated data every 5 seconds
    }, 1000);
  }
  logout(): void {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, déconnecter!'
    }).then((result) => {
      if (result.isConfirmed) {



    this.http.post('/api/auth/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
      this.router.navigate(['/accueil']  ).then(() => {
        window.location.reload();
      }
      );


  }
});
}


getData() {
  this.http.get('api/getTime/').subscribe((response) => {
    if (Array.isArray(response)) {
      this.data = response;
     
    } else {
      this.data = Object.values(response);
    }
   // log the data to the console for debugging
    setInterval(() => this.updateStatus(), 1000); // call updateStatus() every second
  });
}


}
