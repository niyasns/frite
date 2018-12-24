import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
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
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
