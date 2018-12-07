import { RecipesService } from "./../../recipes.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  onSelectedList(recipe) {
    console.log("Elemento lista selezionato", recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor(public recipesService: RecipesService) {
    recipesService.newRecipes.subscribe(
      ricetteAggiornate => {
        console.log("Ricette aggiornate", ricetteAggiornate);
        this.recipes = ricetteAggiornate;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {}
}
