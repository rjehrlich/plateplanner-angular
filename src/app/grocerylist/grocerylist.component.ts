import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientModel } from '../models/ingredient.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent  implements OnInit {
  // declare ingredients array
  recipeIngredients: string[] = [];

  // allow access to current route queries
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  grabRecipeTitles(): void {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const ingredientsParam = params['ingredients'];
      if (ingredientsParam) {
        this.recipeIngredients = ingredientsParam.split(',');
      }
    });
  }

}
