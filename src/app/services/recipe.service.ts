import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //api endpoint url for recipes
  private apiUrl = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) { }

  // getRecipes will return an observable of RecipeModel type to fetch all recipes from apiUrl
  getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.apiUrl);
  }

  // getRecipe will take a recipeId type number and return an observable of RecipeModel type to fetch all recipes from apiUrl
  getRecipe(recipeId: number): Observable<RecipeModel> {
    // fetch specific recipe by recipeId
    const url = `${this.apiUrl}/${recipeId}`;
    return this.http.get<RecipeModel>(url);
  }
}
