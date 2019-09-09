import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  name: string;
  type: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendFilters() {
    const params: Params = {};
    if (this.name) {
      params.name = this.name;
    }
    if (this.type) {
      params.type = this.type;
    }
    return this.router.navigate(['/main', params]);
  }

}
