import { RecipeModel } from './recipe.model';

export interface IngredientModel {
    id: number;
    name: string;
    recipes: RecipeModel[];
}
