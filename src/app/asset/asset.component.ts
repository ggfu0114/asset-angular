import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCategory } from '../assetcategory'
import { Asset } from '../asset'
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'my-asset',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTableModule],
  template: `
    <mat-list-item>
      <h2 class="listing-type">{{ myAsset.AssetType }}</h2>
      <p class="listing-asset">{{ myAsset.Code}}, {{myAsset.Label }}, {{myAsset.Code }}, {{myAsset.Market }}, {{myAsset.Value }}</p>
    <mat-list-item>
  `,
  styleUrl: './asset.component.css'
})
export class AssetComponent {
  @Input() myAsset!: Asset;

}
