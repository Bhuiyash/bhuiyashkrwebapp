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
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      duration: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and web development.',
      achievements: [
        'GPA: 3.8/4.0',
        "Dean's List",
        'Computer Science Honor Society'
      ]
    }
  ];

  certifications: Certification[] = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google',
      year: '2022',
      icon: '🌐'
    },
    {
      name: 'Angular Certified Developer',
      issuer: 'Google',
      year: '2021',
      icon: '🅰️'
    },
    {
      name: 'MongoDB Developer',
      issuer: 'MongoDB Inc.',
      year: '2020',
      icon: '🍃'
    }
  ];
}
