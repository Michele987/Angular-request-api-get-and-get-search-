import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../angularServices/service-data.service';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-giphy-detail',
  templateUrl: './giphy-detail.component.html',
  styleUrls: ['./giphy-detail.component.scss']
})
export class GiphyDetailComponent implements OnInit {

  constructor(private serviceData: ServiceDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

   this.idGif = this.route.snapshot.params['id']

   this.getData(this.idGif)

  }

  arrDetailGif:any = []

  idGif:string = "";

  getData(request:string){

    return this.serviceData.getDataParameters(request).subscribe( (data) =>  {
      
      this.arrDetailGif = data.data

    }, (error) => {
      
    })

  }

}
