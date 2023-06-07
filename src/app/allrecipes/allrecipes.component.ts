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

  // method to create the grocery list from recipes selected by the user
  createGroceries(): void {
    // get recipeIds of selected recipes
    const selectedRecipes = this.recipes
    .filter(recipe => recipe.selected)
    .map(recipe => recipe.id);

    // then send the user to grocerylist page passing the recipeIds
    this.router.navigate(['/grocery-list'], { queryParams: { recipeIds: selectedRecipes.join(',') } });
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
