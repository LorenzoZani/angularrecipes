import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Patate riso e cozze",
      "Lorem ipsum",
      "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/tiella-di-riso-patate-e-cozze.jpg"
    ),
    new Recipe(
      "Carbonara",
      "Ipsum lorem",
      "https://cc-media-foxit.fichub.com/image/fox-it-life/3632f012-c656-4010-bb31-4d2c379aef5d/spaghetti-carbonara-1200x630.jpg"
    ),
    new Recipe(
      "Diavola",
      "Lorem Pizza",
      "http://www.planetpizzaal.it/castelletto/wp-content/uploads/pizza-diavola.jpg"
    ),
    new Recipe(
      "Pollo arrosto",
      "Lorem pollo",
      "https://www.salepepe.it/files/2017/03/POLLO-ARROSTO.jpg"
    )
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  onSelectedList(recipe) {
    console.log("Elemento lista selezionato", recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
