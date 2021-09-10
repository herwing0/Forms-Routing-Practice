import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/shared-services/http-service.service';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {

  constructor(private firstCall: HttpServiceService) { }

  ngOnInit(): void {
    this.firstCall.httpCall()
  }

}
