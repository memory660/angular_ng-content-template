import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child1',
  templateUrl: './app-child1.component.html',
  styleUrls: ['./app-child1.component.scss'],
})
export class AppChild1Component implements OnInit {
  @Input() componentName!: string;

  constructor() {}

  ngOnInit(): void {}
}
