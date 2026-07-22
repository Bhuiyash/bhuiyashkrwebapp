import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticDirective } from '../../directives/magnetic.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MagneticDirective, RippleDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Software Developer', '.NET Developer', 'Angular Developer', 'Full-Stack Engineer'];
  displayedRole = signal('');
  avatarTilt = signal({ rx: 0, ry: 0 });
  orbParallax = signal({ x: 0, y: 0 });

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typeTimeoutId?: ReturnType<typeof setTimeout>;
  private reduceMotion = false;

  ngOnInit(): void {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.reduceMotion) {
      this.displayedRole.set(this.roles[0]);
      return;
    }
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.typeTimeoutId) {
      clearTimeout(this.typeTimeoutId);
    }
  }

  onAvatarMouseMove(event: MouseEvent): void {
    if (this.reduceMotion) {
      return;
    }
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.avatarTilt.set({ rx: y * -14, ry: x * 14 });
  }

  onAvatarMouseLeave(): void {
    this.avatarTilt.set({ rx: 0, ry: 0 });
  }

  onHeroMouseMove(event: MouseEvent): void {
    if (this.reduceMotion) {
      return;
    }
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.orbParallax.set({ x, y });
  }

  onHeroMouseLeave(): void {
    this.orbParallax.set({ x: 0, y: 0 });
  }

  private typeLoop(): void {
    const current = this.roles[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.displayedRole.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.deleting = true;
        this.typeTimeoutId = setTimeout(() => this.typeLoop(), 1800);
        return;
      }
      this.typeTimeoutId = setTimeout(() => this.typeLoop(), 80);
    } else {
      this.charIndex--;
      this.displayedRole.set(current.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
      this.typeTimeoutId = setTimeout(() => this.typeLoop(), 40);
    }
  }

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
