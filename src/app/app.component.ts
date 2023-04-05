import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwLayoutComponent } from './core/components/layout/layout.component';

@Component({
  standalone: true,
  imports: [RouterModule, TwLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-twitter';
}
