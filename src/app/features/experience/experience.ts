import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { EXPERIENCE } from '../../core/data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  readonly entries = EXPERIENCE;
}
