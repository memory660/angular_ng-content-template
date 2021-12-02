import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorCardComponent } from './cas1/error-card/error-card.component';

import { ParentComponent } from './cas1/parent/parent.component';
import { Cas2Component } from './cas2/cas2/cas2.component';
import { AppChild1Component } from './cas2/components/app-child1/app-child1.component';
import { Child2Component } from './cas2/components/child2/child2.component';
import { MyCardComponent } from './cas2/components/my-card/my-card.component';
import { CardListComponent } from './cas2/components/card-list/card-list.component';

@NgModule({
  declarations: [AppComponent, ErrorCardComponent, ParentComponent, Cas2Component, AppChild1Component, Child2Component, MyCardComponent, CardListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
