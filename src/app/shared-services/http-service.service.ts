import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  post: any;
  productosResult: [];
  public urls : Array<string> = new Array<string>();

  constructor(private http: HttpClient) { }

  public httpCall(){
    this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod#json')
    .subscribe( (post : any) => {
      this.post = post
      this.productosResult = post.results
    })
  }

  public getProducto(id: string){
    this.httpCall();
    return this.productosResult[id];
  }


}
