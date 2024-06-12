import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(private categoryService: CategorieService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Categorie[]) => {
      this.categories = data;
    });
  }

}
