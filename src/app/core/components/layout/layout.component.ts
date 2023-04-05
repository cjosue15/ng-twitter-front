import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwHeaderComponent } from '../header/header.component';
import { TwSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [RouterModule, TwHeaderComponent, TwSidebarComponent],
  selector: 'tw-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class TwLayoutComponent {}
