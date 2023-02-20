import { Component, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';
import * as Chart from 'chart.js';


const SCRIPT_PATH_LIST =[
  "../../../assets/admin/js/jquery-3.3.1.min.js",


  "assets/admin/js/bootstrap.bundle.min.js",


  "assets/admin/js/icons/feather-icon/feather.min.js",
  "assets/admin/js/icons/feather-icon/feather-icon.js",


  "assets/admin/js/sidebar-menu.js",








  "assets/admin/js/lazysizes.min.js",

  "assets/admin/js/prism/prism.min.js",
  "assets/admin/js/clipboard/clipboard.min.js",
  "assets/admin/js/custom-card/custom-card.js",


  "assets/admin/js/counter/jquery.waypoints.min.js",
  "assets/admin/js/counter/jquery.counterup.min.js",
  "assets/admin/js/counter/counter-custom.js",


  "assets/admin/js/chart/peity-chart/peity.jquery.js",


  "https://cdn.jsdelivr.net/npm/apexcharts",


  "assets/admin/js/chart/sparkline/sparkline.js",





  "assets/admin/js/dashboard/default.js",


  "assets/admin/js/chat-menu.js",


  "assets/admin/js/height-equal.js",


  "assets/admin/js/lazysizes.min.js",


  "assets/admin/js/admin-script.js",
  ]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;
  temperatureAir: any;
  isOffline: boolean = false;
  // public barChartLabels= ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  // public barChartData = {data: [70,80,90], label: 'IMC'};

  constructor(
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
  ) {


  }


  updateStatus() {
    const now = new Date();
    let isAnyOffline: boolean = false;
    for (let item of this.data) {
      const time = new Date(item.time);
      const diff = now.getTime() - time.getTime();
      const seconds = Math.floor(diff / 1000);
      if (seconds > 10) {
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
      this.toastr.error('System is currently offline');
    } else if (!isAnyOffline && this.isOffline) {
      // System just went online
      this.isOffline = false;
      this.toastr.success('النظام متصل حاليا');
    }
    // reassign the data array to trigger a change detection and update the table
    this.data = [...this.data];
  }

  ngOnInit( ) {
    this.getData(); // get initial data
    setInterval(() => {
      this.getData();
      this.getTemperaturAir(); // get updated data every 5 seconds
    }, 1000);
 

   
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

getTemperaturAir() {
  this.http.get('api/getTemperatureAir/').subscribe((response : any ) => {
    this.temperatureAir = response;

   // log the data to the console for debugging
    // call updateStatus() every second
  });
}
switchMode() {
}
}