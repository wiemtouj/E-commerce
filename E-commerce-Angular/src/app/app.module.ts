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
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategoriesComponent,
    ProduitFormComponent,
    CategorieFormComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // Add FormsModule here
    RouterModule // Importez RouterModule pour activer les fonctionnalités de routage


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
