import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://localhost:3000/commandeAdmin/affichercommande';
  private CommandeStatusUrl = 'http://localhost:3000/commandeAdmin';

  constructor(private http: HttpClient) { }

  getCommandes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  acceptCommande(id: number): Observable<any> {
    const url = `${this.CommandeStatusUrl}/accepterCommande/${id}`;
    return this.http.put(url, null);
  }

  rejectCommande(id: number): Observable<any> {
    const url = `${this.CommandeStatusUrl}/refuserCommande/${id}`;
    return this.http.put(url, null);
  }
}
