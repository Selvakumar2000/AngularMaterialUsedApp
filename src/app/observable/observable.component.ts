import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  intervalSubscription: Subscription;
  customIntervalSubscription: Subscription;
  routeSubscription: Subscription;
  source = interval(1000);
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
/*every 1second it emits value 0,1,2... 
if we move to other component(destroy the component) it won't stop incrementing and 
another interval created along with the old interval observable not depends on the
component. Untill we unsubscribed it it won't stop the incrementing process
*/
    this.intervalSubscription = this.source.subscribe(val => console.log(val)); 

    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log(params);
    })

    this.customIntervalSubscription = this.customObservable.subscribe((data:any) => {
      console.log('custom observable '+data);
    })

  }


  ngOnDestroy()
  {
    //when we move to another component, now the interval will be unsubscribed.
    this.intervalSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
    console.log('Observable Destroy called');
  }

  //custom observable
  customObservable = Observable.create((observer:any) => {
    let count = 0;
    setInterval(() => {
      observer.next();
      count++;
    }, 1000);
  });
    
}
