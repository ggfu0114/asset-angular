import { Injectable } from '@angular/core';
import { AssetCategory } from './assetcategory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Asset} from './asset'

@Injectable({
  providedIn: 'root'
})

export class AssetService {
  listAssetUrl = '/api/v1/assets';
  addAssetUrl = 'http://localhost:3000/asset';
  constructor( private http: HttpClient){}
  async addMyAsset(assetType: string, assetCode: string, assetAmount: number, assetBank: string) {
    console.log(assetType, assetCode, assetAmount, assetBank)
    const data = await fetch(this.addAssetUrl);
    return await data.json() ?? {};
  }
  listMyAsset(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.listAssetUrl)
    .pipe(
      tap(res => console.log('list assets',res)),
      catchError(this.handleError<Asset[]>('list assets'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      if (error.status === 401) {
        // Handle unauthorized error
        console.error('Unauthorized');
        window.location.replace('api/auth/oauth_login')
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}