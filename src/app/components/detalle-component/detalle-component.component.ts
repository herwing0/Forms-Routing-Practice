import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/shared-services/http-service.service';

@Component({
  selector: 'app-detalle-component',
  templateUrl: './detalle-component.component.html',
  styleUrls: ['./detalle-component.component.css']
})
export class DetalleComponentComponent implements OnInit {

  productoDetalle: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private httpService: HttpServiceService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.productoDetalle = this.httpService.getProducto(params['id'])
      console.log(this.productoDetalle)
    })
  }

  ngOnInit(): void {
  }


}
