import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeIngredientModel } from '../models/recipe-ingredient-model';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent  implements OnInit {
  // declare ingredients array with value of RecipeIngredientModel array
  ingredients: IngredientModel[] = [];

  // allow access to current route queries
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // subscribe to query observable that activateroute gives
    this.route.queryParamMap.subscribe(params => {
      // get that value of ingredients query parameter and assign to a variable
      const ingredientNames = params.get('ingredients');
        // if there are ingredients, then parse them as RecipeIngredientModel type
        if (ingredientNames) {
          console.log(ingredientNames)
          this.ingredients = JSON.parse(ingredientNames) as IngredientModel[];
          console.log(this.ingredients)
        }
    });
  }

}
