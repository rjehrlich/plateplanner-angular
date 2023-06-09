import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeIngredientModel } from 'src/app/models/recipe-ingredient-model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit{
  recipeId!: number;
  recipe!: RecipeModel;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = +params['recipeId']; // Get the recipeId from the URL parameter

      // Call a method to fetch the recipe details based on the recipeId
      this.getRecipeDetails();
    });
  }

  getRecipeDetails(): void {
    this.recipeService.getRecipe(this.recipeId).subscribe(
      (recipe: RecipeModel) => {
        this.recipe = recipe;

        // Assign ingredient names to recipe.recipeIngredients
        this.recipe.recipeIngredients.forEach((ingredient: RecipeIngredientModel) => {
          ingredient.ingredientName = ingredient.ingredient.name;
        });
      },
      (error: any) => {
        console.log('An error occurred:', error);
      }
    );
  }
  
}
