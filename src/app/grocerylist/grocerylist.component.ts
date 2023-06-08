import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientModel } from '../models/ingredient.model';
import { RecipeService } from '../services/recipe.service';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent  implements OnInit {
  // declare ingredients array
  recipeIngredients: IngredientModel[] = [];

  // allow access to current route queries
  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private recipeIngredientsService: RecipeIngredientsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeIds: number[] = params['recipeIds'].split(',');
  
      this.recipeIngredientsService.getIngredientsForRecipeIds(recipeIds)
        .subscribe(
          (ingredients: IngredientModel[]) => {
            this.recipeIngredients = ingredients;
          },
          (error: any) => {
            console.log('An error occurred:', error);
          }
        );
    });
  }

}
