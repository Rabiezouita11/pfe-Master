import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketIOServiceService } from 'src/app/Service/SocketIOService/socket-ioservice.service';

@Component({
  selector: 'app-etat-de-serre',
  templateUrl: './etat-de-serre.component.html',
  styleUrls: ['./etat-de-serre.component.css']
})
export class EtatDeSerreComponent implements OnInit {
  data: any;
  constructor(
    private SocketIOServiceService: SocketIOServiceService,
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  updateStatus() {
    const now = new Date();
    for (let item of this.data) {
      const time = new Date(item.time);
      const diff = now.getTime() - time.getTime();
      const seconds = Math.floor(diff / 1000);
      if (seconds > 5) {
        item.status = 'System shut down';
      }
      else  
      {
        item.status = 'System is running';
      }
    }
    // reassign the data array to trigger a change detection and update the table
    this.data = [...this.data];
  }
  
  ngOnInit(): void {
    this.getData(); // get initial data
  setInterval(() => {
    this.getData(); // get updated data every 5 seconds
  }, 5000);
  }

 getData() {
  this.http.get('api/getData').subscribe((response) => {
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
