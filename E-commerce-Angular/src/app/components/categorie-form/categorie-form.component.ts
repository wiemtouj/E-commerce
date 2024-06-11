import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  categorie: Categorie = new Categorie();

  constructor(private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCategorie(): void {
    if (this.categorie.id) {
      this.categorieService.updateCategorie(this.categorie).subscribe(() => {
      });
    } else {
      this.categorieService.createCategorie(this.categorie).subscribe(() => {
        this.router.navigate(['/categorie']);
      });
    }
  }

}
