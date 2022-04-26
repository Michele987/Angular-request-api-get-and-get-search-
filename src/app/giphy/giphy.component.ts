import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../angularServices/service-data.service';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {

  constructor(private serviceData : ServiceDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  arrGiphy:any[] = [];

  getData(){
    this.serviceData.getData().subscribe( 
      (data) => {

      this.arrGiphy = data.data;

    }, (error) => {

    })
  }

 
}
