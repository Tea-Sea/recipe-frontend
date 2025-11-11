export interface IngredientType {
  id: number,
  label: string
}

export interface UnitType {
  id: number,
  label: string
}

export interface RecipeIngredientType {
  id: number,
  recipeID: number,
  ingredientID: number
  unitID?: number,
  amount: number,
  ingredient: IngredientType,
  unit: UnitType,
}

export interface InstructionType {
  id: number
  recipeID: number,
  stepNumber: number,
  stepText: string
  duration?: number,
  notes?: string
}

export interface RecipeType {
  id: number;
  name: string;
  difficulty: number;
  instructions: InstructionType[];
  ingredients: RecipeIngredientType[];
  userID: string;
}