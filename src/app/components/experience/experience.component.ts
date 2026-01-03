import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Company Inc.',
      duration: '2023 - Present',
      description: 'Leading development of enterprise web applications and mentoring team members.',
      responsibilities: [
        'Led development of enterprise web applications using Angular and TypeScript',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      title: 'Software Developer',
      company: 'Innovation Labs',
      duration: '2020 - 2023',
      description: 'Developed responsive web applications and RESTful APIs.',
      responsibilities: [
        'Developed responsive web applications using React and Node.js',
        'Designed and implemented RESTful APIs',
        'Optimized application performance and user experience',
        'Participated in agile development processes'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Solutions',
      duration: '2018 - 2020',
      description: 'Built and maintained web applications using modern technologies.',
      responsibilities: [
        'Built and maintained web applications using JavaScript and Python',
        'Assisted in database design and management',
        'Created documentation and technical specifications'
      ],
      technologies: ['JavaScript', 'Python', 'MySQL', 'Git']
    }
  ];
}
