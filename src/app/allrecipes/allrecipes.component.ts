import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';
import { IngredientModel } from '../models/ingredient.model';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-allrecipes',
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css']
})
export class AllrecipesComponent implements OnInit {
  // declare variable to store recipeIds array
  recipeIds: number[] = [];

  recipes: RecipeModel[] = []
  ingredients: IngredientModel[] = [];

  constructor(
    private router: Router, 
    private recipeIngredientsService: RecipeIngredientsService,
    private recipeService: RecipeService) { }

  // method to create an ingredient list from recipes selected by the user
  createGroceries(): void {
    this.recipeIngredientsService.getIngredientsForRecipeIds(this.recipeIds)
      .subscribe(
        (ingredients: IngredientModel[]) => {
          this.ingredients = ingredients;
          console.log(this.ingredients); // Do something with the ingredients
        },
        (error: any) => {
          console.log('An error occurred:', error);
        }
      );
  }


  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
