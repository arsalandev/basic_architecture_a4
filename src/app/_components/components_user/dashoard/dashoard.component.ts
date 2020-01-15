import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../_utilities/app-config';
import { ApiRequestService } from '../../../_services/api-request.service';
import * as _ from 'lodash';
import { GenerateGraph } from '../../../_utilities/GenerateGraph';
import { MaterializeAction } from 'angular2-materialize';
declare var $: any;
declare var Materialize: any;


@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent implements OnInit {


  constructor(private apirequest: ApiRequestService) { }

  ngOnInit() {  }
}
