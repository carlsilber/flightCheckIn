import { Component, OnInit } from '@angular/core';
import { CheckinService } from '../../services/checkin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {

  constructor(private service:CheckinService,private router:Router) { }

  ngOnInit() {
  }

  public onClick(id:number){
    this.service.getReservation(id).subscribe(res=>{
      console.log(this.service.reservationData)
      this.router.navigate(['/checkIn'])
    })
  }

}
