import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeIngredientModel } from 'src/app/models/recipe-ingredient-model';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit{
  recipeId!: number;
  recipe!: RecipeModel;
  recipeIngredients: RecipeIngredientModel[] = [];

  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private recipeIngredientsService: RecipeIngredientsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];

      // Fetch both recipe details and recipe ingredients
      this.getRecipeDetails();
      this.getRecipeIngredients();
    });
  }

  getRecipeDetails(): void {
    this.recipeService.getRecipe(this.recipeId).subscribe(
      (recipe: RecipeModel) => {
        this.recipe = recipe;
      },
      (error: any) => {
        console.log('An error occurred:', error);
      }
    );
  }

  getRecipeIngredients(): void {
    this.recipeIngredientsService
      .getRecipeIngredientsByRecipeId(this.recipeId)
      .subscribe(
        (ingredients: RecipeIngredientModel[]) => {
          this.recipeIngredients = ingredients;
        },
        (error: any) => {
          console.log('An error occurred:', error);
        }
      );
  }

  getIngredientName(ingredient: RecipeIngredientModel): string {
    return ingredient.ingredientName || '';
  }
  

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.recipeId = +params['recipeId']; // Get the recipeId from the URL parameter

  //     // Call a method to fetch the recipe details based on the recipeId
  //     this.getRecipeDetails();
  //     this.getRecipeIngredients();
  //   });
  // }

  // getRecipeDetails(): void {
  //   this.recipeService.getRecipe(this.recipeId).subscribe(
  //     (recipe: RecipeModel) => {
  //       this.recipe = recipe;
  //     },
  //     (error: any) => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }

  // getRecipeIngredients(): void {
  //   this.recipeIngredientsService.getRecipeIngredientsByRecipeId(this.recipeId).subscribe(
  //     (ingredients: RecipeIngredientModel[]) => {
  //       this.recipeIngredients = ingredients;
  //       this.fetchIngredientNames();
  //     },
  //     (error: any) => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }
  
  // fetchIngredientNames(): void {
  //   const ingredientIds = this.recipeIngredients.map(ingredient => ingredient.ingredient.id);
  //   this.recipeIngredientsService.getIngredientsForRecipeIds(ingredientIds).subscribe(
  //     (ingredients: RecipeIngredientModel[]) => {
  //       this.recipeIngredients.forEach(recipeIngredient => {
  //         const matchingIngredient = ingredients.find(
  //           ingredient => ingredient.id.ingredientId === recipeIngredient.ingredient.id
  //         );
  //         if (matchingIngredient) {
  //           recipeIngredient.ingredientName = matchingIngredient.ingredientName;
  //         }
  //       });
  //     },
  //     (error: any) => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }

  
}
