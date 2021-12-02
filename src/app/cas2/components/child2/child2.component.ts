import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
