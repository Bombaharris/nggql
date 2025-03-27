import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Size } from '../../shared/types/size';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss',
})
export class ContentSectionComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() size: Size = Size.Medium;
}
