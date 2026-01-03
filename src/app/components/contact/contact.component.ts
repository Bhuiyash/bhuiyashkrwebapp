import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'bhuiyashkr@gmail.com',
      link: 'mailto:bhuiyashkr@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7880623036',
      link: 'tel:+917880623036'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Noida, India',
      link: null
    }
  ];

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/bhuiyash', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bhuiyash-kumar/', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/bhuiyash', icon: 'twitter' }
  ];
}
