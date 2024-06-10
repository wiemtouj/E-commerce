import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Product } from 'src/app/models/product';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {

  produit: Product = new Product();
  categories!: Categorie[];

  constructor(private produitService: ProductService,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(data => {
      this.categories = data;
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.produitService.getProduitById(+id).subscribe(data => {
        this.produit = data;
      });
    }
  }

  saveProduit(): void {
    if (this.produit.id) {
      this.produitService.updateProduit(this.produit).subscribe(() => {
        this.router.navigate(['/produits']);
      });
    } else {
      this.produitService.createProduit(this.produit).subscribe(() => {
        this.router.navigate(['/produits']);
      });
    }
  }





}
