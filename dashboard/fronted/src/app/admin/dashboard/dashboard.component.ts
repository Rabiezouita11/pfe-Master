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
  dis : boolean = false;
  humiditySol :any;
  waterSensor :any;
  Capteurpluie: any;
  getCapteurCo2: any;
  getStatusmanuel: any;
  getEtatBattrie: any;
  getNpk :any;
  pompeTime: number = 0; 
  @ViewChild('inputManuel') inputManuel!: ElementRef;
  @ViewChild('inputAuto') inputAuto!: ElementRef;
  @ViewChild('inputOnmoteur') inputOnmoteur!: ElementRef;
  @ViewChild('inputOFFmoteur') inputOFFmoteur!: ElementRef;
  @ViewChild('inputOnled') inputOnled!: ElementRef;
  @ViewChild('inputOFFled') inputOFFled!: ElementRef;
  @ViewChild('inputOnpompe') inputOnpompe!: ElementRef;
  @ViewChild('inputOFFpompe') inputOFFpompe!: ElementRef;
  @ViewChild('inputOnventilateur') inputOnventilateur!: ElementRef;
  @ViewChild('inputOFFventilateur') inputOFFventilateur!: ElementRef;
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
      this.getWaterSensor();
      this.getCapteurpluie();
      this.getcapteurCo2();
      this.getstatusManuel();
      this.getetatBattrie(); 
      this.getNpkk();
      // get updated data every 5 seconds
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

MoteurOff() {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    moteur: this.inputOFFmoteur.nativeElement.value
  }
  this.http.put('api/changeEtatMoteur/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur 
  
  this.toastr.error('Moteur OFF', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


  

}

MoteurOn() {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    moteur: this.inputOnmoteur.nativeElement.value
  }
  this.http.put('api/changeEtatMoteur/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur 
  
  this.toastr.success('Moteur ON', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


}

LedOff () {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    led: this.inputOFFled.nativeElement.value
  }
  this.http.put('api/changeEtatled/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur

  this.toastr.error('Led OFF', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


}
LedOn () {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {

    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    led: this.inputOnled.nativeElement.value
  }
  this.http.put('api/changeEtatled/', manual).subscribe((response: any) => {
    // Handle response
  }
  );

  // show toast message for switching  Off moteur

  this.toastr.success('Led ON', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


}

PompeOff () {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    pompe: this.inputOFFpompe.nativeElement.value
  }
  this.http.put('api/changeEtatPompe/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur

  this.toastr.error('Pompe OFF', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


}


PompeOn() {
  // check if the pompeTime is greater than 0
  if (this.pompeTime > 0) {
    this.dis  = true;
    // show toast message for switching On pompe
    this.toastr.success('Pompe ON', 'Success', {
      timeOut: 5000,
      progressAnimation: 'increasing',
      progressBar: true,
      positionClass: 'toast-top-right',
    });

    const isOffline = this.data.some((item: any) => item.status === 'System shut down');
    if (isOffline) {
      // Display error message if system is shut down
      this.toastr.error('النظام حاليا غير متصل');
      return;
    }
    
    let manual = {
      pompe: this.inputOnpompe.nativeElement.value
    };

    this.http.put('api/changeEtatPompe/', manual).subscribe((response: any) => {
      // Handle response
    });

    // turn off the pump after the specified time
    setTimeout(() => {
      this.dis  = false;
      this.PompeOff();
    }, this.pompeTime * 60 * 1000); // convert minutes to milliseconds

  } else {
    // show error message if the pompeTime is not set
    this.toastr.error('الرجاء إدخال وقت عمل المضخة.    ');
  }
}

// PompeOn () {
//   const isOffline = this.data.some((item: any) => item.status === 'System shut down');
//   if (isOffline) {
//     // Display error message if system is shut down
//     this.toastr.error('النظام حاليا غير متصل');
//     return;
//   }
//   let manual = {
//     pompe: this.inputOnpompe.nativeElement.value
//   }

//   this.http.put('api/changeEtatPompe/', manual).subscribe((response: any) => {
//     // Handle response
//   }
//   );
//   // show toast message for switching  Off moteur

//   this.toastr.success('Pompe ON', 'Success',{
//     timeOut: 5000,
//     progressAnimation: 'increasing',
//     progressBar: true,
//     positionClass: 'toast-top-right',
//   });


// }
VentilateurOff () {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    ventilateur: this.inputOFFventilateur.nativeElement.value
  }
  this.http.put('api/changeEtatVentilateur/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur

  this.toastr.error('Ventilateur OFF', 'Success',{
    timeOut: 5000,
    progressAnimation: 'increasing',
    progressBar: true,
    positionClass: 'toast-top-right',
  });


}
VentilateurOn () {
  const isOffline = this.data.some((item: any) => item.status === 'System shut down');
  if (isOffline) {
    // Display error message if system is shut down
    this.toastr.error('النظام حاليا غير متصل');
    return;
  }
  let manual = {
    ventilateur: this.inputOnventilateur.nativeElement.value
  }
  this.http.put('api/changeEtatVentilateur/', manual).subscribe((response: any) => {
    // Handle response
  }
  );
  // show toast message for switching  Off moteur

  this.toastr.success('Ventilateur ON', 'Success',{
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
getCapteurpluie() {
  this.http.get('api/getCapteurpluie/').subscribe((response : any ) => {
    this.Capteurpluie = response;
  });


}
getcapteurCo2() {
  this.http.get('api/getCapteurCo2/').subscribe((response : any ) => {
    this.getCapteurCo2 = response;
  });


}
getstatusManuel() {
  this.http.get('api/getStatusmanual/').subscribe((response : any ) => {
    this.getStatusmanuel = response;
  });


}
getetatBattrie() {
  this.http.get('api/getEtatbattrie/').subscribe((response : any ) => {
    this.getEtatBattrie = response;
  });


}
getNpkk() {
  this.http.get('api/getNpk/').subscribe((response : any ) => {
    this.getNpk = response;
  });


}



}