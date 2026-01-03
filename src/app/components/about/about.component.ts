import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: '💼', label: 'Years Experience', value: '2.5+' },
    { icon: '🚀', label: 'Projects Completed', value: '10+' },
    { icon: '☕', label: 'Cups of Coffee', value: '∞' },
    { icon: '🎯', label: 'Continuous Learning', value: 'Ongoing' }
  ];
}
