import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AppChild1Component } from '../components/app-child1/app-child1.component';
import { Child2Component } from '../components/child2/child2.component';

@Component({
  selector: 'app-cas2',
  templateUrl: './cas2.component.html',
  styleUrls: ['./cas2.component.scss'],
})
export class Cas2Component implements OnInit {
  @ViewChild(AppChild1Component, { static: false }) demo!: AppChild1Component;
  @ViewChild('confermbutton', { static: false }) confermButton!: ElementRef;
  //
  //
  name = 'Angular-ViewChildren';
  // Accessing multiple native DOM elements using QueryList
  @ViewChildren(Child2Component) children!: QueryList<Child2Component>;

  constructor() {}

  ngOnInit(): void {}

  /*
  ngAfterViewInit : après qu'Angular ait complètement initialisé les vues d'un composant.
  */
  ngAfterViewInit() {
    console.log('cas2', 'Hello ViewChild' + this.demo.componentName); // output "DEMO-CHILD"
    console.log('cas2', 'button', this.confermButton.nativeElement);
    //
    //
    console.log('cas2', 'Hello ViewChildren', this.children);
  }
}
