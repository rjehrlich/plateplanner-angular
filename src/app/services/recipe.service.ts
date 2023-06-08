// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { RecipeModel } from '../models/recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeService {

//   //api endpoint url for recipes
//   private apiUrl = 'http://localhost:8080/recipes';

//   constructor(private http: HttpClient) { }

//   // getRecipes will return an observable of RecipeModel type to fetch all recipes from apiUrl
//   getRecipes(): Observable<RecipeModel[]> {
//     return this.http.get<RecipeModel[]>(this.apiUrl);
//   }

//   // getRecipe will take a recipeId type number and return an observable of RecipeModel type to fetch all recipes from apiUrl
//   getRecipe(recipeId: number): Observable<RecipeModel> {
//     // fetch specific recipe by recipeId
//     const url = `${this.apiUrl}/${recipeId}`;
//     return this.http.get<RecipeModel>(url);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { RecipeModel } from '../models/recipe.model';
import { RecipeIngredientModel } from '../models/recipe-ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // API endpoint URL for recipes
  private apiUrl = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) { }

  // getRecipes will return an observable of RecipeModel type to fetch all recipes with their recipe ingredients
  getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.apiUrl).pipe(
      mergeMap((recipes: RecipeModel[]) => {
        // Extract the recipe IDs
        const recipeIds = recipes.map(recipe => recipe.id);
        // Fetch the recipe ingredients for each recipe
        const recipeIngredientsRequests = recipeIds.map(recipeId => {
          const url = `${this.apiUrl}/${recipeId}/ingredients`;
          return this.http.get<RecipeIngredientModel[]>(url);
        });
        // Combine the results of the recipe ingredients requests
        return forkJoin(recipeIngredientsRequests).pipe(
          map(recipeIngredients => {
            // Assign the recipe ingredients to their respective recipes
            for (let i = 0; i < recipeIngredients.length; i++) {
              recipes[i].recipeIngredients = recipeIngredients[i];
            }
            return recipes;
          })
        );
      })
    );
  }

  // getRecipe will take a recipeId type number and return an observable of RecipeModel type to fetch a specific recipe with its recipe ingredients
  getRecipe(recipeId: number): Observable<RecipeModel> {
    const url = `${this.apiUrl}/${recipeId}`;
    return this.http.get<RecipeModel>(url).pipe(
      mergeMap((recipe: RecipeModel) => {
        const recipeIngredientsUrl = `${this.apiUrl}/${recipeId}/ingredients`;
        return this.http.get<RecipeIngredientModel[]>(recipeIngredientsUrl).pipe(
          map(recipeIngredients => {
            recipe.recipeIngredients = recipeIngredients;
            return recipe;
          })
        );
      })
    );
  }
}

