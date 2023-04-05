import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'tw-sidebar-item',
  template: ` <div>
    <div>{{ icon }}</div>
    <a>{{ label }}</a>
  </div>`,
})
export class TwSidebarItemComponent {
  @Input() label = '';
  @Input() icon: string | null = null;
  @Input() path = '';
}
