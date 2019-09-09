import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import ItemModel from 'src/app/models/item.model';

describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should return Observable ItemModel', () => {
      service.getData().subscribe(data => {
        expect(data instanceof ItemModel).toBeTruthy();
      });
    });
  });
});
