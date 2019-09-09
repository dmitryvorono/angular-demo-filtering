import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { DataService } from 'src/app/services/data-service/data.service';
import {of} from 'rxjs';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  let dataServiceStub: Partial<DataService>;

  beforeEach(async(() => {
    dataServiceStub = {
      getData: jasmine.createSpy().and.returnValue( of([]) ),
    };

    TestBed.configureTestingModule({
      declarations: [
        ResultComponent
      ],
      providers: [
        {provide: DataService, useValue: dataServiceStub},
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
  });

});
