import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AssetService } from '../asset.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  template: `
  <div>
    <section class="listing-apply">
        <h2 class="section-heading">新增資產</h2>
        <form [formGroup]="applyForm" (submit)="addMyAsset()">
          
          <label class="input-group-text" for="assetType">類別</label>
            <select class="form-select" id="assetType">
                <option selected>請選擇類別</option>
                <option>股票</option>
                <option>現金</option>
                <option>債卷</option>
            </select>

          
          <label for="assetCode">代碼</label>
          <input id="assetCode" type="text" formControlName="assetCode">

          <label for="assetAmount">金額</label>
          <input id="assetAmount" type="number" formControlName="assetAmount">

          <label for="assetBank">銀行</label>
          <input id="assetBank" type="text" formControlName="assetBank">

          <button type="submit" class="primary">Add</button>
        </form>
      </section>
      </div>
  `,
  styleUrl: './asset-add.component.css'
})
export class AssetAddComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router)
  assetService = inject(AssetService);
  applyForm = new FormGroup({
    assetType: new FormControl(''),
    assetCode: new FormControl(''),
    assetAmount: new FormControl(''),
    assetBank: new FormControl('')
  });

  constructor() {

  }
  addMyAsset() {
    this.assetService.addMyAsset(
      this.applyForm.value.assetType ?? '',
      this.applyForm.value.assetCode ?? '',
      Number(this.applyForm.value.assetAmount) ?? 0,
      this.applyForm.value.assetBank ?? '').then(addResult => {
        console.log('addResult', addResult)
        this.router.navigate(['/'])
      })
  }
}
