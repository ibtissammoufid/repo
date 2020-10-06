import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[]=[
    {
      id : 'r1',
      title : 'Schnitzel',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/120px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients : ['French Fries', 'pork meat', 'salade']
    },
    {
      id : 'r2',
      title : 'Spaghetti',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/120px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients : ['French Fries', 'pork meat', 'salade']
    }
  ];

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
      return recipe.id === recipeId;
    })};
  }

  deletRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id != recipeId;
    });
  }

  constructor() { }
}
