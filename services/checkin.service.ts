import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  reservationUrl:string = "http://localhost:8080/flightservices/reservations/";
  reservationData:any;
  constructor(private http:Http) { }

  public getReservation(id:number):any{
    return this.http.get(this.reservationUrl+id).pipe(
      map(response=>{
        this.reservationData = response.json();
      })
    )
  }

  public checkin(checkInRequest):any{
    return this.http.put(this.reservationUrl,checkInRequest).pipe(
      map(response=>{
        return response.json();
      })
    )
  }
}
