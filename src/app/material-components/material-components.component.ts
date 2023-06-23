import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';
import { DialogPanelComponent } from '../dialog-panel/dialog-panel.component';

@Component({
  selector: 'app-material-components',
  templateUrl: './material-components.component.html',
  styleUrls: ['./material-components.component.css']
})
export class MaterialComponentsComponent implements OnInit, OnDestroy {

    //badge
    notifications=0;

    //spinner
    showSpinner = false;
  
    loadData()
    {
      this.showSpinner=true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);
    }
  
    //sidenave
    opened = false;
  
    log(state: any)
    {
      console.log(state);
    }

    //tabs
    tabIndex:number=0;
    logChange(index:any)
    {
      this.tabIndex=index;
      console.log(index);
    }
    
    //select
    selectedValue:string;
    selectedValue2:string;
  
    //Autocomplete
    options: string[] = ['selva', 'suresh', 'anand', 'durga', 'raman', 'sharmi', 'wasim'];
   
    options2 = [
      {name : 'Angular'},
      {name : 'Angular Material'},
      {name : 'Angular Bootstrap'},
      {name : 'Angular Packages'}
    ];

    displayFn(subject:any)
    {
      return subject ? subject.name : undefined;
    }

    //filter the autocomplete
    mycontrol = new FormControl();
    filterOption: Observable<string[]>;

    
  ngOnInit(): void {
    console.log('Material OnInit called');
    this.filterOption = this.mycontrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnDestroy()
  {
    console.log('Material Destroy called');
  }

  private _filter(value:string) : string[]
  {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue));
  }

  //datepicker
  minDate = new Date();
  maxDate = new Date(2019, 3, 10);  //format should be -->year month date

  // dateFilter = date => {
  //   const day = date.getDay();
  //   return day !== 0 && day !==6;
  // }

  constructor(private snackBar: MatSnackBar, public dialog:MatDialog) { 
    console.log('Material constructor called');
  }
  //snackbar
  openSBar(message:any, action:any)
  {
    this.snackBar.open(message, action, {duration:2000});
  }

  deletOpt(message:any, action:any)
  {
    let snackBarRef = this.snackBar.open(message,action, {duration:2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed')
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action is was triggered ')
    });
  }

  openCustombar()
  {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration:2000});
  }

  //dialog
  openDialog()
  {
    let dialogRef = this.dialog.open(DialogPanelComponent, {data: {name: 'Selvakumar'}});
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }
}
