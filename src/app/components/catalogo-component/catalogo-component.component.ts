import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/shared-services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-component',
  templateUrl: './catalogo-component.component.html',
  styleUrls: ['./catalogo-component.component.css']
})
export class CatalogoComponentComponent implements OnInit {
  productosResult : any =  [];
  data: any;
  url: string = "";

  constructor(private http: HttpServiceService,
              private router: Router) { }


  ngOnInit(): void {
    this.inicializar();
  }

  public inicializar (){
    this.data = this.http.httpCall()
    this.productosResult = this.http.productosResult
    this.router.navigate ( ['/catalogo'])
  }

  public redirectToProduct( id : number){
    this.router.navigate ( ['/detalles', id ])
   console.log(id)
  }

}
