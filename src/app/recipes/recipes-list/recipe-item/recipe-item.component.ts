import { Recipe } from "./../recipe.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRicetta: Recipe;

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  onSelectedItem() {
    console.log("Ricetta selezionata", this.currentRicetta);
    this.selectedRecipe.emit(this.currentRicetta);
  }

  constructor() {}

  ngOnInit() {}
}
