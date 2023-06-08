import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../models/recipe.model';
import { Router } from '@angular/router';
import { RecipeIngredientModel } from '../models/recipe-ingredient-model';

@Component({
  selector: 'app-allrecipes',
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css']
})
export class AllrecipesComponent implements OnInit {

  recipes: RecipeModel[] = [];
  recipeIngredients: string[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  // method to create an ingredient list from recipes selected by the user
  createGroceries(): void {
    // get all selected recipes
    const selectedRecipes = this.recipes
    .filter(recipe => recipe.selected);
    //console.log(selectedRecipes);

   // collect the recipe ingredients' names
   this.recipeIngredients = selectedRecipes.flatMap(recipe =>
    recipe.recipeIngredients.map(recipeIngredient => recipeIngredient.ingredient.name)
  );

  // then send the user to the grocery-list page passing the ingredients information
  this.router.navigate(['grocery-list'], { queryParams: { ingredients: this.recipeIngredients.join(',') } });
    
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
