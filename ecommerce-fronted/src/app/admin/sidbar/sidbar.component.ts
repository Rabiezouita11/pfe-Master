import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketIOServiceService } from 'src/app/Service/SocketIOService/socket-ioservice.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  message: any;

  constructor(   private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
    private SocketIOServiceService : SocketIOServiceService) { }

  ngOnInit(): void {
    this.http.get('api/auth/getUser', { withCredentials: true }).subscribe(
      (res: any) => {
        this.message = res.role;
      },
    
    );
  }

}
