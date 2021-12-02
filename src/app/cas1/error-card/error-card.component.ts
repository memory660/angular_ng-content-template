import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
})
export class ErrorCardComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() template: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
