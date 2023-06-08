import { IngredientModel } from "./ingredient.model";
import { RecipeModel } from "./recipe.model";

export interface RecipeIngredientModel {
    recipe: RecipeModel;
    ingredient: IngredientModel;
    quantity: string;
}
