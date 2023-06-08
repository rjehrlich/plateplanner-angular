import { IngredientModel } from "./ingredient.model";

export interface IngredientQuantity extends IngredientModel {
    ingredientName: string; // Include the transient ingredientName property
    quantity: string;
}
