import { IngredientModel } from "./ingredient.model";

export interface RecipeModel {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    instructions: string;
    sourceUrl: string;
    ingredients: IngredientModel[];
    selected: boolean; // Added property to handle checkbox selection
}
