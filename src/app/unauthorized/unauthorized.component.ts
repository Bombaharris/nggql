import { Component } from '@angular/core';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [NgZorroAntdModule],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {}
