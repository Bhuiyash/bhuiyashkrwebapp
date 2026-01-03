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
  technologies = [
    'Angular',
    'TypeScript', 
    'React',
    '.NET',
    'Azure',
    'DevOps',
    'SQL Server'
  ];

  socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/bhuiyash',
      icon: 'github'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/bhuiyash-kumar/',
      icon: 'linkedin'
    },
    { 
      name: 'Email', 
      url: 'mailto:bhuiyashkr@gmail.com',
      icon: 'email'
    }
  ];

  onEmailClick() {
    // Fallback for when mailto doesn't work
    const email = 'bhuiyashkr@gmail.com';
    const subject = 'Hello from your portfolio website';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    // Try to open email client
    window.location.href = mailtoUrl;
    
    // If that doesn't work, show an alert with the email
    setTimeout(() => {
      if (confirm('If your email client didn\'t open, would you like to copy the email address to clipboard?')) {
        navigator.clipboard.writeText(email).then(() => {
          alert('Email address copied to clipboard: ' + email);
        }).catch(() => {
          alert('Email address: ' + email);
        });
      }
    }, 100);
  }
}
