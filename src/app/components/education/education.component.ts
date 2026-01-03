import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Dr. A.P.J. Abdul Kalam Technical University',
      duration: '2019 - 2023',
      description: 'Focused on software engineering, algorithms, and web development.',
      achievements: [
        'GPA: 8/10',
        "First Division with Distinction",
        'AKTU'
      ]
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      year: '2025',
      icon: '☁️'
    },
    {
      name: 'Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2025',
      icon: '☁️'
    },
    {
      name: 'Angular Certified Developer',
      issuer: 'Udemy',
      year: '2021',
      icon: '🅰️'
    },
    {
      name: 'React, NodeJS, Express & MongoDB -MERN Fullstack',
      issuer: 'Udemy',
      year: '2023',
      icon: '🍃'
    }
  ];
}
