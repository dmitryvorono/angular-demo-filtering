import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { ResultComponent } from '../result/result.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: ResultComponent},
];
describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterComponent,
        ResultComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sendFilters', () => {
    it('should add params in url', (done) => {
      component.name = 'n1';
      component.type = 't1';
      component.sendFilters().then(() => {
        const router = fixture.debugElement.injector.get(Router);
        expect(router.url).toEqual('/main;name=n1;type=t1');
        done();
      });
    });
  });

});
