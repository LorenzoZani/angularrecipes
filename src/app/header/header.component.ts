import { RecipesService } from "./../recipes.service";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  searchTerm = new FormControl("cake");
  constructor(private service: RecipesService) {}

  submitSearch() {
    this.service.searchRecipes(this.searchTerm.value);
  }
  ngOnInit() {}
}
