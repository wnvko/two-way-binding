import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Northwind } from '../static-data/northwind';
import { CategoriesType } from '../models/northwind/categories-type';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getData(tableName: string): Observable<CategoriesType[]> {
    return of(Northwind[tableName]);
  }
}
