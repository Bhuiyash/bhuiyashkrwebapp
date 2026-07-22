import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, CountUpDirective, SpotlightDirective, MagneticDirective, RippleDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: '💼', label: 'Years Experience', target: 2.5, decimals: 1, suffix: '+', display: null },
    { icon: '🚀', label: 'Projects Completed', target: 10, decimals: 0, suffix: '+', display: null },
    { icon: '☕', label: 'Cups of Coffee', target: null, decimals: 0, suffix: '', display: '∞' },
    { icon: '🎯', label: 'Continuous Learning', target: null, decimals: 0, suffix: '', display: 'Ongoing' }
  ];
}
