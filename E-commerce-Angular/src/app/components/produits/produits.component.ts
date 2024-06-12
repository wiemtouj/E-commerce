import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits!: Product[];
  categories: Categorie[] = [];

  constructor(private produitService: ProductService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
        this.produitService.getProductsByCategory(categoryId).subscribe((data: Product[]) => {
          this.produits = data;
        });
      
    });

 
  }

  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== id);
    });
  }

  

}
