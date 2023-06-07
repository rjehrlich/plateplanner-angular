import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { RecipedetailsComponent } from './allrecipes/recipedetails/recipedetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: AllrecipesComponent,
  },
  {
    path: 'recipes/:recipeId',
    component: RecipedetailsComponent,
  },
  {
    path: 'grocery-list',
    component: GrocerylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
