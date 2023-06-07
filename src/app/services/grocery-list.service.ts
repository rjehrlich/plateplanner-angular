import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryListModel } from '../models/grocery-list.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  constructor(private http: HttpClient) { }

  generateGroceryList(recipeIds: number[]): Observable<GroceryListModel> {
    return this.http.post<GroceryListModel>('/grocery-list', recipeIds);
  }
}
