import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengerArray : Array<Ipassenger> = [];
  chekedInCount !: number
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
    this.passengerArray = this._passengerService.getAllPAssengers();
    this.chekedInCount = this.passengerArray.filter(pass => pass.checkedIn).length
  }

  onRemoveUpdate(eve : any){
    this.chekedInCount = this.passengerArray.filter(pass => pass.checkedIn).length
  }

}
