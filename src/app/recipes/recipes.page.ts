import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  
  constructor(private recipesService: RecipesService) { }

  ionViewWillEnter() {this.recipes = this.recipesService.getAllRecipes();}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}


