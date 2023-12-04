import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnDestroy, OnChanges{

  @Input()
  public price: number= 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit')

    this.interval$=interval(1000).subscribe( value => console.log(`Tick: ${value}`));


  }

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy')
    this.interval$?.unsubscribe();
  }


  ngOnChanges(changes:SimpleChanges):void{
    console.log({changes}),
    console.log('PriceComponent: ngOnChanges')
  }


}
