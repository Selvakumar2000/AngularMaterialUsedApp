import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: MatTableComponent
  },
  {
    path: 'table',
    component: MatTableComponent
  },
  {
    path: 'table/material',
    component: MaterialComponentsComponent
  },
  {
    path: ':observable',
    component: ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
