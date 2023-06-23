import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'AngularMaterialUsedApp';
 
  itemsPerSlide = 3;
 
  slides = [
    {image: '../../assets/img/batalogo.png', number: '1234', name: 'sk1'},
    {image: '../../assets/img/bg4.jpg', number: '1264', name: 'sk2'},
    {image: '../../assets/img/fashiondress.png', number: '1234', name: 'sk2'},
    {image: '../../assets/img/shoes.jpg', number: '1934', name: 'sk3'},
    {image: '../../assets/img/watches.jpg', number: '1334', name: 'sk4'},
    {image: '../../assets/img/bg4.jpg', number: '1238', name: 'sk5'},
    {image: '../../assets/img/fashiondress.png', number: '1234', name: 'sk5'},
    {image: '../../assets/img/watches.jpg', number: '1334', name: 'sk6'},
    {image: '../../assets/img/bg4.jpg', number: '1237', name: 'sk7'}
  ];
  //accordian expansion panel

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
  
   

    ngOnDestroy(){
      console.log('App OnDestroy called');
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

  //virtual scrolling
  numbers:Number[] = [];

  constructor(private toastr: ToastrService) { 
    console.log('App contructor called');
    for(let i = 0; i < 1000; i++)
    {
      this.numbers.push(i);
    }
  }

  
  //nglifecycle
  myname? = 'selvakumar';
  
  changeName()
  {
    this.myname='selva';
  }

  changeName1()
  {
    this.myname='selvak';
  }

  STUDENT_DATA: StudentData[] = [
    {id: 1, name: 'Selvakumar',department: 'EEE', college: 'TCE'},
    {id: 2, name: 'Wasim',department: 'Civil', college: 'MEPCO'},
    {id: 3, name: 'Surya',department: 'ECE', college: 'SIT'},
    {id: 4, name: 'Raahul',department: 'Mech', college: 'CIT'},
    // {id: 5, name: 'Mani',department: 'IT', college: 'TCE'},
    // {id: 6, name: 'Suresh',department: 'CSE', college: 'GCT'},
    // {id: 7, name: 'Anand',department: 'EEE', college: 'PSNA'},
    // {id: 8, name: 'Bharath',department: 'ECE', college: 'CIT'},
    // {id: 9, name: 'Saravana',department: 'IT', college: 'PSG'},
    // {id: 10, name: 'Vignesh',department: 'CSE', college: 'TCE'},
    // {id: 9, name: 'Vamsi',department: 'IT', college: 'PSG'},
    // {id: 10, name: 'Vijay',department: 'CSE', college: 'TCE'},
  ];
  totalLength = this.STUDENT_DATA.length;
  ngOnInit()
  {
    this.toastr.error('Welcome To My Application');
    console.log('App OnInit called');
    this.showItems();
  }
  
  showItems()
  { 
    if(this.totalLength > this.i)
    {
      this.i = 3;
    }
    let data = this.STUDENT_DATA.slice(this.i-3,this.i);
    this.students = data;
    console.log(this.students);
    this.i = this.i+3;
    console.log(this.i+ ' tot len '+this.totalLength);
  }
  students: any = [];
  i: number = 3;
}
export interface StudentData {
  id: number;
  name: string;
  department: string;
  college: string;
}


