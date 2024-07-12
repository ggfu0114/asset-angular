import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssetCategory} from '../assetcategory'

@Component({
  selector: 'my-asset',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-type">{{ myAsset.type }}</h2>
      <p class="listing-asset">{{ myAsset.value}}, {{myAsset.ratio }}</p>
    </section>
  `,
  styleUrl: './asset.component.css'
})
export class AssetComponent {
  @Input() myAsset!: AssetCategory;
}
