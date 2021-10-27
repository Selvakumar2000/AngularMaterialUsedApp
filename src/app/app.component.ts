import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMaterialUsedApp';
 
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

  //accordian

  // openMep1:any = false;
  //  panelFocus = { };
  
  // openMep(isOpen:any)
  // {
  //   this.openMep1 = isOpen;
  //   this.panelFocus = {
  //     "box" : this.openMep1 
  //   }
  // }

  // closeMep(isOpen:any)
  // {
  //   this.openMep1 = isOpen;
  //   this.panelFocus = {
  //     "box" : this.openMep1 
  //   }
  // }

  //accordian pattern implementation
  step = 0;

  setStep(index: number) {
    this.step = index;
    
  }

  

    //radio button
    favoriteColor: string = 'blue';
    colors: string[] = ['blue', 'gray', 'tblue'];
    constructor() { }
  
    ngOnInit()
    {
     
    }
  //Reference --> https://stackoverflow.com/questions/54554380/checked-attribute-not-working-in-mat-radio-button
    radioChange(e:any)
    {
      console.log(this.favoriteColor);  
      this.setVisible(true);
    }

    closePan(state:any)
    {
      console.log(state);
     
    }

  panelFocus = { };
  setVisible(state:boolean)
  {
   

    if(this.favoriteColor === 'blue')
    {
      this.panelFocus = {
        "box" : state
      }

    }

    if(this.favoriteColor === 'gray')
    {
      this.panelFocus = {
        "box1" : state
      }

    }

    if(this.favoriteColor === 'tblue')
    {
      this.panelFocus = {
        "box2" : state
      }

      
    }
    
  }


}
