import { Component, ElementRef, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
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
  mode :any;
  humiditySol :any;
  waterSensor :any;
  @ViewChild('inputManuel') inputManuel!: ElementRef;
  @ViewChild('inputAuto') inputAuto!: ElementRef;
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

  ngOnInit( ) {
    this.getData(); // get initial data
    setInterval(() => {
      this.getData();
      this.getTemperaturAir();
      this.getMode();
      this.getHumidtySol();
      this.getWaterSensor(); // get updated data every 5 seconds
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

switchAutomatic () {
  // console.log('switch to auto ' +this.inputAuto.nativeElement.value);
  
  // Check if any devices are offline
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  
  let mode = {
    etat: this.inputAuto.nativeElement.value
  }
  
  this.http.put('api/changeMode/', mode).subscribe((response: any) => {
    // Handle response
  });
  
  // Toast message for switching to automatic mode
  this.toastr.success('تم تغيير الوضع الى وضع تلقائي','نجاح',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });
}












switchManuel () {
  // console.log('switch to auto ' +this.inputAuto.nativeElement.value);
  
  // Check if any devices are offline
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  
  let mode = {
    etat: this.inputManuel.nativeElement.value
  }
  
  this.http.put('api/changeMode/', mode).subscribe((response: any) => {
    // Handle response
  });
  
  // Toast message for switching to automatic mode
  this.toastr.success('تم تغيير الوضع الى وضع يدوي','نجاح',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });
}








getMode() {
  this.http.get('api/getMode/').subscribe((response : any ) => {
    this.mode = response;
  });

}
getHumidtySol() {
  this.http.get('api/getHumiditySol/').subscribe((response : any ) => {
    this.humiditySol = response;
  });
}
getWaterSensor() {
  this.http.get('api/getWaterSensor/').subscribe((response : any ) => {
    this.waterSensor = response;
  });

} 
}