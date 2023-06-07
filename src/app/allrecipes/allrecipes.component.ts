import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../models/recipe.model';
import { Router } from '@angular/router';

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

    // aggregate the ingredients from the selected recipes
    const ingredients: string[] = [];
      // loop through the selected recipes and the ingredients
    selectedRecipes.forEach(recipe => {
      // for each extract the name
      recipe.ingredients.forEach(ingredient => {
        // push the ingredient name to the ingredients array
        ingredients.push(ingredient.name);
      });
    });

    // then send the user to grocerylist page passing the ingredients information
    this.router.navigate(['/grocery-list'], { queryParams: { ingredients: ingredients.join(',') } });
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
