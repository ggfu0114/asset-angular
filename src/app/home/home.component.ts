import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from '../asset/asset.component';
import { AssetCategory } from '../assetcategory';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink,RouterModule } from '@angular/router';


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
  myAssetCategory: AssetCategory[] = [{
    type: 'cash',
    value: 100,
    ratio: 25.5
  }, {
    type: 'stock',
    value: 200,
    ratio: 74.5
  }];
}
