import { Component } from '@angular/core';
import { TwLayoutComponent } from './core/components/layout/layout.component';

@Component({
  standalone: true,
  imports: [TwLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-twitter';
}
