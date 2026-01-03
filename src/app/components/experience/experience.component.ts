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
      title: 'Associate Software Engineer',
      company: 'Infinite Computer Solutions',
      duration: '2023 - Present',
      description: 'Project: mCare Online (US Healthcare | Angular)',
      responsibilities: [
        'Led end-to-end development of critical healthcare modules, ensuring on-time delivery and alignment with client requirements.',
        'Implemented secure authentication and authorization using MSAL, enhancing access control and user management.',
        'Built CI/CD pipelines on Azure DevOps with SonarQube integration to enforce code quality standards.',
        'Integrated legacy Angular FormKit (v1) into the modern Angular framework with seamless compatibility'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Azure DevOps(CI/CD)', 'SQL Server Management','SonarQube']
    },
    {
     title: 'Associate Software Engineer',
      company: 'Infinite Computer Solutions',
      duration: '2023 - Present',
      description: 'Project: EHRA – Electronic Health Risk Assessment (2025 | US Healthcare)',
      responsibilities: [
        'Added robust form validations to enhance data accuracy and user experience.',
        'Developed dynamic conditional rendering of UI components based on business rules.',
        'Implemented Spanish language localization, improving accessibility for a broader user base.',
        'Worked extensively with JSX, JSON, and modern frontend technologies within the application stack.'
      ],
      technologies: ['ReactNative', 'Node.js', 'Azure DevOps']
    },
    {
      title: 'Associate Software Engineer',
      company: 'Infinite Computer Solutions',
      duration: '2024 - Present',
      description: 'Project: Template Builder (US Healthcare | .NET Framework)',
      responsibilities: [
        'Contributed to a Template Builder system enabling dynamic template creation and management.',
        'Implemented format conversion logic to support multiple template structures.',
        'Designed and developed CRUD operations to efficiently manage template data.'
      ],
      technologies: ['Dot Net Framework','Visual Studio', 'SQL Server Management', 'Git']
    },
    {
        title: 'Associate Software Engineer',
        company: 'Infinite Computer Solutions',
        duration: '2024 - Present',
        description: 'Project: Budget Tracker App – Android (Personal Project)',
        responsibilities: [
          'Developed a budget tracker application for Android using ReactNative.',
          'Implemented features such as expense tracking, budget planning, and financial reporting.',
          'Designed a serverless backend using Google Sheets as a data store, eliminating traditional backend infrastructure.'
        ],
        technologies: ['ReactNative', 'Node.js', 'Android Studio']
    }
  ];
}
