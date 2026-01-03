import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/bhuiyash',
      icon: 'github'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/bhuiyash',
      icon: 'linkedin'
    },
    { 
      name: 'Email', 
      url: 'mailto:bhuiyash@example.com',
      icon: 'email'
    }
  ];
}
