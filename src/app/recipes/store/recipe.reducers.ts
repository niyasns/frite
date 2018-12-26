import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';
import { Ingredient } from '../../shared/ingredient.model';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Biriyani',
      'Biryani,a mixed rice dish.',
      'https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 3),
        new Ingredient('Cashews', 20),
        new Ingredient('Kismis', 20),
        new Ingredient('Ghee', 10)
      ]
    ),
    new Recipe(
      'Kerala Sadhya',
      'Sadhya means banquet in Malayalam.',
      'https://3.imimg.com/data3/OE/SX/MY-10264161/kerala-sadhya-500x500.jpg',
      [
        new Ingredient('Rice', 3),
        new Ingredient('Yam', 1),
        new Ingredient('Pepper', 10),
        new Ingredient('Coconut Oil', 1),
        new Ingredient('Onion', 3)
      ]
    ),
    new Recipe(
      'Kabsa',
      'The dish is made with rice and meat. ',
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Kabsa.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 3),
        new Ingredient('Cloves', 5),
        new Ingredient('Cinnamon', 20),
        new Ingredient('Saffron', 10)
      ]
    )
  ]
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.RecipeActions
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = { ...recipe, ...action.payload.updatedRecipe };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
