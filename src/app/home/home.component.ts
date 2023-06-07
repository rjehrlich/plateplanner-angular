import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes!: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  grabRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => {
        // assign the recipe to the recipe property
        this.recipes = recipes;
      });
  }

  ngOnInit(): void {
    this.grabRecipes();
  }

}
