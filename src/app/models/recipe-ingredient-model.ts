import { IngredientModel } from "./ingredient.model";
import { RecipeModel } from "./recipe.model";

export interface RecipeIngredientModel {
    id: {
        recipeId: number;
        ingredientId: number;
    };
    ingredientName: string; // Include the transient ingredientName property
    recipe: RecipeModel;
    ingredient: IngredientModel;
    quantity: string;
}
