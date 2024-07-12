import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AssetService {
    addAssetUrl = 'http://localhost:3000/asset';
    async addMyAsset(assetType:string,assetCode:string,assetAmount:number,assetBank:string){
        console.log(assetType,assetCode,assetAmount,assetBank)
        const data = await fetch(this.addAssetUrl);
        return await data.json() ?? {};
    }
}