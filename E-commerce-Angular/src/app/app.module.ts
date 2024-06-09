import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './components/produits/produits.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategoriesComponent,
    ProduitFormComponent,
    CategorieFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule // Add FormsModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
