import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Chicken', 2),
    new Ingredient('Cheese', 10),
    new Ingredient('Apple', 8),
    new Ingredient('Mango', 6),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
