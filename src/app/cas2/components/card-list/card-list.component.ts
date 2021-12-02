import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @ViewChild('header') headerContent!: ElementRef;
  @ContentChild('footer') footerContent!: ElementRef;

  constructor(private renderor: Renderer2) {}

  ngOnInit(): void {}

  /*

  */
  ngAfterViewInit() {
    this.renderor.setStyle(this.headerContent.nativeElement, 'color', 'red');
    this.renderor.setStyle(
      this.headerContent.nativeElement,
      'font-size',
      '30px'
    );
  }

  /*
  ngAfterContentInit : Nous utilisons également le hook AfterContentInit. Par conséquent, l'élément headerContent est disponible pour être utilisé seulement après le hook AfterContentInit
  */
  ngAfterContentInit() {
    this.renderor.setStyle(this.footerContent.nativeElement, 'color', 'green');
  }
}
