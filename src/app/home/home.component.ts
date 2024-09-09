import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from '../asset/asset.component';
import { AssetCategory } from '../assetcategory';
import { MatIconModule } from '@angular/material/icon';
import { Asset } from '../asset'
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterModule } from '@angular/router';
import { AssetService } from '../asset.service'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AssetComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    RouterModule
  ],
  template: `
    
    <section class="assets">
     
      <h5>現有資產</h5>
      <mat-list>
      <my-asset *ngFor="let myAsset of myAssetCategory"
      [myAsset]=myAsset></my-asset>
      </mat-list>
      
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
