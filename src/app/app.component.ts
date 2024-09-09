import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  template: `<main>
    <mat-toolbar>
    <button mat-icon-button class="example-icon" (click)="drawer.toggle()" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>My Asset</span>
      <span class="example-spacer"></span>
      <button mat-icon-button extended [routerLink]="['/']">
      <mat-icon>home</mat-icon>
    </button>
    </mat-toolbar>

    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <mat-list>
            <mat-list-item>
            <a mat-list-item routerLink="/add" (click)="drawer.close()">
              <mat-icon>add</mat-icon> 新增資產
            </a>
            </mat-list-item>
            <mat-list-item>
            <a mat-list-item (click)="drawer.close()">
              <mat-icon>close</mat-icon> 關閉
            </a>
            </mat-list-item>
        </mat-list>
      </mat-drawer>

      <div class="example-sidenav-content">
         <section class="content">
            <router-outlet></router-outlet>
          </section>
      </div>
    </mat-drawer-container>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
  showFiller = false;
}
