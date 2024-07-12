import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssetAddComponent } from './asset-add/asset-add.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'add',
    component: AssetAddComponent,
    title: '新增資產'
  }
];

export default routeConfig;