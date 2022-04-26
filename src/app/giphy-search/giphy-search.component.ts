import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../angularServices/service-data.service';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent implements OnInit {

  constructor(private serviceData: ServiceDataService) { }

  ngOnInit(): void {

  }

  gifSearchForName:any[] = [];


  getData(input:any){

    let textGif = ""
    textGif = input.value


    this.serviceData.getDataSearch(textGif).subscribe( (data) => {

      this.gifSearchForName = data.data

    }, (error) => {


    })



  }




}
