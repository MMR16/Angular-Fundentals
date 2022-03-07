import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './layout/cards/cards.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductModule } from './Modules/product.module';
import { ProductRouteModule } from './Modules/product-route.module';
import { AppRouteModule } from './Modules/app-route.module';

@NgModule({
  // Which Components Belong To this Module - directives & pipes
  declarations: [
    AppComponent,
    WelcomeComponent,
    CardsComponent,
    FooterComponent
  ],
  // All External Modules that will be available to Components Belong To this Module
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ProductModule,
    ProductRouteModule,
    AppRouteModule
  ],
  providers: [],
  // Entry Point [startup component] must have the selector of index.html file whitch in AppComponent
  bootstrap: [AppComponent],
})
// Application Root
export class AppModule { }

//directive are custom HTML tags

//Structural Directives:
// Angular Builtin Directives to modify the structure or layout of the view
// by adding, removing or manipulate elements and their children
// Structural Directives start with *
// 1- *ngIf:
// 2- *ngFor:

//  Data Binding:
//one way binding from model to view:
//1- interpolation {{}} to property or class method return in component class
//2- property binding []  [src]='product.imageURL'
// <img src={{product.imageURL}}  == [src]='product.imageURL'
// if we use larger expression we use template expression src='product/img/{{product.imageURL}}' interpolation

//one way binding from view to model:
// 1- Event Binding ()  (click)='eventName()'

// 2 way binding
//ngmodel directive [(ngModel)]='listfilter'

//transforming data with pipes
// pipes |   price|currency

// Life Cycle Hooks
//1- onInit: Preform Component initialization & retrive data
//2- onChange: Preform action after change to input properties
//3- onDestroy: preform cleanup

// pipes
// ng g p pipename

// to pass data from parent to child (container to nested)
// create property as input in child class using @input() decorator
// use directive as tag on parent <></>
// use property binding to pass data to the child property which use @input()

// to pass data from child to parent
// we use events to pass data
// create property as output in child class using @output() decorator
// add function to emit event
// use directive as tag on parent <></>
// use event binding to property with decorator @output() at direvtive to call method at parent calss
// and pass data from child to parent using ($event) son the method get it as parameter & work with it

// use property binding to pass data to the child property which use @input()

// services:
// service used to share data between components that doesn't depend on one component
// service is aclass with decorator function @Injectable({ providedIn: 'root' })
// we can register services through application using root @Injectable({ providedIn: 'root' }) //singletone
// or old ways on module  providers: []
// we can register service to component & all childrens using   providers:[ProductService]
// in component class
// to inject service we do it like .net core by constructor then assign the value to private property
// in typescript we can use modifier [privat, public, protected] in constructor & use the service

// the best practice to get data from service after injection not constructor but in ngOnInit()

// HTTP
// 1- import HttpClientModule from '@angular/common/http'; at module
// 2- add it to imports
