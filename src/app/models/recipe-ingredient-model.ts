import { IngredientModel } from "./ingredient.model";
import { RecipeModel } from "./recipe.model";

export interface RecipeIngredientModel {
    id: number;
    recipe: RecipeModel;
    ingredient: IngredientModel;
    quantity: string;
}
