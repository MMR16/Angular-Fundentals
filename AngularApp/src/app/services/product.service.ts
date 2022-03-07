import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'https://localhost:7190/api/Products/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log(`all data ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.productUrl}searchById/${id}`).pipe(
      tap((data) => console.log(`all data ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getTopProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl + "top").pipe(
      tap((data) => console.log(`top 6 data ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Server returned code : ${err.status}, Error message is: ${err.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
