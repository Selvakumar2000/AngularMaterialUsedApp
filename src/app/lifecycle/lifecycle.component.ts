import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked{

  @Input() name: any;
  constructor() {
    console.log('lifecycle constructor called');
   }

  ngOnInit(): void {  //called after a constructor
    console.log('lifecycle ngOnInit called');
  }
//it executed before ng onOnInit and if a component have input property and its value(only for new) changed
  ngOnChanges(changes:SimpleChanges)  
  {
    console.log('lifecycle ngOnChanges called ' + changes);
  }
 
  ngDoCheck()   //executes any small changes occurs in a component
  {
    console.log('lifecycle ngDoCheck called');
  }

  ngAfterContentInit()
  {
    console.log('lifecycle ngAfterContentInit called');
  }

  ngAfterContentChecked()
  {
    console.log('lifecycle ngAfterContentChecked called');
  }

  ngAfterViewInit()
  {
    console.log('lifecycle ngAfterViewInit called');
  }

  ngAfterViewChecked()
  {
    console.log('lifecycle ngAfterViewChecked called');
  }
}
