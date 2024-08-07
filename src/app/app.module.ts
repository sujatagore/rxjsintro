import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentoneComponent } from './shared/component/componentone/componentone.component';
import { ComponenttwoComponent } from './shared/component/componenttwo/componenttwo.component';
import { ComponentthreeComponent } from './shared/component/componentthree/componentthree.component';
import { FormComponent } from './shared/component/form/form.component';
import { CardComponent } from './shared/component/products/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    ComponentoneComponent,
    ComponenttwoComponent,
    ComponentthreeComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
