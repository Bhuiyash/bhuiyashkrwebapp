import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'SASS', level: 85 }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      name: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      name: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 82 },
        { name: 'Jira', level: 85 }
      ]
    }
  ];
}
