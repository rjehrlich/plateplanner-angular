import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  //api endpoint url for ingredients
  private apiUrl = 'http://localhost:8080/ingredients';

  constructor(private http: HttpClient) { }

  // getIngredients will return an observable of IngredientModel type to fetch all ingredients from apiUrl
  getIngredients(): Observable<IngredientModel[]> {
    return this.http.get<IngredientModel[]>(this.apiUrl);
  }

  // getIngredient will take an ingredientId type number and return an observable of IngredientModel type to fetch all ingredients from apiUrl
  getIngredient(ingredientId: number): Observable<IngredientModel> {
    // fetch specific ingredient by ingredientId
    const url = `${this.apiUrl}/${ingredientId}`;
    return this.http.get<IngredientModel>(url);
  }
}
