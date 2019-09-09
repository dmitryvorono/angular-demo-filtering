import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
import ItemModel from 'src/app/models/item.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  filteringData: ItemModel[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(data => {
      this.filteringData = data;
    });
  }

}
