import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { DataService } from 'src/app/services/data-service/data.service';
import {of, from} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import ItemModel from 'src/app/models/item.model';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  let dataServiceStub: Partial<DataService>;
  const activatedRouteStub = {
    params: of({
      name: 'n1',
      type: 't1',
    }),
  };
  const testData: ItemModel[] = [
    Object.assign(new ItemModel(), {name: 'n1', type: 't1'}),
    Object.assign(new ItemModel(), {name: 'n2', type: 't2'}),
  ];
  beforeEach(async(() => {
    dataServiceStub = {
      getData: jasmine.createSpy().and.returnValue( from(testData) ),
    };

    TestBed.configureTestingModule({
      declarations: [
        ResultComponent,
        FilterComponent,
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        {provide: DataService, useValue: dataServiceStub},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should fetch data', () => {
      spyOn(component, 'fetchData');
      component.ngOnInit();
      expect(component.fetchData).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('should call getData from service', () => {
      component.fetchData();
      const service = fixture.debugElement.injector.get(DataService);
      expect(service.getData).toHaveBeenCalled();
    });

    it('should set filteringData', () => {
      component.fetchData();
      expect(component.filteringData).toEqual([testData[0]]);
    });

  });

});
