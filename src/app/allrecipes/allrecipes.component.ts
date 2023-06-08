import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedRecipeIds: number[] = [];

  recipes: RecipeModel[] = []
  ingredients: IngredientModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private recipeIngredientsService: RecipeIngredientsService,
    private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.getRecipes();
  }

  // method to get all recipies from the recipe service
  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });
  }

  // method to create an ingredient list from recipes selected by the user
  createGroceries(): void {
    const recipeIdsParam = this.selectedRecipeIds.join(',');
    this.router.navigate(['/grocery-list', { recipeIds: recipeIdsParam }]);
  }

  addSelections(recipeId: number): void {
    if (this.selectedRecipeIds.includes(recipeId)) {
      this.selectedRecipeIds = this.selectedRecipeIds.filter((id) => id !== recipeId);
    } else {
      this.selectedRecipeIds.push(recipeId);
    }
  }

}
