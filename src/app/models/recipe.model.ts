import { IngredientModel } from "./ingredient.model";

export interface RecipeModel {
    id: number;
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    instructions: string;
    sourceUrl: string;
    ingredients: IngredientModel[];
}
