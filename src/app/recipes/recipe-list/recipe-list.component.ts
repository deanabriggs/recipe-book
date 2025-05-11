import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg')
  ];
  
}
