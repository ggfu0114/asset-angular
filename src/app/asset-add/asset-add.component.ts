import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AssetService } from '../asset.service'
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-asset-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  template: `
  <div>
        <h2 class="section-heading">新增資產</h2>
        <form [formGroup]="applyForm" (submit)="addMyAsset()">
           <mat-card>
        <mat-card-content>
          <mat-form-field>
            <mat-label>資產類別</mat-label>
            <mat-select id="assetType">
              <mat-option value="stock">股票</mat-option>
              <mat-option value="cash">現金</mat-option>
              <mat-option value="bond">債卷</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>代碼</mat-label>
            <input matInput formControlName="assetCode">
          </mat-form-field>

          <mat-form-field>
            <mat-label>金額</mat-label>
            <input matInput formControlName="assetAmount">
          </mat-form-field>

          <mat-form-field>
            <mat-label>銀行</mat-label>
            <input matInput formControlName="assetBank">
          </mat-form-field>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button type="submit" class="primary">新增</button>
          </mat-card-actions>
          </mat-card>
        </form>
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
