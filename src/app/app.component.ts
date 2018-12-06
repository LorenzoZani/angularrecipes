import { Recipe } from "./recipes/recipes-list/recipe.model";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("Ricetta del nonno", recipe);
    this.selectedRecipe = recipe;
  }
}
