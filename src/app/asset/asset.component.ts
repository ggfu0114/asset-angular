import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCategory } from '../assetcategory'
import { Asset } from '../asset'
@Component({
  selector: 'my-asset',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-type">{{ myAsset.AssetType }}</h2>
      <p class="listing-asset">{{ myAsset.Code}}, {{myAsset.Label }}, {{myAsset.Code }}, {{myAsset.Market }}</p>
    </section>
  `,
  styleUrl: './asset.component.css'
})
export class AssetComponent {
  @Input() myAsset!: Asset;

}
