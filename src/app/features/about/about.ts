import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { ACHIEVEMENTS, CONTACT, LANGUAGES } from '../../core/data/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.html',
})
export class AboutComponent {
  readonly achievements = ACHIEVEMENTS;
  readonly languages = LANGUAGES;
  readonly contact = CONTACT;
}
