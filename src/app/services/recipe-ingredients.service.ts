import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeIngredientModel } from '../models/recipe-ingredient-model';
import { IngredientModel } from '../models/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // get recipe ingredients by recipe ID
  getRecipeIngredientsByRecipeId(recipeId: number): Observable<RecipeIngredientModel[]> {
    const url = `${this.apiUrl}/recipes/${recipeId}/ingredients`;
    return this.http.get<RecipeIngredientModel[]>(url);
  }

  // get recipe ingredients by ingredient ID
  getRecipeIngredientsByIngredientId(ingredientId: number): Observable<RecipeIngredientModel[]> {
    const url = `${this.apiUrl}/ingredients/${ingredientId}/recipes`;
    return this.http.get<RecipeIngredientModel[]>(url);
  }

  // get recipe ingredients by multiple recipe IDs
  getIngredientsForRecipeIds(recipeIds: number[]): Observable<IngredientModel[]>{
    const endUrl = `${this.apiUrl}/recipes/${recipeIds.join(',')}/ingredients`
    return this.http.get<IngredientModel[]>(endUrl)
  }

}
