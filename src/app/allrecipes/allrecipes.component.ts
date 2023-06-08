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

  recipes!: RecipeModel[];

  constructor(private recipeService: RecipeService, private router: Router) { }

  // method to create an ingredient list from recipes selected by the user
  createGroceries(): void {
    // get all selected recipes
    const selectedRecipes = this.recipes
    .filter(recipe => recipe.selected);
    //console.log(selectedRecipes);

    // aggregate the ingredients from the selected recipes
    const ingredients: RecipeIngredientModel[] = [];
    //const ingredients: string[] = [];
      // loop through the selected recipes and the ingredients
    selectedRecipes.forEach((recipe) => {
      // for each recipeIngredient in recipeIngredients
      recipe.recipeIngredients.forEach((recipeIngredient) => {
        const ingredient: RecipeIngredientModel = {
          recipe: recipeIngredient.recipe,
          ingredient: recipeIngredient.ingredient,
          quantity: recipeIngredient.quantity,
        };
        // push the ingredients and quantity to the ingredients array
        ingredients.push(ingredient);
      });
    });
    // console.log(selectedRecipes);
    // console.log(ingredients);
    
    // then send the user to grocerylist page passing the ingredients information
    this.router.navigate(['grocery-list'], { queryParams: { ingredients: JSON.stringify(ingredients), } });
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
