import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  API_URL = 'http://localhost:8000/api/fighters';
  API_URL_UPDATE = 'http://localhost:8000/api/fighters/';

  ID_FIGHTER=0;


  constructor(private httpClient: HttpClient) { }


  getFighters(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }

  createFighter(fighterData: FormData): Observable<any> {
    return this.httpClient.post(this.API_URL, fighterData);
  }

  getFighter(fighterId: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL_UPDATE}${fighterId}`);
  }
  
  delFighter(fighterId: number): Observable<any>{
    return this.httpClient.delete(`${this.API_URL_UPDATE}${fighterId}`);
  }

  updateFighter(fighterId: number, fighterData: FormData): Observable<any> {
    return this.httpClient.put(`${this.API_URL_UPDATE}${fighterId}`, fighterData);
  }
  



}
