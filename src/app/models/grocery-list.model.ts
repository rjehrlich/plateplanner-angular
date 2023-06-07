import { IngredientModel } from "./ingredient.model";

export interface GroceryListModel {
    id: number;
    ingredients: IngredientModel[];
}
