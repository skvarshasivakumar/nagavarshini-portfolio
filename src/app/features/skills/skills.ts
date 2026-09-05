import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SKILLS } from '../../core/data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  readonly groups = SKILLS;
}
