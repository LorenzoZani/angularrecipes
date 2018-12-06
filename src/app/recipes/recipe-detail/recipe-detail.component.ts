import { Recipe } from "./../recipes-list/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRicetta: Recipe;

  constructor() {}

  ngOnInit() {}
}
