import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TwSidebarItemComponent } from './sidebar-item.component';

interface ISidebarItem {
  label: string;
  icon: string | null;
  path: string;
}

@Component({
  standalone: true,
  imports: [NgForOf, TwSidebarItemComponent],
  selector: 'tw-sidebar',
  templateUrl: './sidebar.component.html',
})
export class TwSidebarComponent {
  sidebarItems: ISidebarItem[] = [
    {
      label: 'Home',
      icon: null,
      path: '/',
    },
    {
      label: 'Explore',
      icon: null,
      path: '/explore',
    },
    {
      label: 'Notifications',
      icon: null,
      path: '/notifications',
    },
  ];
}
