import { Categorie } from "./categorie";

export class Product {
    id!: number;
    nom!: string;
    description!: string;
    prix!: number;
    categorie!: Categorie;
}
