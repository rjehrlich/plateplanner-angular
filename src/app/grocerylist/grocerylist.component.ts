import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';
import { RecipeIngredientModel } from '../models/recipe-ingredient-model';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  // declare ingredients array
  recipeIngredients: RecipeIngredientModel[] = [];

  // allow access to current route queries
  constructor(
    private route: ActivatedRoute,
    private recipeIngredientsService: RecipeIngredientsService) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const recipeIds: number[] = params['recipeIds'].split(',');
  
        this.recipeIngredientsService.getIngredientsForRecipeIds(recipeIds).subscribe(
          (ingredients: RecipeIngredientModel[]) => {
            this.recipeIngredients = ingredients;
            console.log(this.recipeIngredients);
          },
          (error: any) => {
            console.log('An error occurred:', error);
          }
        );
      });
    }
  
    getIngredientName(ingredient: RecipeIngredientModel): string {
      return ingredient.ingredientName;
    }
  
    getQuantityForRecipe(recipeId: number, ingredient: RecipeIngredientModel): string {
      const recipeIngredient = this.recipeIngredients.find(
        ri => ri.id.recipeId === recipeId && ri.ingredientName === ingredient.ingredientName
      );
  
      return recipeIngredient ? recipeIngredient.quantity : '';
    }
}
