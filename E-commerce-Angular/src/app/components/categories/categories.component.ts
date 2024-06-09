import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: Categorie[];
  
  constructor(private categorieService: CategorieService) { }


  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  deleteCategorie(id: number): void {
    this.categorieService.deleteCategorie(id).subscribe(() => {
      this.categories = this.categories.filter(categorie => categorie.id !== id);
    });
  }

}
