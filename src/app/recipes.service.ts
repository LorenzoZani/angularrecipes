import { Recipe } from "./recipes/recipes-list/recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  public recipes: Recipe[] = [];
  public selectedRecipe: Recipe = null;
  newRecipes = new EventEmitter<Recipe[]>();

  public changeSelectedRecipe(ricetta: Recipe) {
    console.log("change selected recipe", ricetta);
    this.selectedRecipe = ricetta;
  }

  public getRecipe() {
    return this.selectedRecipe;
  }

  searchRecipes(searchTerm: string = "cake") {
    const url_composta = this.URL + searchTerm;
    const response = this.http
      .get(url_composta)
      .toPromise()
      .then((resp: { meals: [] }) => {
        console.log("Ricette Ricevute", resp);
        this.recipes = resp.meals.map(function(meal: any) {
          console.log(meal);
          const myRecipe = new Recipe(
            meal.strMeal,
            meal.strInstruction,
            meal.strMealThumb
          );
          return myRecipe;
        });
        console.log("recipes mapped", this.recipes);

        this.newRecipes.emit(this.recipes);
      })
      .catch(err => {
        console.error("ERRORE!!!", err);
      });
  }

  constructor(private http: HttpClient) {}
}
