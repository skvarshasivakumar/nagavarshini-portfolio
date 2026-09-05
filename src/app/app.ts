import { Component } from '@angular/core';
import { NavComponent } from './shared/nav/nav';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { FocusAreasComponent } from './features/focus-areas/focus-areas';
import { ProjectsComponent } from './features/projects/projects';
import { SkillsComponent } from './features/skills/skills';
import { ExperienceComponent } from './features/experience/experience';
import { EducationComponent } from './features/education/education';
import { ContactComponent } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    FocusAreasComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
