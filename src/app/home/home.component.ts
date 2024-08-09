import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from '../asset/asset.component';
import { AssetCategory } from '../assetcategory';
import { MatIconModule } from '@angular/material/icon';
import { Asset } from '../asset'
import { RouterLink, RouterModule } from '@angular/router';
import { AssetService } from '../asset.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AssetComponent,
    MatIconModule,
    RouterModule
  ],
  template: `
    <section class="assets">
      <button class="fab-button" [routerLink]="['add']">
      <mat-icon color = "primary">add</mat-icon>
      </button> 
      <my-asset *ngFor="let myAsset of myAssetCategory"
      [myAsset]=myAsset></my-asset>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  assetService = inject(AssetService);
  myAssetCategory: Asset[] = []
  constructor() {
    this.assetService.listMyAsset()
      .subscribe(assets => this.myAssetCategory = assets)
  }
}
