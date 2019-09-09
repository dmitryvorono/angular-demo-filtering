import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
import ItemModel from 'src/app/models/item.model';
import { Params, ActivatedRoute } from '@angular/router';
import { OperatorFunction, Observable } from 'rxjs';
import {filter, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  filteringData: ItemModel[] = [];

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  _makeFiltersFunctions(routeParams: Params): OperatorFunction<{}, {}>[] {
    let filterFunctions = Object.keys(routeParams).map(key => {
      return filter((item) => {
        return item[key].toLowerCase().startsWith(routeParams[key].toLowerCase());
      });
    });
    filterFunctions.push(toArray());
    return filterFunctions;
  }

  fetchData() {
    this.activatedRoute.params.subscribe(routeParams => {
      const result = this._makeFiltersFunctions(routeParams)
      .reduce((ob: Observable<any>, op: OperatorFunction<{}, {}>) => ob.pipe(op), this.dataService.getData());
      result.subscribe(data => {
        this.filteringData = data;
      });
    });
  }

}
