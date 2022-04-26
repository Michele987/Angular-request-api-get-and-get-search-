import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  constructor(private http: HttpClient) { }


  ngOnInit():void{

  }

  apiKey:string = "LBCx1N4EsNKGtY4TEitraCAtyNLkaKJp"
  apiGetTrend:string = `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=30`
  apiGetId:string = `https://api.giphy.com/v1/gifs/`

  getData():Observable<any>{
    return this.http.get(this.apiGetTrend) // Prendere tutte le Gif e visualizzarle in una view
    
  }

  getDataParameters(gifId:string):Observable<any>{
    const apiKey:string = "LBCx1N4EsNKGtY4TEitraCAtyNLkaKJp";
    
    // let params = new HttpParams().set('giphy-detail',request);
    return this.http.get(this.apiGetId + gifId + `?api_key=${apiKey}`) // Prendere e visualizzare Dettaglio GIF

  }

  getDataSearch(text:string):Observable<any>{
    
    const apiKey:string = "LBCx1N4EsNKGtY4TEitraCAtyNLkaKJp";
    const apiGetSearch:string = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}&limit=10`;

    return this.http.get(apiGetSearch); // Estrarre gif a seconda dell'immisione testuale dell'utente
  
  }

  
}
