import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) {}

  getShoppingList(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      catchError(error => {
        console.error('Erro ao carregar a lista de compras', error);
        return throwError('Erro ao carregar a lista de compras; tente novamente mais tarde.');
      })
    );
  }

  addShoppingItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  deleteShoppingItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateShoppingItem(item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${item.id}`, item);
  }
}
