import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  // Você pode adicionar a lógica e os dados do seu componente aqui
  shoppingItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' }
  ];
}
