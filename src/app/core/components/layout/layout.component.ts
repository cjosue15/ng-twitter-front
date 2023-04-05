import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwHeaderComponent } from '../header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, TwHeaderComponent],
  selector: 'tw-layout',
  templateUrl: 'layout.component.html',
})
export class TwLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
