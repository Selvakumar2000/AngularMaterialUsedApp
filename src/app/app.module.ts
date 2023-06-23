import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';
import { DialogPanelComponent } from './dialog-panel/dialog-panel.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ObservableComponent } from './observable/observable.component';
import { ToastrModule } from 'ngx-toastr';
import { MatStepperComponent } from './mat-stepper/matstepper.component';
import { AngularFormArrayComponent } from './angular-form-array/angular-form-array.component'
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponentsComponent,
    CustomSnackBarComponent,
    DialogPanelComponent,
    MatTableComponent,
    LifecycleComponent,
    ObservableComponent,
    MatStepperComponent,
    AngularFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    ToastrModule.forRoot(), // ToastrModule added
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
