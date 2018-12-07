import { RecipesService } from "./recipes.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
import { LikeComponent } from "./like/like.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesListComponent,
    RecipeItemComponent,
    LikeComponent,
    RecipeDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
