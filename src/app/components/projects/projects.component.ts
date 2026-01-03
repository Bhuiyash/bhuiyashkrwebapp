import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, real-time notifications, and a comprehensive analytics dashboard for business insights.',
      image: '🛒',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for real-time data visualization with customizable charts, automated reports, and advanced filtering capabilities.',
      image: '📊',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application featuring real-time updates, team workspaces, progress tracking, and smart notifications.',
      image: '📱',
      technologies: ['TypeScript', 'Firebase', 'PWA', 'Angular'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI Chat Application',
      description: 'Modern chat application with AI-powered responses, natural language processing, and multi-language support.',
      image: '🤖',
      technologies: ['Next.js', 'OpenAI', 'WebSocket', 'MongoDB'],
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio website generator with customizable themes, blog support, and SEO optimization.',
      image: '🎨',
      technologies: ['Vue.js', 'Node.js', 'GraphQL', 'AWS'],
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking app with workout plans, nutrition logging, and progress analytics.',
      image: '💪',
      technologies: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      featured: false
    }
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  get otherProjects(): Project[] {
    return this.projects.filter(p => !p.featured);
  }
}
