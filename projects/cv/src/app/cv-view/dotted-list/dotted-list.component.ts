import { Component, Input } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { Size } from '../../shared/types/size';

@Component({
  selector: 'app-dotted-list',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './dotted-list.component.html',
  styleUrl: './dotted-list.component.scss',
})
export class DottedListComponent {
  @Input() items: string[] = [];
  @Input() size: Omit<Size, Size.Medium> = Size.Small;
}
