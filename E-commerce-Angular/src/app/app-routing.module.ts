import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent },
 // { path: '', redirectTo: '/produits', pathMatch: 'full' }, // Redirection vers 'produits' par défaut
  //{ path: '**', redirectTo: '/produits' } // Redirection pour les chemins non trouvés
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ]
})
export class AppRoutingModule { }
